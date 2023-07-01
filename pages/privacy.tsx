import React from 'react';
import { PolicyContent } from '@/components';
import { withLayout } from '@/layout/Layout';
import Head from 'next/head';

const Privacy = () => {
	return (
		<div>
			<Head>
				<title>Политикой конфиденциальности</title>
			</Head>
			<PolicyContent />
			<div className='background-animation'>
				<div id='ball-one'></div>
				<div id='ball-two'></div>
				<div id='ball-three'></div>
			</div>
		</div>
	);
};

export default withLayout(Privacy);
