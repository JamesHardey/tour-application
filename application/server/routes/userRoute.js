const express = require('express');
const router = express.Router();
const authController = require('./../controllers/authController');
const userController = require('./../controllers/userController');
const { promisify } = require('promisify');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

// Protect all routes after this middleware
router.use(authController.protect);

// yueling need to implement updatePassoword
router.patch('/updateMyPassword', authController.updateMyPassword);

// inactive me
router.delete('/deleteMe', userController.deleteMe);

// these routes are all about "ME" the logged in user, they can update settings
// router.get('/me', userController.getMe, userController.getUser);
// router.patch(
//   '/updateMe',
//   userController.uploadUserPhoto,
//   userController.resizeUserPhoto,
//   userController.updateMe
// );

router.patch('/updateMe', userController.updateMe);

// these are only restrct to admin
router.use(authController.restrictTo('admin'));
router
  .route('/getAllUser')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  // .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
