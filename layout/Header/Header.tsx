import React, { useState } from 'react';
import cn from 'classnames';
import { Logo } from '@/components';
import { Link } from 'react-scroll';
import styles from './Header.module.scss';
import { useMediaQuery } from '@/hooks';
import { IS_MOBILE, links, ScrollSettings } from '@/helpers';
import { Paragraph } from '@/components/ui';

export const Header = () => {
	const { spy, smooth, offset, duration } = ScrollSettings;

	const isMobile = useMediaQuery(IS_MOBILE);

	const [menuOpen, setMenuOpen] = useState(false);

	const handleToggleMenu = () => {
		(document.querySelector('body') as HTMLBodyElement).classList.toggle('overflow-hidden');
		setMenuOpen(!menuOpen);
	};

	const handleCloseMenu = () => {
		(document.querySelector('body') as HTMLBodyElement).classList.remove('overflow-hidden');
		setMenuOpen(false);
	};

	return (
		<header className={styles.header}>
			<div className={cn(styles.header__container, 'container')}>
				<Logo />

				{isMobile && (
					<button
						onClick={handleToggleMenu}
						className={cn(styles.burger__menu, {
							[styles.open]: menuOpen,
						})}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				)}

				<nav
					className={cn({
						[styles.header__nav]: !isMobile,
						[styles.menu]: isMobile,
						[styles.open]: menuOpen,
					})}
				>
					<ul
						className={cn({
							[styles.header__list]: !isMobile,
							[styles.mobile__list]: isMobile,
						})}
					>
						{links.map((link) => (
							<li
								key={link.to}
								className={cn({
									[styles['menu__item']]: isMobile,
									[styles['header__list-item']]: !isMobile,
								})}
							>
								<Link
									href={'/'}
									to={link.to}
									spy={spy}
									smooth={smooth}
									offset={offset}
									duration={duration}
									className={styles.header__link}
								>
									<Paragraph className={styles['header__link-text']}>
										{link.description}
									</Paragraph>
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};
