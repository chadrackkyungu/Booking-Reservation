import express from "express";
import Hotel from "./../models/Hotel.js"

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
router.post("/:id", async (req, res) => {
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(
            req.params.id, { $set: req.body }, { new: true }
        );
        res.status(200).json(updateHotel);
    } catch (error) {
        res.status(500).json(error);
    }
})

export default router