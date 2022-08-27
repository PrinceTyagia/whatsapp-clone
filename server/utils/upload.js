import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

const storage = new GridFsStorage({
  url: "mongodb://whatsapp-clone:12345@ac-e5fokuk-shard-00-00.gv5wbap.mongodb.net:27017,ac-e5fokuk-shard-00-01.gv5wbap.mongodb.net:27017,ac-e5fokuk-shard-00-02.gv5wbap.mongodb.net:27017/WHATSAPP-CLONE?ssl=true&replicaSet=atlas-669b03-shard-0&authSource=admin&retryWrites=true&w=majority",
  options: { useUnifiedTopology: true, useNewUrlParser: true },
  file: (request, file) => {
    const match = ["image/png", "image/jpg"];
    if (match.indexOf(file.mimetype) === -1) {
      return `${Date.now()}-file-${file.originalname}`;
    }
    return {
      bucketName: "photos",
      filename: `${Date.now()}-file-${file.originalname}`,
    };
  },
});
export default multer({ storage });
