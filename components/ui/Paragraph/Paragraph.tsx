import React from 'react';
import cn from 'classnames';
import styles from './Paragraph.module.scss';
import { IParagraphProps } from './Paragraph.props';

export const Paragraph = ({ size = 'm', className, children, ...props }: IParagraphProps) => {
	return (
		<p
			className={cn(className, styles.p, {
				[styles.s]: size === 's',
				[styles.m]: size === 'm',
				[styles.l]: size === 'l',
			})}
			{...props}
		>
			{children}
		</p>
	);
};
