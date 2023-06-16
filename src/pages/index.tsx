import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { signIn, signOut, useSession } from 'next-auth/react';

import AppLayout from '@/components/common/Layout';

// import { signIn, signOut, useSession } from 'next-auth/client';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

import { NextPageWithLayout } from '@/types/page';

export const getServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	const session = await getServerSession(context.req, context.res, authOptions);

	if (session) {
		return {
			redirect: {
				destination: '/dashboard',
				permanent: false,
			},
		};
	}

	return {
		props: {
			session,
		},
	};
};

const Home: NextPageWithLayout = () => {
	const session = useSession();

	return (
		<Box w="full" h="full" minH="full">
			<Flex
				flexDir="column"
				gap={5}
				w="full"
				h="full"
				justifyContent="center"
				alignItems="center"
				textAlign="center"
			>
				<Text
					fontSize={['xl', '2xl']}
					fontWeight="bold"
					letterSpacing={30}
					mr={-5}
				>
					WELCOME
				</Text>
				{session.status === 'unauthenticated' && (
					<>
						Not signed in <br />
						<Button
							as="a"
							href={`/api/auth/signin`}
							onClick={(e) => {
								e.preventDefault();
								signIn();
							}}
						>
							Sign in
						</Button>
					</>
				)}
				{session.status === 'authenticated' && (
					<>
						Signed in as {JSON.stringify(session)} <br />
						<button onClick={() => signOut()}>Sign out</button>
					</>
				)}
				<Button size={['sm', 'md']} colorScheme="blue">
					<Link href="/login" aria-label="login_link">
						LOGIN HERE
					</Link>
				</Button>
			</Flex>
		</Box>
	);
};

Home.getLayout = (page) => {
	return <AppLayout>{page}</AppLayout>;
};

export default Home;
