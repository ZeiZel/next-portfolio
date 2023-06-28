import React from 'react';
import { IDividerProps } from './Divider.props';
import cn from 'classnames';
import styles from './Divider.module.scss';
import { Arrow } from '@/components/ui';

export const Divider = ({ arrow = false, className, ...props }: IDividerProps) => (
	<div className={cn(className, styles.divider)}>
		{arrow && (
			<span className={styles.divider__img}>
				<Arrow arrow={'right'} />
			</span>
		)}
		<hr className={cn(styles.divider__line)} {...props} />
	</div>
);
