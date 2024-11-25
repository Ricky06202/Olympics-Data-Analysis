import { useState } from "react";
import { postRegister } from "@dataAnalysis/services/authAPI";
import { UserImage } from "./icons/UserImage";
import { MailImage } from "./icons/MailImage";
import { PasswordImage } from "./icons/PasswordImage";

export default function RegisterForm() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postRegister(userName, passwd, email);
      console.log(response);
      window.location.href = "./login";
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="bg-blue-600 py-6 px-4">
        <h1 className="text-2xl font-bold text-white text-center">Registro</h1>
      </div>
      <form onSubmit={registerSubmit} className="p-6 space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre de usuario
          </label>
          <div className="relative">
            <UserImage className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="username"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Escriba su nombre de usuario"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <div className="relative">
            <MailImage className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Escriba su email"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Contraseña
          </label>
          <div className="relative">
            <PasswordImage className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="password"
              type="password"
              value={passwd}
              onChange={(e) => setPasswd(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Escriba su contraseña"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
        >
          Registrar
        </button>
      </form>
      <div className="px-6 pb-6 text-center">
        <p className="text-sm text-gray-600">
          ¿Ya estás registrado?{" "}
          <a
            href="./login"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Inicia Sesión
          </a>
        </p>
      </div>
    </div>
  );
}
