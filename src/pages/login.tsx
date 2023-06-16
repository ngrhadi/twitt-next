import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import UnauthedAppLayout from '@/components/common/UnAuthLayout';
import MainForm from '@/components/tsform/MainForm';

import { loginSchema } from '@/types/login';
import { NextPageWithLayout } from '@/types/page';

const login: NextPageWithLayout = () => {
	const handleLoginSubmit = () => {
		console.log('not yet implemented');
	};

	return (
		<Box w="full" h="full">
			<Flex
				flexDir="column"
				gap={5}
				w="full"
				h="full"
				justifyContent="center"
				alignItems="center"
				textAlign="center"
			>
				<Box bg="blue.300" p={20} rounded="md">
					<MainForm
						schema={loginSchema}
						onSubmit={handleLoginSubmit}
						props={{
							username: {
								label: 'Email',
								inputProps: { placeholder: 'Masukkan Email' },
							},
							password: {
								label: 'Password',
								inputProps: { placeholder: 'Masukkan Password' },
								isPassword: true,
							},
						}}
					/>
				</Box>
			</Flex>
		</Box>
	);
};

login.getLayout = (page) => {
	return <UnauthedAppLayout pageTitle="Login">{page}</UnauthedAppLayout>;
};

export { getServerSideProps } from '@/pages/index';

export default login;
