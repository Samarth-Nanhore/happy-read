import { useContext } from "react";
import { SignupContext } from "../../contexts/SignupContext";
import "../user/signup.css";

export const Signup = () => {
  const { handleSumbit, state, dispatch } = useContext(SignupContext);

  return (
    <form onSubmit={handleSumbit} id="signup-form">
      <h2>Sign Up</h2>
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          className="form-control"
          name="firstName"
          value={state.firstName}
          onChange={(e) =>
            dispatch({ type: "firstName", payload: e.target.value })
          }
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          className="form-control"
          name="lastName"
          value={state.lastName}
          onChange={(e) =>
            dispatch({ type: "lastName", payload: e.target.value })
          }
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          className="form-control"
          name="email"
          value={state.email}
          onChange={(e) => dispatch({ type: "email", payload: e.target.value })}
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
          Sign Up
        </button>
      </div>
    </form>
  );
};
