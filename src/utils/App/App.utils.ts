import { SetStateAction } from "react";
import { Users } from "./App.types";

//autorizacion del login y/o abrir modales de alerta
export const authHandler =(
    email: string, 
    password: string,
    dataUsers: Users[],
    setShowModal: React.Dispatch<SetStateAction<boolean>>,
    setModalMessage: React.Dispatch<SetStateAction<string>>,
    setAuth: React.Dispatch<SetStateAction<boolean>>,
)=> {
    if(email === '' || password === ''){
      setShowModal(true);
      setModalMessage('Verifica que todos los campos estén llenos');
      return;
    }

    for(let i=0; i<dataUsers.length; i++){
      if(dataUsers[i].password === password && dataUsers[i].email === email){
        setAuth(true);
        return;
      }
    }

    setModalMessage('Tu nombre de usuario o contraseña no son correctos. Verifica tus datos')
    setShowModal(true);
  }

//cerrar modal
export const closeModalHandler =(
    modalStatus: string,
    showModal: boolean,
    setModalStatus: React.Dispatch<SetStateAction<string>>,
    setShowModal: React.Dispatch<SetStateAction<boolean>>,
)=>{
    if(modalStatus === 'show'){
      setModalStatus('hide');
      setTimeout(()=>{
        setShowModal(!showModal);
        setModalStatus('show');
      }, 340);
    }
}

//setter email
export const emailHandler =(
    e: React.FormEvent<HTMLInputElement>,
    setEmail: React.Dispatch<SetStateAction<string>>
) => {
    setEmail(e.currentTarget.value)
}

//setter  password
export const passHandler =(
    e: React.FormEvent<HTMLInputElement>,
    setPass: React.Dispatch<SetStateAction<string>>
) => {
    setPass(e.currentTarget.value)
}