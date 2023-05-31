import { createContext, useReducer } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const LoginContext = createContext();

const intialState = {
  email: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export const LoginContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const navigate = useNavigate();
  const location = useLocation();

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
      if (encodedToken) {
        localStorage.setItem("encodedToken", encodedToken);
        localStorage.setItem("userDetail", JSON.stringify(foundUser));
        navigate(location?.state?.from?.pathname);
      } else {
        alert("invalid user");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    getUserData();
  };

  return (
    <LoginContext.Provider value={{ state, dispatch, handleSumbit }}>
      {children}
    </LoginContext.Provider>
  );
};
