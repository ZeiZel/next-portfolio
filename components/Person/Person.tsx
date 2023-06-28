import React, { MutableRefObject, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { gsap } from 'gsap';
import { useMediaQuery } from '@/hooks';
import { IS_MOBILE, IS_SMALL, ScrollSettings } from '@/helpers';
import styles from './Person.module.scss';
import cn from 'classnames';
import { HTag, Paragraph } from '@/components/ui';

export const Person = () => {
	const isTablet = useMediaQuery(IS_MOBILE);
	const isMobile = useMediaQuery(IS_SMALL);
	const personTitle = useRef() as MutableRefObject<HTMLHeadingElement>;

	useEffect(() => {
		const colors = gsap.to(personTitle.current, {
			paused: true,
			duration: 20,
			repeat: -1,
			'--hue': 360,
		});

		const doRandom = () => {
			gsap.timeline()
				.to(personTitle.current, {
					duration: 0.1,
					opacity: function () {
						return gsap.utils.random(0.9, 0.95);
					},
					delay: function () {
						return gsap.utils.random(0.1, 2);
					},
				})
				.to(personTitle.current, {
					duration: 0.1,
					opacity: 1,
					onComplete: function () {
						doRandom();
					},
				});
		};

		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

		if (!mediaQuery || !mediaQuery.matches) {
			colors.play();
			doRandom();
		}
	}, []);

	return (
		<section
			className={cn(styles.person, {
				[styles.bg]: !isTablet,
				[styles.bg__mobile]: isTablet,
				[styles.bg__none]: isMobile,
			})}
		>
			<div className='sub-container'>
				<div className={styles.person__container}>
					<HTag tag={'h1'} className={styles.person__title} ref={personTitle}>
						Веб разработка
					</HTag>
					<Paragraph size={'l'} className={styles.person__description}>
						Вы работаете над чем-то великим? <br /> Я с удовольствием помогу вам в этом!
						Напишите мне письмо и мы начнем проект прямо сейчас!
					</Paragraph>
					<Link className={styles.person__link} to={'contact'} {...ScrollSettings}>
						<Paragraph className={styles['person__link-text']} size={'m'}>
							Связаться с разработчиком
						</Paragraph>
					</Link>
					{!isTablet && (
						<Link className={styles.person__arrow} to={'about'} {...ScrollSettings} />
					)}
				</div>
			</div>
		</section>
	);
};
