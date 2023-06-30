import React from 'react';
import styles from '../Contact.module.scss';
import { Input, Paragraph } from '@/components';
import { inputFormData } from '@/helpers';

export const ContactForm = () => {
	return (
		<form className={styles.form}>
			{inputFormData.map((item) => (
				<Input
					key={item.id}
					text={item.text}
					type={item.type}
					name={item.name}
					placeholder={item.placeholder}
					className={styles.form__input}
				/>
			))}
			<button className={styles.form__button}>
				<Paragraph>Отправить заявку</Paragraph>
			</button>
			<div>
				<label className={styles.form__checkbox}>
					<input className={styles.form__checkbox} type='checkbox' />
					<span className={styles.form__description}>
						Нажимая на кнопку «Отправить заявку», я соглашаюсь с{' '}
						<span>Политикой конфиденциальности</span> и даю{' '}
						<span>Согласие на обработку персональных данных</span>.
					</span>
				</label>
			</div>
		</form>
	);
};
