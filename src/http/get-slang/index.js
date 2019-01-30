const arc = require('@architect/functions');
const auth = require('@architect/shared/middleware/auth');
const cors = require('@architect/shared/functions/http/cors');
const session = require('@architect/shared/functions/http/session');

const route = async req => ({
  ...cors,
  type: 'application/json',
  body: JSON.stringify({slangs: [{saying: "cor blimey, guv'nor!"}]}),
});

exports.handler = arc.middleware(auth, route);
