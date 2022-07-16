const jwt = require('jsonwebtoken');
const middleware = {
  verifyToken: (req, res, next) => {
    try {
      const token = req.headers.token;
      if (!token) {
        return res.status(404).json("you're not authenticated!")
      }
      const accessToken = token.split(" ")[1];
      jwt.verify(accessToken, process.env.ACCESS_KEY, (err, user) => {
        if (err) {
          return res.status(404).json("you're not allowed to register your authentication!")
        } else {
          req.user = user;
          next();
        }
      })
    } catch (err) {
      console.log(err);
      return res.status(500).json("err");
    }
  },
}
module.exports = middleware;
