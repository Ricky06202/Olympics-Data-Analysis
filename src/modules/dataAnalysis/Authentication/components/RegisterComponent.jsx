import { useEffect, useState } from "react";
import InputComponent from "@dataAnalysis/Authentication/components/InputComponent";
import ButtonComponent from "@dataAnalysis/Authentication/components/ButtonComponent";
import { postRegister } from "@dataAnalysis/services/authAPI";

export default function registerForm() {
  const [userName, setUserName] = useState("");
  const [passwd, setPasswd] = useState("");
  const [email, setEmail] = useState("");

  const registerSubmit = () => {
    postRegister(userName, passwd, email).then((response) => {
      console.log(response);
      window.location.href = "authentication/login";
    });
  };

  return (
    <div className=" grid grid-cols-1  rounded-sm justify-center">
      <div className="flex flex-col bg-white gap-4 border">
        <h1 className="p-6 text-3xl font-bold text-white text-center bg-blue-500 ">
          Registro
        </h1>
        <div className="flex flex-col items-center gap-6 mt-4">
          <InputComponent
            text="Escriba su nombre de usuario"
            classPlus="p-4 px-32 mx-6"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <InputComponent
            text="Escriba su email"
            classPlus="p-4 px-32 mx-6"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputComponent
            text="Escriba su contraseña"
            classPlus="p-4 px-32 mx-6"
            value={passwd}
            onChange={(e) => setPasswd(e.target.value)}
          />
          {/* <InputComponent
            text="Escriba su contrasena de nuevo"
            classPlus="p-4 px-32 mx-6"
          /> */}
        </div>
        <ButtonComponent
          onClick={registerSubmit}
          text="Registrar"
          classPlus="p-4 my-12 mx-24 bg-blue-500 hover:bg-blue-900"
        />
        <h3 className="p-4 text-center text-xl">
          ¿Ya estas registrado?{" "}
          <a
            href="./login"
            className="font-semibold text-blue-500 hover:text-blue-700"
          >
            Inicia Sesión
          </a>
        </h3>
      </div>
    </div>
  );
}
