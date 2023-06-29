import React from 'react';
import styles from '../Portfolio.module.scss';
import { ITabControlProps } from './TabControl.props';
import { Divider, HTag } from '@/components';
import cn from 'classnames';

export const TabControl = ({ isActive, title, handleShowTab }: ITabControlProps) => {
	return (
		<li className={styles.tab} onClick={handleShowTab}>
			<button className={styles.tab__item}>
				<HTag
					className={cn(styles.tab__title, {
						[styles.active]: isActive,
					})}
					tag={'h4'}
				>
					{title}
				</HTag>
				<Divider className={styles.tab__divider} muted={!isActive} arrow={isActive} />
			</button>
		</li>
	);
};
