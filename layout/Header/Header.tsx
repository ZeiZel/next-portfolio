import React from 'react';
import cn from 'classnames';
import { Logo } from '@/components';
import { Link } from 'react-scroll';
import styles from './Header.module.scss';

export const Header = () => {
	const links = [
		{ to: 'about', description: 'Обо мне' },
		{ to: 'skills', description: 'Навыки' },
		{ to: 'portfolio', description: 'Портфолио' },
		{ to: 'contact', description: 'Связаться со мной' },
	];

	const spy = true; // будет сохраняться место, до которого прокрутили страницу
	const smooth = true; // плавный скролл
	const offset = 140; // дальность прокрутки
	const duration = 500; // длительность прокрутки

	return (
		<header className={styles.header}>
			<div className={cn(styles.header__container, 'container')}>
				<Logo />
				<nav className={styles.header__nav}>
					<ul className={styles.header__list}>
						{links.map((link) => (
							<li key={link.to} className={styles['header__list-item']}>
								<Link
									href={'/'}
									to={link.to}
									spy={spy}
									smooth={smooth}
									offset={offset}
									duration={duration}
									className={styles.header__link}
								>
									{link.description}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};
