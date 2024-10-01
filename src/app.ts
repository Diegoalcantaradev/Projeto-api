import express from "express";
import mongoose from "mongoose";
import userRoutes from './route/userRoute'

const app = express();
const port = 3000;

app.use(express.json());
app.use('/users',userRoutes);

// database connect
async function connectDatabase() {
    try {
      await mongoose.connect(
        "mongodb+srv://dbshukamaru:0409@cluster0.6fwx3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" // databaseNameHere
      );
      console.log("database connection successfully");
      app.listen(port, () => {
        console.log(`server listening on port ${port}`);
      });
    } catch (error) {
      console.log(`failed to connect database ${error}`);
    }
  }
  // call a database
  connectDatabase();