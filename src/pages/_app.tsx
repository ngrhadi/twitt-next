import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react';
import {
	DehydratedState,
	Hydrate,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
import { createStore, Provider as JotaiProvider } from 'jotai';
import { DevTools } from 'jotai-devtools';
import { NextPageContext } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { useState } from 'react';

import AuthWrapper from '@/components/common/AuthWrapper';

import { NextPageWithLayout } from '@/types/page';

interface PageProps {
	dehydratedState?: DehydratedState;
	session?: Session;
}

type AppPropsWithLayout<P = object> = {
	err?: NextPageContext['err'];
	Component: NextPageWithLayout;
} & AppProps<P>;

const AppHead = () => {
	return (
		<Head>
			<meta name="google" content="notranslate" />
			<link rel="shortcut icon" href="/favicon/favicon.ico" />
			<link rel="icon" href="/favicon/favicon.ico" />
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/favicon/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon/favicon-16x16.png"
			/>
		</Head>
	);
};

export const store = createStore();

const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

const fonts = {
	heading: `'Inter', sans-serif`,
	body: `'Inter', sans-serif`,
};

export const theme = extendTheme({
	config,
	fonts,
	components: {
		Text: {
			variants: {
				normal: {
					fontSize: '13px',
				},
			},
		},
		Button: {
			variants: {
				white: {
					bg: 'white',
					border: '1px',
					borderColor: 'gray.400',
				},
			},
		},
	},
});

function MyApp({
	Component,
	pageProps: { session, ...pageProps },
}: AppPropsWithLayout<PageProps>) {
	const getLayout = Component.getLayout || ((page) => page);

	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						refetchOnWindowFocus: false,
						refetchOnReconnect: false,
					},
				},
			})
	);

	return (
		<>
			<AppHead />
			<ChakraProvider theme={theme}>
				<SessionProvider session={session}>
					<QueryClientProvider client={queryClient}>
						<Hydrate state={pageProps.dehydratedState}>
							<JotaiProvider store={store}>
								<AuthWrapper>
									{getLayout(<Component {...pageProps} />)}
								</AuthWrapper>
								<DevTools store={store} />
							</JotaiProvider>
						</Hydrate>
					</QueryClientProvider>
				</SessionProvider>
			</ChakraProvider>
		</>
	);
}

// MyApp.getInitialProps = async (context: AppContext) => {
// 	if (context?.ctx?.res) {
// 		context.ctx.res?.setHeader(
// 			'Cache-Control',
// 			'public, s-maxage=10, stale-while-revalidate=59'
// 		);
// 	}

// 	const appProps = await App.getInitialProps(context);
// 	// get session on server side

// 	if (typeof window === 'undefined') {
// 		const session = await getSession(context.ctx);
// 		return {
// 			...appProps,
// 			pageProps: {
// 				session,
// 				...appProps.pageProps,
// 			},
// 		};
// 	}

// 	return {
// 		...appProps,
// 	};
// };

export default MyApp;
