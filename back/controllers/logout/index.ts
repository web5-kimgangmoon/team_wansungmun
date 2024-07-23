import { Request, Response } from "express";

export const Logout = async (req: Request, res: Response) => {
  try {
    req.session.destroy(() => {});
    res.status(201).send();
  } catch (err) {
    console.error(err);
  }
};
