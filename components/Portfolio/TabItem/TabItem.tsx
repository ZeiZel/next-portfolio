import React from 'react';
import Image from 'next/image';
import styles from '../Portfolio.module.scss';
import { ITabItemProps } from './TabItem.props';
import { Paragraph } from '@/components';

export const TabItem = ({ title, img, link }: ITabItemProps) => {
	return (
		<div className={styles.item}>
			<a href={link} className={styles.item__link}>
				<div className={styles.item__img}>
					<Image src={img} alt={title} width={555} height={422} />
				</div>
				<Paragraph className={styles.item__title}>{title}</Paragraph>
			</a>
		</div>
	);
};
