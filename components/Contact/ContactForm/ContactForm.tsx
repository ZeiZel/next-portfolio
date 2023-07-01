import React, { FormEvent, MutableRefObject, useRef, useState } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import styles from '../Contact.module.scss';
import { Input, Paragraph } from '@/components';
import { inputFormData } from '@/helpers';
import { toast } from 'react-toastify';
import { PropagateLoader } from 'react-spinners';

export const ContactForm = () => {
	const [confirmRules, setConfirmRules] = useState<boolean>(false);
	const [spinner, setSpinner] = useState<boolean>(false);

	const formRef = useRef() as MutableRefObject<HTMLFormElement>;

	const toggleConfirmRules = () => setConfirmRules(!confirmRules);

	const sendData = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		setSpinner(true);

		emailjs
			.sendForm('service_trmbi5p', 'template_o54nolj', formRef.current, 'BU2Vbll9wQv40zNFs')
			.then((result) => {
				setSpinner(false);
				toast(`Данные отправлены`);
			})
			.catch((error) => {
				setSpinner(false);
				toast.error(`Произошла ошибка`);
			});

		// очистит все поля формы
		formRef.current.reset();
		setConfirmRules(false);
	};

	return (
		<form ref={formRef} className={styles.form} onSubmit={sendData}>
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
			<button disabled={!confirmRules} className={styles.form__button}>
				{spinner ? (
					<PropagateLoader color={'#fff'} />
				) : (
					<Paragraph className={styles['form__button-text']}>Отправить заявку</Paragraph>
				)}
			</button>
			<div>
				<label className={styles.form__label}>
					<input
						className={styles.form__checkbox}
						type='checkbox'
						onChange={toggleConfirmRules}
					/>
					<span className={styles.form__span} />
					<span className={styles.form__description}>
						Нажимая на кнопку «Отправить заявку», я соглашаюсь с{' '}
						<Link href={'/privacy'}>Политикой конфиденциальности</Link> и даю{' '}
						<Link href={'/personal'}>Согласие на обработку персональных данных</Link>.
					</span>
				</label>
			</div>
		</form>
	);
};
