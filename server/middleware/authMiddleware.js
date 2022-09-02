import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../Models/userModel.js';

export const protect = asyncHandler(async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const data = jwt.verify(token, process.env.JWT_SECRET);

    User.findOne({ _id: data._id })
      .then(function (result) {
        console.log(result);
        req.userInfo = result;
        next();
      })
      .catch(function (e) {
        res.json({ err: e });
      });
  } catch (e) {
    res.send({ msg: 'Invalid token' });
  }
});
