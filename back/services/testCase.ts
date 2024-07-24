import db from "../models/sequelize";

const mkCase = async () => {
  const cate1 = await db.Category.create({
    cateImg: "아아아",
    category: "히히히",
  });
  const cate2 = await db.Category.create({
    cateImg: "아유아",
    category: "히히히",
  });
  const cate3 = await db.Category.create({
    cateImg: "아미아",
    category: "히히히",
  });
  for (let i = 0; i < 30; i++) {
    await db.Category.create({
      cateImg: `${i}마나`,
      category: `${i}무기`,
    });
  }
  const product = await cate1.createProduct({
    content: "ss",
    price: 0,
    titleImg: "http://localhost:3080/api/upload/getImg?imgName=1721212550783_Slice 7 (5).png",
    productName: "네네",
    tradeLocation: "ss",
  });
  const pro2 = await cate1.createProduct({
    content: "ss",
    price: 30,
    titleImg: "아아s",
    productName: "네s네",
    tradeLocation: "ss",
  });

  const pro3 = await cate2.createProduct({
    content: "seqs",
    price: 305,
    titleImg: "아아ds",
    productName: "네sa네",
    tradeLocation: "ssz",
  });
  const user1 = await db.User.create({
    email: "dsa",
    nickname: "dsad",
    phoneNum: "dsad",
    password: "dsad",
  });
  const user2 = await db.User.create({
    email: "dsaqq",
    nickname: "dsadgs",
    phoneNum: "dsadzc",
    password: "kks",
  });
  await user1.addProducts([pro2, pro3]);
  await user2.addProduct(product);
};

export default mkCase;
