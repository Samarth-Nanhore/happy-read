import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const intialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "firstName":
      return { ...state, firstName: action.payload };
    case "lastName":
      return { ...state, lastName: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export const Signup = () => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const navigate = useNavigate();

  const sigupUser = async () => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: state.email,
          password: state.password,
          firstName: state.firstName,
          lastName: state.lastName,
        }),
      });

      const data = await response.json();
      // Handle the response data as needed
      console.log(data);
      alert("Successfully sign up!! please login again");

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    sigupUser();
  };

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
