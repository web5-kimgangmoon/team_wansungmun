import db from "../models/sequelize";

const mkCase = async () => {
  const cate1 = await db.Category.create({
    cateImg: "test",
    category: "test_1",
  });
  const cate2 = await db.Category.create({
    cateImg: "test",
    category: "test_2",
  });
  const cate3 = await db.Category.create({
    cateImg: "test",
    category: "test_3",
  });
  for (let i = 0; i < 30; i++) {
    await db.Category.create({
      cateImg: `${i}마나`,
      category: `카테고리테스트${i}`,
    });
  }
  const user1 = await db.User.create({
    email: "test1@naver.com",
    nickname: "test_user_1",
    phoneNum: "01012345678",
    password: "1234qwer",
  });
  const user2 = await db.User.create({
    email: "test2@naver.com",
    nickname: "test_user_2",
    phoneNum: "01098765432",
    password: "1234qwer",
  });
  const product = await cate1.createProduct({
    content: "ss",
    price: 0,
    titleImg:
      "http://localhost:3080/api/upload/getImg?imgName=1721212550783_Slice 7 (5).png",
    productName: "네네",
    tradeLocation: "ss",
    deliveryUserId: 1,
    sellerId: 2,
  });
  const pro2 = await cate1.createProduct({
    content: "ss",
    price: 30,
    titleImg: "아아s",
    productName: "네s네",
    tradeLocation: "ss",
    deliveryUserId: 2,
    sellerId: 2,
  });

  const pro3 = await cate2.createProduct({
    content: "seqs",
    price: 305,
    titleImg: "아아ds",
    productName: "네sa네",
    tradeLocation: "ssz",
    deliveryUserId: 1,
    sellerId: 1,
  });

  const product2 = await cate2.addProducts([
    await db.Product.create({
      content:
        "상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. ",
      price: 3000,
      titleImg: "아아ds",
      productName: "시험 데이터",
      tradeLocation: "ssz",
    }),
    await db.Product.create({
      content:
        "상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. ",
      price: 3000,
      titleImg: "아아ds",
      productName: "시험 데이터",
      tradeLocation: "ssz",
    }),
    await db.Product.create({
      content:
        "상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. ",
      price: 3000,
      titleImg: "아아ds",
      productName: "시험 데이터",
      tradeLocation: "ssz",
    }),
    await db.Product.create({
      content:
        "상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. ",
      price: 3000,
      titleImg: "아아ds",
      productName: "시험 데이터",
      tradeLocation: "ssz",
    }),
  ]);

  await pro2.createTradeReceipt({ customerId: 1 });
  await pro3.createTradeReceipt({ customerId: 2 });
  await product.createTradeReceipt({ customerId: 1 });
};

export default mkCase;
