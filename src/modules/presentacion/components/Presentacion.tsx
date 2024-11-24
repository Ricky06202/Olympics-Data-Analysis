import { useState, useEffect, useRef } from 'react'
import { PythonIcon } from './icons/Python'
import { DjangoIcon } from './icons/DjangoIcon'
import { Server } from './icons/Server'
import { PostgreIcon } from './icons/PostgreIcon'
import { SupaBaseIcon } from './icons/SupaBaseIcon'
import { BarChart } from './icons/BarChart'
import { AstroIcon } from './icons/AstroIcon'
import { ReactIcon } from './icons/ReactIcon'
import { Box } from './icons/Box'
import { RefreshCw } from './icons/RefreshCw'
import { TailwindIcon } from './icons/TailwinIcon'
import { GithubIcon } from './icons/Github'
import { Award } from './icons/Award'
import { ChevronRight } from './icons/ChevronRight'
import { PenTool } from './icons/PenToolIcon'
import { Users } from './icons/Users'

import azner from '../assets/azner.jpeg'
import ricky from '../assets/ricky.jpeg'

const teamMembers = [
	{
		name: 'Ricardo Sanjur',
		role: 'Desarrollador Full Stack',
		avatar: ricky.src,
		link: 'https://github.com/Ricky06202',
	},
	{
		name: 'Azner Aparicio',
		role: 'Desarrollador Full Stack',
		avatar: azner.src,
		link: 'https://github.com/Azner01',
	},
]

const tools = [
	{ name: 'Python', icon: PythonIcon, description: 'Lenguaje principal para el backend y análisis de datos.' },
	{
		name: 'Django',
		icon: DjangoIcon,
		description: 'Framework web para construir la API y manejar la lógica del servidor.',
	},
	{ name: 'API Rest', icon: Server, description: 'Arquitectura para la comunicación entre el frontend y backend.' },
	{
		name: 'PostgreSQL',
		icon: PostgreIcon,
		description: 'Base de datos relacional para almacenar los datos olímpicos.',
	},
	{
		name: 'Supabase',
		icon: SupaBaseIcon,
		description: 'Plataforma de backend como servicio para gestión de base de datos y autenticación.',
	},
	{ name: 'Kaggle', icon: BarChart, description: 'Fuente de datos para las estadísticas olímpicas históricas.' },
	{
		name: 'Astro',
		icon: AstroIcon,
		description: 'Framework para construir sitios web rápidos y orientados al contenido.',
	},
	{ name: 'React', icon: ReactIcon, description: 'Biblioteca para construir interfaces de usuario interactivas.' },
	{ name: 'Zustand', icon: Box, description: 'Gestión de estado global y persistencia en caché.' },
	{ name: 'Axios', icon: RefreshCw, description: 'Cliente HTTP para realizar peticiones a la API.' },
	{ name: 'Tailwind', icon: TailwindIcon, description: 'Framework de CSS para diseño rápido y responsivo.' },
	{
		name: 'GitHub',
		icon: GithubIcon,
		description: 'Control de versiones y colaboración en el desarrollo del proyecto.',
	},
]

export default function Home() {
	const [activeSection, setActiveSection] = useState('')
	const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

	useEffect(() => {
		const handleScroll = () => {
			const sections = Object.keys(sectionRefs.current)
			let currentActiveSection = ''

			sections.forEach((sectionId) => {
				const section = sectionRefs.current[sectionId]
				if (section) {
					const rect = section.getBoundingClientRect()
					if (rect.top <= 50 && rect.bottom >= 50) {
						currentActiveSection = sectionId
					}
				}
			})

			setActiveSection(currentActiveSection)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('animate-fade-in')

						if (entry.target.id === 'proyecto' || entry.target.id === 'inicio' || entry.target.id === 'conclusion') {
							entry.target.classList.add('animate-slide-up')
						} else if (entry.target.id === 'equipo' || entry.target.id === 'metodologia') {
							entry.target.classList.add('animate-slide-left')
						} else if (entry.target.id === 'herramientas' || entry.target.id === 'cursos') {
							entry.target.classList.add('animate-slide-right')
						}
					} else {
						entry.target.classList.remove(
							'animate-fade-in',
							'animate-slide-up',
							'animate-slide-left',
							'animate-slide-right'
						)
					}
				})
			},
			{ threshold: 0.1 }
		)

		Object.values(sectionRefs.current).forEach((section) => {
			if (section) observer.observe(section)
		})

		return () => observer.disconnect()
	}, [])

	return (
		<div className='min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-purple-100'>
			<nav className='sticky top-0 z-50 bg-white bg-opacity-90 shadow-md'>
				<div className='container mx-auto px-6 py-3'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center'>
							<Award className='h-8 w-8 text-blue-600 mr-2' />
							<span className='text-2xl font-bold text-blue-600'>OlympiData</span>
						</div>
						<div className='hidden md:flex space-x-4'>
							{['inicio', 'proyecto', 'equipo', 'herramientas', 'metodologia', 'cursos', 'conclusion'].map((item) => (
								<a
									key={item}
									href={`#${item}`}
									className={`text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium ${
										activeSection === item ? 'bg-blue-100' : ''
									}`}
								>
									{item.charAt(0).toUpperCase() + item.slice(1)}
								</a>
							))}
						</div>
						<a
							href='/authentication/login'
							className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center'
						>
							Probar ahora
							<ChevronRight className='ml-2 h-4 w-4' />
						</a>
					</div>
				</div>
			</nav>

			<main className='flex-grow container mx-auto px-6 py-8'>
				<section
					id='inicio'
					ref={(el) => (sectionRefs.current['inicio'] = el)}
					className='min-h-screen flex items-center justify-center py-20'
				>
					<div className='text-center'>
						<h1 className='text-5xl font-bold mb-6'>OlympiData: Tu Guía de Apuestas Olímpicas</h1>
						<p className='text-xl mb-8'>Análisis de datos de medallas olímpicas para potenciar tus apuestas</p>
						<a
							href='/authentication/login'
							className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg inline-flex items-center'
						>
							Comienza a analizar
							<BarChart className='ml-2 h-5 w-5' />
						</a>
					</div>
				</section>

				<section
					id='proyecto'
					ref={(el) => (sectionRefs.current['proyecto'] = el)}
					className='py-20'
				>
					<h2 className='text-3xl font-bold mb-6'>Sobre el Proyecto</h2>
					<div className='bg-white shadow-lg rounded-lg p-6'>
						<h3 className='text-xl font-semibold mb-2'>Descripción del Proyecto</h3>
						<p>
							OlympiData es un proyecto innovador que analiza los datos históricos de las medallas de oro, plata y
							bronce obtenidas por los distintos países en las olimpiadas. Nuestro objetivo es proporcionar a los
							apostadores información valiosa y gráficas detalladas para mejorar sus estrategias de apuestas en eventos
							olímpicos.
						</p>
					</div>
				</section>

				<section
					id='equipo'
					ref={(el) => (sectionRefs.current['equipo'] = el)}
					className='py-20'
				>
					<h2 className='text-3xl font-bold mb-6'>Nuestro Equipo</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						{teamMembers.map((member, index) => (
							<a
								href={member.link}
								key={index}
								target='_blank'
								className='bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:bg-gray-100'
							>
								<div className='flex items-center space-x-4'>
									<div className='w-16 h-16 rounded-full overflow-hidden'>
										<img
											src={member.avatar}
											alt={member.name}
											className='w-full h-full object-cover'
										/>
									</div>
									<div>
										<h3 className='text-xl font-semibold'>{member.name}</h3>
										<p className='text-gray-600'>{member.role}</p>
									</div>
								</div>
							</a>
						))}
					</div>
				</section>

				<section
					id='herramientas'
					ref={(el) => (sectionRefs.current['herramientas'] = el)}
					className='py-20'
				>
					<h2 className='text-3xl font-bold mb-6'>Herramientas Utilizadas</h2>
					<div className='bg-white shadow-lg rounded-lg p-6'>
						<div className='mb-6'>
							<h3 className='text-xl font-semibold mb-4'>Tecnologías de Backend</h3>
							<p className='mb-4'>
								Utilizamos una combinación de tecnologías potentes para el backend, incluyendo Python y Django para la
								lógica del servidor, PostgreSQL y Supabase para el almacenamiento de datos, y una API REST para la
								comunicación con el frontend. Los datos históricos de las olimpiadas se obtienen de Kaggle.
							</p>
							<div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
								{tools
									.filter((tool) =>
										['Python', 'Django', 'API Rest', 'PostgreSQL', 'Supabase', 'Kaggle'].includes(tool.name)
									)
									.map((tool) => (
										<div
											key={tool.name}
											className='relative group'
										>
											<div className='flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200'>
												<tool.icon className='h-6 w-6' />
												<span>{tool.name}</span>
											</div>
											<div className='absolute z-10 hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow-lg p-2 w-48 text-sm'>
												{tool.description}
											</div>
										</div>
									))}
							</div>
						</div>
						<div>
							<h3 className='text-xl font-semibold mb-4'>Tecnologías de Frontend</h3>
							<p className='mb-4'>
								Para el frontend, aprovechamos la velocidad de Astro combinada con la interactividad de React. Zustand
								nos ayuda con la gestión del estado, mientras que Axios facilita las peticiones a la API. Tailwind CSS
								nos permite un diseño rápido y responsivo.
							</p>
							<div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
								{tools
									.filter((tool) => ['Astro', 'React', 'Zustand', 'Axios', 'Tailwind', 'GitHub'].includes(tool.name))
									.map((tool) => (
										<div
											key={tool.name}
											className='relative group'
										>
											<div className='flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200'>
												<tool.icon className='h-6 w-6' />
												<span>{tool.name}</span>
											</div>
											<div className='absolute z-10 hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow-lg p-2 w-48 text-sm'>
												{tool.description}
											</div>
										</div>
									))}
							</div>
						</div>
					</div>
				</section>

				<section
					id='metodologia'
					ref={(el) => (sectionRefs.current['metodologia'] = el)}
					className='py-20'
				>
					<h2 className='text-3xl font-bold mb-6'>Metodología de Trabajo</h2>
					<div className='bg-white shadow-lg rounded-lg p-6'>
						<div className='flex items-center justify-between mb-4'>
							<h3 className='text-xl font-semibold'>Flujo de Trabajo con GitHub</h3>
							<GithubIcon className='h-8 w-8 text-gray-700' />
						</div>
						<ol className='list-decimal list-inside space-y-4'>
							<li>
								<strong>Inicio del Proyecto:</strong> Creación del repositorio en GitHub y configuración inicial.
							</li>
							<li>
								<strong>Protección de la Rama Principal:</strong> Configuración de la rama 'main' para evitar cambios
								directos.
							</li>
							<li>
								<strong>Desarrollo en Ramas:</strong> Cada miembro del equipo crea ramas para sus tareas específicas.
							</li>
							<li>
								<strong>Revisión de Código:</strong> Pull requests y revisiones de código antes de la integración.
							</li>
							<li>
								<strong>Integración al Main:</strong> Merge de las ramas revisadas y aprobadas a la rama principal.
							</li>
							<li>
								<strong>Despliegue Continuo:</strong> Actualización automática del entorno de producción tras la
								integración.
							</li>
						</ol>
					</div>
				</section>

				<section
					id='cursos'
					ref={(el) => (sectionRefs.current['cursos'] = el)}
					className='py-20'
				>
					<h2 className='text-3xl font-bold mb-6'>Cursos Relacionados</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<div className='bg-white shadow-lg rounded-lg p-6'>
							<h3 className='text-xl font-semibold mb-2'>Tópicos Avanzados 1</h3>
							<p className='text-gray-600 mb-2'>Impartido por el Prof. Vladimir Villareal</p>
							<p>
								Este curso nos proporcionó conocimientos avanzados que fueron fundamentales para el desarrollo de
								nuestro proyecto.
							</p>
						</div>
						<div className='bg-white shadow-lg rounded-lg p-6'>
							<h3 className='text-xl font-semibold mb-2'>Herramientas de Programación Aplicada 4</h3>
							<p className='text-gray-600 mb-2'>Impartido por el Prof. José Mendoza</p>
							<p>
								Las herramientas y técnicas aprendidas en este curso fueron esenciales para la implementación práctica
								de OlympiData.
							</p>
						</div>
					</div>
				</section>

				<section
					id='conclusion'
					ref={(el) => (sectionRefs.current['conclusion'] = el)}
					className='py-20'
				>
					<h2 className='text-3xl font-bold mb-6'>Conclusiones</h2>
					<div className='bg-white shadow-lg rounded-lg p-6'>
						<h3 className='text-xl font-semibold mb-2'>Aprendizaje y Logros</h3>
						<p className='mb-4'>
							El desarrollo de OlympiData ha sido una experiencia enriquecedora que nos ha permitido aplicar y expandir
							nuestros conocimientos tanto en el backend como en el frontend:
						</p>
						<ul className='list-disc pl-6 space-y-2'>
							<li>
								En el backend, profundizamos en el uso de Django para crear APIs robustas y escalables, y en la gestión
								eficiente de bases de datos con PostgreSQL y Supabase.
							</li>
							<li>
								En el frontend, exploramos las capacidades de Astro para crear sitios web rápidos, combinándolo con la
								interactividad de React y la gestión de estado con Zustand.
							</li>
							<li>
								Aprendimos la importancia de una metodología de trabajo estructurada, utilizando GitHub para la
								colaboración efectiva y el control de versiones.
							</li>
						</ul>
						<p className='mt-4'>
							Estamos sumamente satisfechos con el resultado logrado. OlympiData no solo cumple con los objetivos
							iniciales del proyecto, sino que también representa un hito significativo en nuestro crecimiento como
							desarrolladores full stack.
						</p>
					</div>
				</section>
			</main>

			<footer className='bg-gray-800 text-white py-8'>
				<div className='container mx-auto px-6'>
					<div className='flex flex-col md:flex-row justify-between items-center'>
						<div className='mb-4 md:mb-0'>
							<h3 className='text-2xl font-bold'>OlympiData</h3>
							<p>Tu guía para apuestas olímpicas inteligentes</p>
						</div>
						<div className='flex space-x-4'>
							<a
								href='https://github.com/Ricky06202/Olympics-Data-Analysis'
								className='hover:text-blue-400'
								target='_blank'
							>
								<GithubIcon className='h-6 w-6' />
							</a>
							<a
								href='#equipo'
								className='hover:text-blue-400'
							>
								<Users className='h-6 w-6' />
							</a>
							<a
								href='#cursos'
								className='hover:text-blue-400'
							>
								<PenTool className='h-6 w-6' />
							</a>
						</div>
					</div>
					<div className='mt-8 text-center'>
						<p>&copy; 2024 OlympiData. Todos los derechos reservados.</p>
					</div>
				</div>
			</footer>
		</div>
	)
}
