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
				<Image src={skill.img} alt={skill.name} width={40} height={40} />
				<HTag tag={'h4'}>{skill.name}</HTag>
				<Divider />
				<Paragraph>{skill.description}</Paragraph>
			</div>
		))}
	</div>
);
