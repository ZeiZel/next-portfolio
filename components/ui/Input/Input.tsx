import React from 'react';
import cn from 'classnames';
import styles from './Input.module.scss';
import { IInputProps } from './Input.props';
import { Paragraph } from '@/components';

export const Input = ({ text, className, ...props }: IInputProps) => {
	return (
		<label className={styles.input}>
			<span className={styles.input__text}>
				<Paragraph>{text}</Paragraph>
			</span>
			<input className={cn(className, styles.input__item)} {...props} />
		</label>
	);
};
