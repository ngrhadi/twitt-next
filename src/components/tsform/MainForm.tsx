import { Box, Button, Flex, Icon } from '@chakra-ui/react';
import { createTsForm } from '@ts-react/form';
import { signIn } from 'next-auth/react';
import { ReactNode } from 'react';
import { IoLogoTwitter } from 'react-icons/io5';
import { z } from 'zod';

import TextField from '@/components/tsform/TextField';

const mapping = [[z.string(), TextField] as const] as const;

const FormContainer = ({
	onSubmit,
	children,
}: {
	onSubmit: () => void;
	children: ReactNode;
}) => {
	return (
		<Flex flexDir="column" as="form" onSubmit={onSubmit}>
			<Box width="full">
				{children}
				<Flex w="full" gap={3} flexDir="column">
					<Button w="full" mt="8" type="submit" colorScheme="blue" size="sm">
						Submit
					</Button>
					<Button
						as="a"
						type="button"
						colorScheme="blue"
						href={`/api/auth/signin`}
						rightIcon={<Icon as={IoLogoTwitter} color="white" />}
						size="sm"
						onClick={(e) => {
							e.preventDefault();
							signIn();
						}}
					>
						Sign in With
					</Button>
				</Flex>
			</Box>
		</Flex>
	);
};

const MainForm = createTsForm(mapping, {
	FormComponent: FormContainer,
});

export default MainForm;
