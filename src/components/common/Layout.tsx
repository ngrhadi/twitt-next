import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';

import { AppLayoutProps } from './UnAuthLayout';

const AppLayout: React.FC<AppLayoutProps> = ({
	children,
	overridePageTitle,
	pageTitle,
}) => {
	const pageTitleFormatted = overridePageTitle ?? `TWITT-WIT | ${pageTitle}`;

	return (
		<>
			<Head>
				<title>{pageTitleFormatted}</title>
			</Head>
			<Box as="main" w="full" h="100vh" bg="white">
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
						bgGradient="linear-gradient(45deg, #66757f, #00ACEE, #36D8FF, #f5f8fa, #ffffff)"
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

export default AppLayout;
