export interface ISkillItem {
	id: string;
	name: string;
	description: string;
	img: string;
}

export const skillsList: ISkillItem[] = [
	{
		id: '1',
		name: 'Веб-Разработка',
		description:
			'JavaScript, TypeScript, WebStorm, ООП, Паттерны, Модульность, WebSocket, Webpack.',
		img: '/web-dev.svg',
	},
	{
		id: '2',
		name: 'Разработка Frontend',
		description: 'HTML, CSS, SASS, TailwindCSS, Bootstrap, React, NextJS',
		img: '/frontend.svg',
	},
	{
		id: '3',
		name: 'Разработка Backend',
		description: 'NodeJS, NestJS, MongoDB, Redis, PostgreSQL, MS SQL',
		img: '/backend.svg',
	},
	{
		id: '4',
		name: 'UI/UX Дизайн',
		description: 'Photoshop, Illustrator, Figma, Прототипирование, Wireframing',
		img: '/ui-ux.svg',
	},
];
