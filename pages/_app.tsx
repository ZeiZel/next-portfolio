import '@/styles/globals.scss';
import '@/styles/_mixins.scss';
import '@/styles/_vars.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
