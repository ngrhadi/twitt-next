import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';

export interface AppLayoutProps {
	children: React.ReactNode;
	pageTitle?: string;
	overridePageTitle?: boolean;
}

const AuthedAppLayout: React.FC<AppLayoutProps> = ({
	children,
	pageTitle = 'Instrument Monitoring',
	overridePageTitle,
}) => {
	const pageTitleFormatted = overridePageTitle
		? pageTitle
		: `TWITT-WIT | ${pageTitle}`;

	return (
		<>
			<Head>
				<title>{pageTitleFormatted}</title>
			</Head>
			<Box as="main" w="full" minH="100vh">
				<Box
					position="relative"
					h="100vh"
					display="flex"
					flexDir="row"
					maxW="full"
					m="auto"
				>
					<Box
						w="full"
						h="100vh"
						display="flex"
						flexDirection="column"
						p={12}
						bgGradient="linear-gradient(45deg, #66757f, #00ACEE, #36D8FF, #f5f8fa)"
						position="relative"
						overflowY="hidden"
					>
						{children}
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default AuthedAppLayout;
