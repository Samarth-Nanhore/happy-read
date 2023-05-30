import { useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import "../user/login.css";
import { LoginContext } from "../../contexts/LoginContext";
import { UserInfo } from "./userInfo";

export const Login = () => {
  const { state, dispatch, handleSumbit } = useContext(LoginContext);

  const encodedToken = localStorage.getItem("encodedToken");
  const navigate = useNavigate();

  if (encodedToken) {
    // User is logged in, navigate to the UserInfo page
    navigate("/userinfo");
    return null;
  }

  return (
    <>
      <div id="login-div">
        <form onSubmit={handleSumbit}>
          <div>
            <label>
              Email Address:
              <input
                type="email"
                name="email"
                value={state.email}
                onChange={(e) =>
                  dispatch({ type: "email", payload: e.target.value })
                }
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={state.password}
                onChange={(e) =>
                  dispatch({ type: "password", payload: e.target.value })
                }
              />
            </label>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};
