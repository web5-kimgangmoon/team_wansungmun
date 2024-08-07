import Search from "../BoardPage/Search";
import UserCard from "./UserCard";

interface IProps {}

const UserManage = () => {
  return (
    <>
      <div className="flex justify-center">
        <Search></Search>
      </div>

      <div className="flex w-[90%] justify-center">
        <div className="flex flex-wrap justify-between">
          <div>
            <UserCard></UserCard>
          </div>
          <div>
            <UserCard></UserCard>
          </div>
          <div>
            <UserCard></UserCard>
          </div>
          <div>
            <UserCard></UserCard>
          </div>
          <div>
            <UserCard></UserCard>
          </div>
          <div>
            <UserCard></UserCard>
          </div>
          <div>
            <UserCard></UserCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserManage;
