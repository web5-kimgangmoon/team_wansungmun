interface IProps {
  children: string;
}

const SingleTextBox = ({ children }: IProps): JSX.Element => {
  return (
    <div className="container pb-3 flex justify-center">
      <div className="px-8 w-full justify-center flex">
        <div className="py-3 w-full text-center border-b border-black font-bold sm:text-xl text-2xl border-b border-black">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SingleTextBox;
