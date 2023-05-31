import { useContext } from "react";
import { SignupContext } from "../../contexts/SignupContext";

export const Signup = () => {
  const { handleSumbit, state, dispatch } = useContext(SignupContext);

  return (
    <form onSubmit={handleSumbit}>
      <div>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={(e) =>
              dispatch({ type: "firstName", payload: e.target.value })
            }
            required
          />
        </label>
      </div>
      <div>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={(e) =>
              dispatch({ type: "lastName", payload: e.target.value })
            }
            required
          />
        </label>
      </div>
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
            required
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
            required
          />
        </label>
      </div>
      <div>
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
};
