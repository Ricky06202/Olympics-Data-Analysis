export enum CurrentDashboardPage {
	Dashboard,
	Paises,
	Atletas,
	Medallas,
}

export interface Page {
	title: string
	url: string
}

export const DashboardPages = {
	Dashboard: {
		title: 'Dashboard',
		url: '/dashboard',
	},
	Paises: {
		title: 'Paises',
		url: '/paises',
	},
	Atletas: {
		title: 'Atletas',
		url: '/atletas',
	},
}
