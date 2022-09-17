import express from "express";
import {
    createRoom,
    deleteRoom,
    getRoom,
    getRooms,
    updateRoom,
    updateRoomAvailability,
} from "./../controllers/room.js";
import { verifyAdmin } from "./../utils/verifyToken.js";

const router = express.Router();

//* CREATE
//When creating a room for a hotel using the hotel ID
router.post("/:hotelid", verifyAdmin, createRoom);

//* UPDATE
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateRoom);

//* DELETE
//To Delete the room you need to delete it by passing the room ID and the hotel ID at the same time
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//* GET
router.get("/:id", getRoom);

//* GET ALL
router.get("/", getRooms);


export default router;