import { useState } from 'react'
import { postLogin } from '@dataAnalysis/services/authAPI'
import { useUserStore } from '../store/authStore'
import { PasswordImage } from './icons/PasswordImage'
import { UserImage } from './icons/UserImage'

export default function LoginForm() {
	const [userName, setUserName] = useState('')
	const [passwd, setPasswd] = useState('')
	const setUser = useUserStore((s) => s.setUser)

	const loginSubmit = async (e) => {
		e.preventDefault()
		try {
			const response = await postLogin(userName, passwd)
			console.log(response)
			setUser(response)
			window.location.href = '/dashboard'
		} catch (error) {
			alert(error)
		}
	}

	return (
		<div className='w-full max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden'>
			<div className='bg-blue-600 py-6 px-4'>
				<h1 className='text-2xl font-bold text-white text-center'>Iniciar sesión</h1>
			</div>
			<form
				onSubmit={loginSubmit}
				className='p-6 space-y-6'
			>
				<div className='space-y-2'>
					<label
						htmlFor='username'
						className='block text-sm font-medium text-gray-700'
					>
						Nombre de usuario
					</label>
					<div className='relative'>
						<UserImage className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
						<input
							id='username'
							type='text'
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
							className='w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
							placeholder='Ingrese su nombre de usuario'
						/>
					</div>
				</div>
				<div className='space-y-2'>
					<label
						htmlFor='password'
						className='block text-sm font-medium text-gray-700'
					>
						Contraseña
					</label>
					<div className='relative'>
						<PasswordImage className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
						<input
							id='password'
							type='password'
							value={passwd}
							onChange={(e) => setPasswd(e.target.value)}
							className='w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
							placeholder='Ingrese su contraseña'
						/>
					</div>
				</div>
				<button
					type='submit'
					className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300'
				>
					Iniciar sesión
				</button>
			</form>
			<div className='px-6 pb-6 text-center'>
				<p className='text-sm text-gray-600'>
					¿No estás registrado?{' '}
					<a
						href='./register'
						className='font-medium text-blue-600 hover:text-blue-500'
					>
						Regístrate ahora
					</a>
				</p>
			</div>
		</div>
	)
}
