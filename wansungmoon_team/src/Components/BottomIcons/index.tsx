import Icon from "./item";
import login from "../../imgs/icons8-사람-64.png";
import write from "../../imgs/push-outline.svg";
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil/logcheck";

const BottomIcons = () => {
  const user = useRecoilValue(userState);
  return (
    <div className={`flex absolute top-[-4rem]`}>
      {user ? (
        <Icon src={write} path="/productUpload" />
      ) : (
        <Icon src={login} path="/login" />
      )}
    </div>
  );
};

export default BottomIcons;
