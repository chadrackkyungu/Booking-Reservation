import express from "express";
import {
    // countByCity,
    // countByType,
    createHotel,
    deleteHotel,
    getHotel,
    // getHotelRooms,
    getHotels,
    updateHotel,
} from "./../controllers/hotel.js";

const router = express.Router();

//* CREATE
router.post("/", createHotel);

//* UPDATE
router.put("/:id", updateHotel);

//* DELETE
router.delete("/:id", deleteHotel);

//* GET
router.get("/find/:id", getHotel);

export default router