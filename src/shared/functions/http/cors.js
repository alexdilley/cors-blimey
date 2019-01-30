module.exports = ({
  cors: false, // get off my land, arc! (arc-repos/architect#283)
  headers: {
    'Access-Control-Allow-Origin': process.env.BASE_URL,
    'Access-Control-Allow-Credentials': 'true',
  },
});
