const session = require('@architect/shared/functions/http/session');

exports.handler = async req => {
  const sesh = await session.read(req);
  sesh.identity = {id: 'user'};
  const cookie = await session.write(sesh);

  // CORS not required since request is not scripted (via Sign in with Slack,
  // eventually).
  return {cors: false, status: 302, location: process.env.BASE_URL, cookie};
};
