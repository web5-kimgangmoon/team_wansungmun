import { NextFunction, Request, Response } from "express";
import multer from "multer";
import path from "path";

const uploadMulter = (imgs: string) =>
  multer({
    storage: multer.diskStorage({
      destination: (req, file, callback) => {
        callback(null, "./uploads");
      },
      filename: (req, file, callback) => {
        callback(null, `${Date.now()}_${file.originalname}`);
      },
    }),
  }).array(imgs);

const upload = (req: Request, res: Response) => {
  console.log(req.query);
  console.log(req.files);
  if (!req.files) {
    res.send({ files: undefined });
  }
  const files: string[] = [];
  for (let item of req.files as Express.Multer.File[]) {
    files.push(
      `http://localhost:3080/api/upload/getImg?imgName=${item.filename}`
    );
  }
  res.send({ files });
};

export { uploadMulter, upload };
