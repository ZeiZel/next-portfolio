import React from 'react';
import cn from 'classnames';
import { format } from 'date-fns';
import styles from './Footer.module.scss';
import { Divider, Logo, Paragraph, SocialList } from '@/components';
import { privacyLinks, SocialLinks } from '@/helpers';
import Link from 'next/link';

export const Footer = () => {
	return (
		<footer className={cn(styles.footer, 'container')}>
			<div className={styles.footer__container}>
				<Divider className={styles.footer__divider} />
				<div className={styles.footer__block}>
					<div className={styles.footer__left}>
						<Logo className={styles.footer__logo} />
						<Paragraph size={'s'}>
							Web-Dev © 2023 - {format(new Date(), 'yyyy')} <br /> Все права защищены
						</Paragraph>
					</div>
					<div className={styles.footer__right}>
						<div className={styles['footer__right-top']}>
							<Paragraph>Поделись сайтом с друзьями: </Paragraph>
							<div className={styles.footer__socials}>
								<SocialList
									className={styles['footer__socials-list']}
									socialList={SocialLinks}
								/>
							</div>
						</div>
						<div className={styles['footer__right-bottom']}>
							{privacyLinks.map((link) => (
								<Paragraph key={link.id} size={'s'}>
									<Link href={link.link}>{link.text}</Link>
								</Paragraph>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
