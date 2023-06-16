import {
	Button,
	Icon,
	Input,
	InputGroup,
	InputProps,
	InputRightElement,
} from '@chakra-ui/react';
import React from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';

interface PasswordTextFieldProps {
	inputProps?: InputProps | undefined;
	onChange: (v: string) => void;
	value?: string;
	isPassword?: boolean;
	handleShowPassword?: () => void;
}

const PasswordTextField = ({
	inputProps,
	onChange,
	value,
	isPassword,
	handleShowPassword,
}: PasswordTextFieldProps) => {
	return (
		<>
			<>
				<InputGroup w="100%">
					<Input
						{...inputProps}
						w="100%"
						type={isPassword ? 'password' : 'text'}
						onChange={(event) => {
							onChange(event.target.value);
						}}
						value={value ?? ''}
						color="gray.700"
						_hover={{ borderColor: 'green.700' }}
					/>
					<InputRightElement>
						<Button
							colorScheme="blue"
							type="button"
							disabled
							h="100%"
							size="sm"
							onClick={handleShowPassword}
						>
							{isPassword === true ? (
								<Icon as={IoEye} color="white" />
							) : (
								<Icon as={IoEyeOff} color="white" />
							)}
						</Button>
					</InputRightElement>
				</InputGroup>
			</>
		</>
	);
};

export default PasswordTextField;
