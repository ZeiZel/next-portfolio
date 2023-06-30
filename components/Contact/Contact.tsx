import React from 'react';
import styles from './Contact.module.scss';
import { Divider, MainTitle, Paragraph, SocialList } from '@/components';
import { SocialLinks } from '@/helpers';
import { ContactForm } from '@/components/Contact/ContactForm/ContactForm';

export const Contact = () => {
	return (
		<section id={'contact'} className={styles.contact}>
			<div className='container'>
				<MainTitle className={styles.contact__title}>Обратная связь</MainTitle>
			</div>
			<div className='sub-container'>
				<div className={styles.contact__block}>
					<div className={styles.contact__description}>
						<Paragraph size={'l'} className={styles.contact__text}>
							Вы работаете над чем-то великим? <br /> Я с удовольствием помогу вам в
							этом! Напишите мне письмо и мы начнем проект прямо сейчас!
						</Paragraph>
						<div>
							<div className={styles.contact__text}>
								<Paragraph size={'l'}>Я в соцсетях:</Paragraph>
								<Divider arrow={true} />
							</div>
							<SocialList socialList={SocialLinks} />
						</div>
					</div>
					<div className={styles.contact__form}>
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
	);
};
