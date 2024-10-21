const express = require("express");
const router = express.Router();
const Program = require("../models/program");


// Get all programs
router.get("/programs", async (req, res) => {
    try { 
        const programs = await Program.find();
        console.log(programs);
        res.json(programs);

    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
});

//  Get program details by ID

router.get("/programs/:id", async (req,res) => {
    try {
        const program = await Program.findById(req.params.id);
    } catch (error) {
        res.status(404).json({ message: "Program not found by its id" });
        
    }
});

//  play the specifi track
router.get("/program/:id/track/:trackid", async (req, res) => {
    try{
        const program = await Program.findById(req.params.id);
        const track = program.tracks.id(req.params.trackId);
        res.json(track);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
});


module.exports = router;