const mongoose = require('mongoose');
const DB = "mongodb+srv://LearningBin:learningbin@cluster0.cbiki.mongodb.net/mernstack?retryWrites=true&w=majority";
mongoose.connect(DB,{      
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log(`connection successful`);
}).catch((err)=> console.log(`connection failed`));
