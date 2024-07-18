import { Request, Response } from "express";
import path from "path";

const getImg = (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, `../../uploads/${req.query.imgName}`));
};

export default getImg;
