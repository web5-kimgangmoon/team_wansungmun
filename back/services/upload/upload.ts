import { NextFunction, Request, Response } from "express";
import multer from "multer";
import path from "path";
import Product from "../../models/sequelize/product";

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

const upload = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    console.log(req.session.user);
    console.log(req.files);
    const files = req.files as Express.Multer.File[];
    const titleImg = files[0].filename;
    console.log(titleImg);
    let imgstr = "";

    for (let i = 0; i < files.length; i++) {
      imgstr += files[i].filename + "//";
    }

    console.log("이미지명" + imgstr);

    console.log(imgstr);

    if (!req.session.user) {
      res.status(302).send();
    } else {
      await Product.create({
        productName: req.body.productName,
        isDirectTrade: req.body.isDirectTrade,
        tradeLocation: req.body.tradeLocation,
        categoryId: req.body.categoryId,
        sellerId: req.session.user,
        price: req.body.price,
        content: req.body.content,
        imgs: imgstr,
        titleImg: titleImg,
      });
      res.status(201).send();
    }
  } catch (err) {
    console.error(err);
  }
};
export { uploadMulter, upload };
