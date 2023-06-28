import React, { FC, ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';
import styles from './HTag.module.scss';
import { IHTagProps } from './HTag.props';

export const HTag = forwardRef(
	({ tag, children, className, ...props }: IHTagProps, ref: ForwardedRef<HTMLHeadingElement>) => {
		return (
			<>
				{tag === 'h1' && (
					<h1 ref={ref} className={cn(styles.h1, className)}>
						{children}
					</h1>
				)}
				{tag === 'h2' && (
					<h2 ref={ref} className={cn(styles.h2, className)}>
						{children}
					</h2>
				)}
				{tag === 'h3' && (
					<h3 ref={ref} className={cn(styles.h3, className)}>
						{children}
					</h3>
				)}
				{tag === 'h4' && (
					<h4 ref={ref} className={cn(styles.h4, className)}>
						{children}
					</h4>
				)}
			</>
		);
	},
);
