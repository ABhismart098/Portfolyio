import express from 'express';
import {
  login,
  logout,
  getUser,
  myProfile,
  contact,
  updateUser,
  addTimeline,
  addYoutube,
  addProject,
  deleteTimeline,
  deleteYoutube,
  deleteProject,
  upload,
} from "../controller/user.js";
import { isAuthenticated } from "../middleware/auth.js";

export const userRouter = express.Router();

// Authentication routes
userRouter.route("/login").post(login);
userRouter.route("/logout").get(logout);

// User routes
userRouter.route("/user").get(getUser);
userRouter.route("/me").get(isAuthenticated, myProfile);

// Admin routes
userRouter.route("/admin/timeline/add").post(isAuthenticated, addTimeline);
userRouter.route("/admin/youtube/add").post(isAuthenticated, addYoutube);
userRouter.route("/admin/project/add").post(isAuthenticated, addProject);

userRouter
  .route("/admin/timeline/:id")
  .delete(isAuthenticated, deleteTimeline);
userRouter.route("/admin/youtube/:id").delete(isAuthenticated, deleteYoutube);
userRouter.route("/admin/project/:id").delete(isAuthenticated, deleteProject);

// Update user with file upload
userRouter
  .route("/admin/update")
  .put(isAuthenticated, upload.single("avatar"), updateUser);

// Contact route
userRouter.route("/contact").post(contact);
