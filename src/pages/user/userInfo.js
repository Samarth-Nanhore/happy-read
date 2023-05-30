import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserInfo = () => {
  const [UserDetail, setUserDetail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userDetail = localStorage.getItem("userDetail");

    if (userDetail) {
      const parsedDetail = JSON.parse(userDetail);
      setUserDetail(parsedDetail);
      // Access the user details directly without using state
      console.log("FirstName:", parsedDetail?.firstName);
      console.log("LastName:", parsedDetail?.lastName);
    }
  }, []);
  console.log(UserDetail);

  const handleLogout = () => {
    localStorage.removeItem("encodedToken");
    localStorage.removeItem("userDetail");
    navigate("/login");
  };

  return (
    <>
      <h1>UserDetail</h1>
      {/* Render the user details */}
      <p>FirstName: {UserDetail?.firstName}</p>
      <p>LastName: {UserDetail?.lastName}</p>
      <p>Email: {UserDetail?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};
