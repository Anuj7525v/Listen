const mongoose = require('mongoose');
const Program = require("./models/program");
const programs = require("./data/bhaktiData");



const seedDatabase = async () => {
    try{
        await Program.deleteMany(); // Clear existing data
     const result = await Program.insertMany(programs);  // Insert sample data
        console.log(`${result.length} programs inserted into the database`);
    }
    catch(err){
        console.error('Failed to seed database:',err);
        process.exit(1);
    }
};

seedDatabase();