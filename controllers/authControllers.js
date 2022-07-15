const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authControllers = {
  generateToken: (user, key, expiresIn) => {
    return jwt.sign({
      id: user.id,
      isAdmin: user.isAdmin,
    }, key, { expiresIn: expiresIn })
  },
  registerUser: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      //create new User;
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      })
      //save new user to DB
      const user = await newUser.save();
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username })
      if (!user) {
        return res.status(401).json("not found");
      }
      const isvalid = await bcrypt.compare(req.body.password, user.password);
      if (!isvalid) {
        return res.status(404).json("wrong password");
      }
      const accessToken = authControllers.generateToken(user, process.env.ACCESS_KEY, '20m');
      res.cookie("token", accessToken, {
        httpOnly: true,
      });
      return res.status(200).json({ accessToken });
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}
module.exports = authControllers;

