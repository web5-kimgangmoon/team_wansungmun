import Board from "./Board";

interface IProps {}

const BoardLayout = () => {
  return (
    <div className="flex justify-center">
      <Board></Board>
      <Board></Board>
      <Board></Board>
      <Board></Board>
    </div>
  );
};

export default BoardLayout;
