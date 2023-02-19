import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";

const Register = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setLoggedInUsername, setId } = useContext(UserContext);

  async function register(e) {
    e.preventDefault();
    const { data } = await axios.post("/register", { username, password });
    setLoggedInUsername(username);
    setId(data.id);
  }

  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto mb-12" onSubmit={register}>
        <input
          type="text"
          placeholder="username"
          className="block w-full rounded-sm p-2 mb-2 border"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="block w-full rounded-sm p-2 mb-2 border"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
