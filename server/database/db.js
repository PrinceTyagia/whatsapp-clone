import mongoose from "mongoose";

const Connection = async () => {
  const URL =
    "mongodb://whatsapp-clone:12345@ac-e5fokuk-shard-00-00.gv5wbap.mongodb.net:27017,ac-e5fokuk-shard-00-01.gv5wbap.mongodb.net:27017,ac-e5fokuk-shard-00-02.gv5wbap.mongodb.net:27017/WHATSAPP-CLONE?ssl=true&replicaSet=atlas-669b03-shard-0&authSource=admin&retryWrites=true&w=majority";
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error.message);
  }
};

export default Connection;
