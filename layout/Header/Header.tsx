import React from 'react';
import cn from 'classnames';
import styles from './Header.module.scss';

export const Header = () => {
	return (
		<header>
			<div className={cn(styles.header__container, 'container')}></div>
		</header>
	);
};
