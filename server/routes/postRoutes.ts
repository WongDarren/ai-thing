import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import Post from "../mongodb/models/post";

dotenv.config();

const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Hello from Post Routes.");
});

export default router;
