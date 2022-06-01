const errorMiddleware = (err, _req, res, _next) => {
  console.log(err);
  if (err.code) {
    return res.status(err.code).json({ message: err.message });
  }
  return res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = errorMiddleware;