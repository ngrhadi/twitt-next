import { Box, Flex, Image, Text, Tooltip } from '@chakra-ui/react';
import { NextPageContext } from 'next';
import { signOut, useSession } from 'next-auth/react';
import React from 'react';

import AuthedAppLayout from '@/components/common/AuthLayout';

import { apiTwitter } from '@/store/api';

function Dashboard(props: any) {
	const session = useSession();

	console.log(props);
	return (
		<AuthedAppLayout pageTitle="Dashboard">
			<Box>
				<Flex justifyContent="space-between">
					<Text fontSize="2xl" fontWeight="semibold">
						Dashboard Page
					</Text>
					<Box
						display="flex"
						flexDir="row"
						justifyContent="center"
						gap={3}
						alignItems="center"
					>
						<Text fontSize="sm" fontWeight="semibold">
							{session.data?.user?.name}
						</Text>
						<Tooltip label="Logout">
							<Image
								src={session.data?.user?.image ?? ''}
								w={10}
								h={10}
								alt="image-ava"
								borderRadius="full"
								onClick={() => signOut()}
							/>
						</Tooltip>
					</Box>
				</Flex>
			</Box>
		</AuthedAppLayout>
	);
}

Dashboard.getInitialProps = async (_context: NextPageContext) => {
	// const dataTwitt = await apiTwitter
	// 	.get('/users/1004641791016988672/followed_lists') // https://api.twitter.com/2/me & https://api.twitter.com/2/users/1004641791016988672/followed_lists
	// 	.then((result) => {
	// 		return result.data;
	// 	});

	return {
		dataTwitt: null, // authenticated problem..!!
	};
};

export default Dashboard;
