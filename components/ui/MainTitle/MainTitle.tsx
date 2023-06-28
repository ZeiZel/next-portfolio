import React from 'react';
import cn from 'classnames';
import { Divider, HTag } from '@/components/ui';
import styles from './MainTitle.module.scss';
import { IMainTitleProps } from './MainTitle.props';

export const MainTitle = ({ children, className, ...props }: IMainTitleProps) => (
	<HTag tag={'h2'} className={cn(className, styles.title)}>
		{(children as String).toUpperCase()}
		<Divider className={styles.title__border} />
	</HTag>
);
