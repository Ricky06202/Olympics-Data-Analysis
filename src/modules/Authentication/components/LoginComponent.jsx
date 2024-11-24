import { useEffect, useState } from 'react'
import { UserImage } from 'modules/Authentication/components/icons/UserImage'
import { PasswordImage } from 'modules/Authentication/components/icons/PasswordImage'
import InputComponent from 'modules/Authentication/components/InputComponent'
import ButtonComponent from 'modules/Authentication/components/ButtonComponent'
import { postLogin } from '@dataAnalysis/services/authAPI'
import { useUserStore } from '../store/authStore'

export default function LoginForm() {
	const [userName, setUserName] = useState('')
	const [passwd, setPasswd] = useState('')
	const setUser = useUserStore((s) => s.setUser)

	const loginSubmit = () => {
		postLogin(userName, passwd)
			.then((response) => {
				console.log(response)
				setUser(response)
				window.location.href = '/dashboard'
			})
			.catch((error) => {
				alert(error)
			})
	}

	return (
		<div className='grid grid-cols-1 border rounded-sm'>
			<h1 className='flex py-6 px-40  justify-center text-4xl text-white text-center font-semibold bg-login-color'>
				Login
			</h1>
			<div className='flex flex-col p-4 space-y-6 mt-6'>
				<div className='flex px-8 gap-2 justify-center'>
					<UserImage />
					<InputComponent
						text='Nombre de usuario'
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
					/>
				</div>
				<div className='flex px-8 gap-2 justify-center'>
					<PasswordImage />
					<InputComponent
						text='Contraseña'
						value={passwd}
						onChange={(e) => setPasswd(e.target.value)}
					/>
				</div>
				<ButtonComponent
					onClick={loginSubmit}
					text='Login'
					classPlus='py-2 mx-24 text-2xl rounded-sm text-white bg-login-color hover:bg-green-900'
				/>
				<h3 className='text-center'>
					¿No estas registrado?{' '}
					<a
						href='./register'
						className='text-lg font-medium text-login-color hover:text-black'
					>
						Registrate ahora
					</a>
				</h3>
			</div>
		</div>
	)
}
