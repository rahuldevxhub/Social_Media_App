import express from "express";
import {
  acceptConnectionRequest,
  discoverUsers,
  followUser,
  getUserConnection,
  getUserData,
  sendConnectionRequest,
  unfollowUser,
  updateUserData,
} from "../controllers/userController.js";
import { protect } from "../middleware/auth.js";
import { upload } from "../configs/multer.js";

const userRouter = express.Router();

//get user
userRouter.get("/data", protect, getUserData);

// for update the profile and the cover
userRouter.post(
  "/update",
  upload.fields([
    { name: "profile", maxCount: 1 },
    { name: "cover", maxCount: 1 },
  ]),
  protect,
  updateUserData,
);

// for discover(search)
userRouter.post("/discover", protect, discoverUsers);

// follow
userRouter.post("/follow", protect, followUser);

// unfollow
userRouter.post("/unfollow", protect, unfollowUser);

//for connections
userRouter.post('/connect',protect,sendConnectionRequest)

//accept
userRouter.post('/accept',protect,acceptConnectionRequest);

userRouter.get('/connections',protect,getUserConnection)


export default userRouter;
