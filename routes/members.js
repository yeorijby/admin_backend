import express from "express";
import Members from "../models/Members.js";

const router = express.Router();

router.get("/members", async (req, res) => {
  console.log("fdsafasdfasdfasdfasdfsadfadsfasd");       // 제대로 나오는지 함 보자 

  try {
    const members = await Members.find();
    console.log(members);       // 제대로 나오는지 함 보자 
    res.status(200).json(members);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;