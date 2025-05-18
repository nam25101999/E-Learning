const mongoose = require('mongoose');

exports.connectDB = async () => {
    try {
        console.log('MONGODB_URI from .env:', process.env.MONGODB_URI);  // in ra để kiểm tra
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting server with Database');
        console.log(error);
    }
}
