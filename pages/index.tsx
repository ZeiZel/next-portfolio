import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Head from 'next/head';
import { withLayout } from '@/layout/Layout';
import { Contact, Person, About, Skills, Portfolio } from '@/components';

function Home() {
	return (
		<>
			<Head>
				<title>Портфолио</title>
			</Head>
			<main>
				<Person />
				<About />
				<Skills />
				<Portfolio />
				<Contact />
			</main>
			<div className='background-animation'>
				<div id='ball-one'></div>
				<div id='ball-two'></div>
				<div id='ball-three'></div>
			</div>
		</>
	);
}

export default withLayout(Home);
