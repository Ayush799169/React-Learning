import { useContext } from "react";
import { UserContext } from "./context/useContext";

function App() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>Hello {user.Name}</h1>
      <p>Role: {user.Role}</p>
    </div>
  );
}

export default App;