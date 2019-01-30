const cookie = require('cookie');
const jwt = require('node-webtokens');

const alg = 'dir';
const enc = 'A128GCM';
// Expect 160 bits (SHA-1) of entropy via a CSPRNG.
const key = process.env.SESSION_SECRET;
// https://tools.ietf.org/html/draft-west-cookie-prefixes
const name = '__Host-SID';

const jwe = {
  create(payload) {
    return jwt.generate(alg, enc, payload, key);
  },

  parse(token) {
    return jwt.parse(token).verify(key);
  },
};

const read = ({headers = {}}) => {
  const jar = cookie.parse(headers.Cookie || '');
  const token = jwe.parse(jar[name]);

  return token.valid ? token.payload : {};
};

// Returns a `Set-Cookie` header string with encrypted/tokenized payload.
const write = payload => {
  const value = jwe.create(payload);

  return cookie.serialize(name, value, {
    httpOnly: true,
    maxAge: 6.3072e7, // 2 years, in secs
    path: '/',
    secure: true,
    sameSite: false, // can be sent along with cross-site requests
  });
};

module.exports = {read, write};
