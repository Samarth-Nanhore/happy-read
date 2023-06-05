import { createContext } from "react";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
export const SignupContext = createContext();

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

export const SignupContextProvider = ({ children }) => {
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
      alert("successfully sign up!! please login again");

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
    <>
      <SignupContext.Provider value={{ handleSumbit, state, dispatch }}>
        {children}
      </SignupContext.Provider>
    </>
  );
};
