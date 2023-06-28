import React from 'react';
import styles from './Skills.module.scss';
import { MainTitle } from '@/components';
import { skillsList } from '@/helpers';
import { SkillsList } from '@/components/shared/SkillsList/SkillsList';

export const Skills = () => {
	return (
		<section id={'skills'} className={styles.skills}>
			<div className='container'>
				<MainTitle>Навыки</MainTitle>
				<div className='sub-container'>
					<div className={styles.skills__block}>
						<SkillsList skills={skillsList} />
					</div>
				</div>
			</div>
		</section>
	);
};
