import React from 'react';
import cn from 'classnames';
import Image from 'next/image';
import { MainTitle, HTag, Divider, Paragraph } from '@/components/ui';
import styles from './About.module.scss';
import { useMediaQuery } from '@/hooks';
import { IS_TABLET, SocialLinks } from '@/helpers';
import { SocialList } from '@/components';

export const About = () => {
	const isTablet = useMediaQuery(IS_TABLET);

	return (
		<section id={'about'} className={styles.about}>
			<div className='container'>
				<MainTitle className={styles.about__title}>Обо мне</MainTitle>
			</div>
			<div className={cn('sub-container', styles['about__sub-container'])}>
				<Image
					className={styles.about__img}
					src={'/about.jpg'}
					width={386}
					height={389}
					alt={'about'}
				/>
				<div></div>
				<div className={styles.about__section}>
					<HTag className={styles.about__name} tag={'h2'}>
						Валерий Львов
					</HTag>
					<Divider className={styles.about__divider} arrow={true} />
					<Paragraph className={styles.about__description}>
						Прямо сейчас располагаюсь в Кирове. В настоящее время я работаю над
						проектами заказчиков со всей России. Я ищу дополнительные возможности, чтобы
						повышать свои навыки в качестве веб-разработчика.
					</Paragraph>
					<SocialList socialList={SocialLinks} />
				</div>
			</div>
		</section>
	);
};
