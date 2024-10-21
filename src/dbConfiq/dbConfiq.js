import mongoose from "mongoose";

export const connectdb = async () => {
  try {
    await mongoose.connect( process.env.DB_URL||"mongodb://localhost:27017/usersForTenant");
    const connection = mongoose.connection;

    connection.on('connected', () => {
      console.log("Database connected");
    });

    connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
      process.exit(1);
    });

  } catch (error) {
    console.error("Error connecting to database:", error.message);
  }
};
