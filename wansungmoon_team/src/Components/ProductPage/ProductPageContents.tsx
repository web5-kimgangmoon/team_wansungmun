interface IProps {
  category: string;
  contents: string;
}

const ProductPageContents = ({ category, contents }: IProps) => {
  return (
    <div>
      <div className="flex gap-5 mb-5">
        <div className="font-bold text-sm flex items-center">카테고리</div>
        <div>{category}</div>
      </div>
      <div className="mb-5">{contents}</div>
    </div>
  );
};

export default ProductPageContents;
