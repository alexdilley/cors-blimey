const arc = require('@architect/functions');
const auth = require('@architect/shared/middleware/auth');
const cors = require('@architect/shared/functions/http/cors');
const uuid = require('uuid/v4');

const route = async req => {
  const {saying} = req.body;

  return {
    ...cors,
    status: 201,
    body: JSON.stringify({slang: {id: uuid(), saying}}), // echo it back
  };
};

exports.handler = arc.middleware(auth, route);
