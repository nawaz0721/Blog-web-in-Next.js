import mongoose from "mongoose";

export async function connectDB() {
  let isConnected = false;
  if (isConnected) return "DB is already connected";

  try {
    let connected = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to the MongoDB database");
    if (connected.connection.readyState == 1) isConnected = true;
  } catch (err) {
    console.error("Failed to connect to the database: ", err);
  }
}
