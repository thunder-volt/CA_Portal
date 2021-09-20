import React, { useEffect, useState } from "react";

interface UserContext {
  role: string;
  setRole: any;
}

let initContext: UserContext = {
  role: "",
  setRole: (C: string) => {},
};

const AuthContext = React.createContext(initContext);

function AuthContextProvider(props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  const [role, setRole] = useState<any | null>("");

  async function getRole() {
    setRole(localStorage.getItem("role"));
  }

  useEffect(() => {
    getRole();
  }, []);

  return (
    <AuthContext.Provider value={{ role, setRole }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
