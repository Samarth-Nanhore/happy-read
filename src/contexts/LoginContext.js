import { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext();

const intialState = {
  email: "",
  password: "",
  userDetail: { firstName: "", lastName: "" },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "namesetter":
      return {
        ...state,
        userDetail: { firstName: action.firstName, lastName: action.lastName },
      };
    default:
      return state;
  }
};

export const LoginContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const navigate = useNavigate();

  const getUserData = async () => {
    try {
      const creds = {
        email: state.email,
        password: state.password,
      };
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(creds),
      });
      const { encodedToken, foundUser } = await response.json();
      dispatch({
        type: "namesetter",
        firstName: foundUser?.firstName,
        lastName: foundUser?.lastName,
      });
      if (encodedToken) {
        localStorage.setItem("encodedToken", encodedToken);
        navigate("/userinfo");
      } else {
        alert("invalid user");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    if (state.email.trim() === "" || state.password.trim() === "") {
      alert("Please enter both email and password.");
      return;
    }

    getUserData();
  };

  return (
    <LoginContext.Provider value={{ state, dispatch, handleSumbit }}>
      {children}
    </LoginContext.Provider>
  );
};
