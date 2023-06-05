import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../user/UserDetail.css";

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
    <div className="user-info-container">
      <h1>Welcome back</h1>
      <div className="user-info">
        <p>
          <span className="info-label">First Name:</span>{" "}
          {UserDetail?.firstName}
        </p>
        <p>
          <span className="info-label">Last Name:</span> {UserDetail?.lastName}
        </p>
        <p>
          <span className="info-label">Email:</span> {UserDetail?.email}
        </p>
      </div>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
