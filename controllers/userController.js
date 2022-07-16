const User = require('../models/User.js');

const userController = {
  getAllUser: async (req, res) => {
    try {
      let users = await User.find();
      users = users.map(user => {
        const { password, ...others } = user._doc;
        return others
      })
      return res.status(200).json(users);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  deleteUser: async (req, res) => {

  }
};
module.exports = userController;
