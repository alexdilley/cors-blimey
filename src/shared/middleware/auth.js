const cors = require('@architect/shared/functions/http/cors');
const session = require('@architect/shared/functions/http/session');

module.exports = async req => {
  const state = await session.read(req);

  return state.identity
    ? req
    : {...cors, body: JSON.stringify({ok: false}), status: 401};
};
