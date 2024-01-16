import LoginBoard from "./LoginBoard/LoginBoard";
import Modal from "../../components/Modal/Modal";
import dataUsers from '../../assets/users.json';
import { authHandler, emailHandler, passHandler } from "../../utils/App/App.utils";
import { closeModalHandler } from "../../utils/App/App.utils";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [auth, setAuth] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalStatus, setModalStatus] = useState<string>('show');
  const [modalMessage, setModalMessage] = useState<string>('');

  return (
    <>
      {!auth && (
        <LoginBoard
          email={email}
          password={password}
          setPass = {(e)=>emailHandler(e, setEmail)}
          setEmail = {(e)=>passHandler(e, setPassword)}
          setAuth={() => {
            authHandler(
              email,
              password, 
              dataUsers,
              setShowModal,
              setModalMessage,
              setAuth
            )
          }}
        />
      )}
      {showModal ? (
        <Modal
          modalMessage={modalMessage}
          statusModal={modalStatus}
          setModal={() => {
            closeModalHandler(
              modalStatus,
              showModal,
              setModalStatus,
              setShowModal
            )
          }}
        />
      ) : (
        <></>
      )}
      {auth && <></>}
    </>
  );
}

export default App;
