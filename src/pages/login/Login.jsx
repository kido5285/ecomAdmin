import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username: user, password: pass });
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: 'column'
      }}
    >
      <input style={{padding: '10px', marginBottom: 20}}
        type="text"
        placeholder="username"
        onChange={(e) => setUser(e.target.value)}
      />
      <input style={{padding: '10px', marginBottom: 20}}
        type="password"
        placeholder="password"
        onChange={(e) => setPass(e.target.value)}
      />
      <button style={{padding: 10, width: 100}} onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
