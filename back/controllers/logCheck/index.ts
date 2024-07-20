import User from "../../models/sequelize/user";

export const logCheck = async (req: Request, res: Response) => {
  try {
    if (req.session.user) {
      req.user = await User.findAll({
        where: { id: req.session.user },
        include: [
          {
            model: User,
          },
        ],
        attributes: ["id", "authority"],
      });
    }
  } catch (err) {
    console.error(err);
  }
};
