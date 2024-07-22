import ProductPageContents from "./ProductPageContents";

const Content = () => {
  const category = "음악/앨범";
  const contents = "이거팜";
  return (
    <div>
      <ProductPageContents
        category={category ? category : "undefined"}
        contents={contents ? contents : "못찾음"}
      ></ProductPageContents>
    </div>
  );
};

export default Content;
