import express from "express";
import Hotel from "./../models/Hotel.js"
import { createError } from "./../utils/error.js";

const router = express.Router();


//* Create new hotels
router.post("/", async (req, res) => {
    const newHotel = new Hotel(req.body);

    try {
        const saveHotel = await newHotel.save();
        res.status(200).json(saveHotel);
    } catch (error) {
        res.status(500).json(error);
    }
})

//* Update new hotels
router.put("/:id", async (req, res) => {
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(
            req.params.id, { $set: req.body }, { new: true }
        );
        res.status(200).json(updateHotel);
    } catch (error) {
        res.status(500).json(error);
    }
})

//* Delete new hotels
router.put("/:id", async (req, res) => {
    try {
        await Hotel.deleteOne(req.params.id);
        res.status(200).json(" you have successful delete this hotel!! ");

    } catch (error) {
        res.status(500).json(error);
    }
})


//* Get  hotel by ID
router.get("/:id", async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (error) {
        res.status(500).json(error);
    }
})


//* Get all hotel b
router.get("/", async (req, res) => {

    const failed = true;
    // if (failed) return next(createError(401, "you are not authenticated!"))

    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);

    } catch (error) {
        res.status(500).json(error);
    }
})

export default router