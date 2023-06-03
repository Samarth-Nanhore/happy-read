import { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "../user/login.css";
import { LoginContext } from "../../contexts/LoginContext";

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
        <h2>Login</h2>
        <form onSubmit={handleSumbit}>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              name="email"
              value={state.email}
              onChange={(e) =>
                dispatch({ type: "email", payload: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="form-control"
              name="password"
              value={state.password}
              onChange={(e) =>
                dispatch({ type: "password", payload: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
        <div className="signup-link">
          <p>
            Don't have an account?{" "}
            <NavLink to="/signup">Create New Account</NavLink>
          </p>
        </div>
      </div>
    </>
  );
};
