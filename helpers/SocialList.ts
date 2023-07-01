export interface ISocialList {
	id: string;
	name: string;
	link: string;
	img: string;
}

export const SocialLinks: ISocialList[] = [
	{ id: '1', name: 'Вконтакте', link: 'https://vk.com/yeppiewhat', img: '/vk.svg' },
	{
		id: '2',
		name: 'Youtube',
		link: 'https://www.youtube.com/channel/UC411tAkcTEzh6j9aspNZdjA',
		img: '/youtube.svg',
	},
];
