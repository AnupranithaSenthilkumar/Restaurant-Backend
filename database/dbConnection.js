import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("mongodb+srv://sssanand70:9DNgzYhIfPpDhpk2@cluster0.panan.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
