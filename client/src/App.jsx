import axios from "axios";
import Routes from "./Routes";
import { UserContextProvider } from "./UserContext";

function App() {
  axios.defaults.baseURL = "http://localhost:4000";
  axios.defaults.withCredentials = true;

  return (
    <div>
      <UserContextProvider>
        <Routes />
      </UserContextProvider>
    </div>
  );
}

export default App;
