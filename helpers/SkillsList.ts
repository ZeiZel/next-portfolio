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
		description: 'Javascript, WebStorm.',
		img: '/web-dev.svg',
	},
	{
		id: '2',
		name: 'Разработка Frontend',
		description: 'HTML, CSS, SASS, Bootstrap, AngularJS, Vue, React, NextJS',
		img: '/frontend.svg',
	},
	{
		id: '3',
		name: 'Разработка Backend',
		description: 'Node.js, NestJS, MongoDB, Redis, PostgreSQL, MS SQL',
		img: '/backend.svg',
	},
	{
		id: '4',
		name: 'UI/UX Дизайн',
		description: 'Photoshop, Illustrator, Figma, Прототипирование, Wireframing',
		img: '/ui-ux.svg',
	},
];
