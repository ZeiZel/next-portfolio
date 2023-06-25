import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { ILogoProps } from '@/components/Logo/Logo.props';
import styles from './Logo.module.scss';

export const Logo = ({ className, ...props }: ILogoProps) => (
	<Link href={'/'} className={className} {...props}>
		<img className={styles.logo} src={'logo.svg'} alt={'logo'} />
	</Link>
);
