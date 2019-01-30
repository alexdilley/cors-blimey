const arc = require('@architect/functions');
const auth = require('@architect/shared/middleware/auth');
const cors = require('@architect/shared/functions/http/cors');
const session = require('@architect/shared/functions/http/session');

const route = async req => {
  const sesh = await session.read(req);
  delete sesh.identity;
  const cookie = await session.write(sesh);

  return {...cors, status: 202, cookie};
};

exports.handler = arc.middleware(auth, route);
