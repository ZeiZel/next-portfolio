import React from 'react';
import Image from 'next/image';
import styles from './SocialList.module.scss';
import { ISocialListProps } from './SocialList.props';
import { ISocialList } from '@/helpers';
import { Paragraph } from '@/components';

export const SocialList = ({ socialList }: ISocialListProps) => (
	<ul className={styles.social}>
		{socialList.map((link: ISocialList) => (
			<li key={link.id} className={styles.social__item}>
				<a href={link.link} className={styles.social__link}>
					<Paragraph className={styles.social__name}>{link.name}</Paragraph>
					<Image
						className={styles.social__img}
						src={link.img}
						alt={link.name}
						width={40}
						height={40}
					/>
				</a>
			</li>
		))}
	</ul>
);
