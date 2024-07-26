import { createContext, useState, useEffect } from "react";

//types for useState values
type AuthContextValues = {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
};

// creating context to pass login token deep down to routertree in main,
// without explicitly passing props
export const AuthContext = createContext<AuthContextValues>({
  token: "",
  setToken: () => {},
});

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  // token values
  const [token, setToken] = useState<string>("");
  // useeffect function to get the auth string from localstorage to setToken
  useEffect(() => {
    const authState = localStorage.getItem("auth-state");
    if (authState) {
      // if there is an auth-state item parse it and getting value token
      const tokenFromLocal = JSON.parse(authState).token;
      // setting token with value from localstorage token
      setToken(tokenFromLocal);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}
// accessing context hook in component function:
// const {setToken} = useContext(AuthContext)
