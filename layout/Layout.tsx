import React, { FunctionComponent } from 'react';
import { Header } from '@/layout/Header/Header';
import { Footer } from '@/layout/Footer/Footer';
import { ILayoutProps } from '@/layout/Layout.props';

export const Layout = ({ children }: ILayoutProps) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};
