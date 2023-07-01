import React from 'react';
import { withLayout } from '@/layout/Layout';
import { PolicyContent } from '@/components';
import Head from 'next/head';

const Cookie = () => {
	return (
		<div>
			<Head>
				<title>Политика использования файлов cookie</title>
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

export default withLayout(Cookie);
