import React from 'react';
import { withLayout } from '@/layout/Layout';
import { PolicyContent } from '@/components';
import Head from 'next/head';

const Personal = () => {
	return (
		<div>
			<Head>
				<title>Согласие на обработку персональных данных</title>
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

export default withLayout(Personal);
