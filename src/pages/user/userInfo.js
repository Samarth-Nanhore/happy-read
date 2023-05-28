import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";

export const UserInfo = () => {
  const { state } = useContext(LoginContext);

  return (
    <>
      <h1>UserDetail</h1>
      <p>FirstName: {state.userDetail.firstName}</p>
      <p>LastName: {state.userDetail.lastName}</p>
    </>
  );
};
