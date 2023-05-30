import { useEffect, useState } from "react";

export const UserInfo = () => {
  const [UserDetail, setUserDetail] = useState(null);

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

  return (
    <>
      <h1>UserDetail</h1>
      {/* Render the user details */}
      <p>FirstName: {UserDetail?.firstName}</p>
      <p>LastName: {UserDetail?.lastName}</p>
      <p>Email: {UserDetail?.email}</p>
    </>
  );
};
