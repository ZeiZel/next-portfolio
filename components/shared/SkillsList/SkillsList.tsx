import React from 'react';
import Image from 'next/image';
import styles from './SkillsList.module.scss';
import { ISkillItemProps } from './SkillsList.props';
import { ISkillItem } from '@/helpers';
import { Divider, HTag, Paragraph } from '@/components';

export const SkillsList = ({ skills }: ISkillItemProps) => (
	<div className={styles.skills}>
		{skills.map((skill: ISkillItem) => (
			<div key={skill.id} className={styles.skills__item}>
				<div className={styles.skills__block}>
					<span className={styles.skills__title}>
						<Image
							className={styles.skills__img}
							src={skill.img}
							alt={skill.name}
							width={40}
							height={40}
						/>
						<HTag className={styles['skills__title-text']} tag={'h4'}>
							{skill.name}
						</HTag>
					</span>
					<Divider className={styles.skills__divider} />
				</div>
				<Paragraph className={styles.skills__description} size={'s'}>
					{skill.description}
				</Paragraph>
			</div>
		))}
	</div>
);
