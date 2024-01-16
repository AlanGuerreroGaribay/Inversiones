import "./LoginBoard.css";

interface Props{
  password: string,
  email: string,
  setAuth: React.MouseEventHandler,
  setPass: React.ChangeEventHandler<HTMLInputElement>
  setEmail: React.ChangeEventHandler<HTMLInputElement>
}

const LoginBoard = ({password, email, setAuth, setPass, setEmail}:Props) => {
  return (
    <>
      <div className="login-container">
        <div className="login-content">
            <input onChange={setEmail} value={email} placeholder="password" />
            <input type="password" onChange={setPass} value={password} placeholder="email"/>
            <button onClick={setAuth}>
                Ingresar
            </button>
        </div>
      </div>
    </>
  );
};

export default LoginBoard;
