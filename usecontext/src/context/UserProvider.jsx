import { UserContext } from "./useContext";

function UserProvider({ children }) {
  const user = {
    Name: "Ayush",
    Role: "Frontend Developer",
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;