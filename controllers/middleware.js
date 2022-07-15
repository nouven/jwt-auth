const jwt = require('jsonwebtoken');
const middleware = {
  verifyToken: (req, res, next) => {
    const token = req.headers.token;
    if (!token) {
      return res.status(404).json("you're not authenticated!")
    }
    const accessToken = token.split(" ")[1];
    jwt.verify(accessToken, process.env.ACCESS_KEY, (err, user) => {
      if (err) {
        return res.status(404).json("you're not allowed to register your authentication!")
      }
      req.user = user;
    })

    next();
  },
}
module.exports = middleware;
