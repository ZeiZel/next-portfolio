export interface IPageLinks {
	to: string;
	description: string;
}

export const links: IPageLinks[] = [
	{ to: 'about', description: 'Обо мне' },
	{ to: 'skills', description: 'Навыки' },
	{ to: 'portfolio', description: 'Портфолио' },
	{ to: 'contact', description: 'Обратная связь' },
];
