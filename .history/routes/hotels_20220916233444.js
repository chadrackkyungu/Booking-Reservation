import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
    const newHotel = new Hotel(req.body);

    try {
        const saveHotel = await newHotel.save();
        res.status(200).json(saveHotel);
    } catch (error) {
        res.status(500).json(error);
    }
})

export default router