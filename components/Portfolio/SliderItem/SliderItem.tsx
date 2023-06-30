import React from 'react';
import Image from 'next/image';
import styles from '../Portfolio.module.scss';
import { ISliderItemProps } from './SliderItem.props';
import { Paragraph } from '@/components';

export const SliderItem = ({ title, link, img }: ISliderItemProps) => {
	return (
		<div className={styles['slider__item']}>
			<a href={link} className={styles['slider__link']}>
				<span className={styles['slider__blur']}>
					<Paragraph className={styles['slider__title']}>{title}</Paragraph>
				</span>
				<Image
					className={styles['slider__img']}
					src={img}
					width={386}
					height={294}
					alt={title}
				/>
			</a>
		</div>
	);
};
