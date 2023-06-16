import { Input, InputProps } from '@chakra-ui/react';
import React from 'react';

interface NormalTextFieldProps {
	inputProps?: InputProps | undefined;
	isDisabled?: boolean;
	onChange: (v: string) => void;
	value?: string;
	isRequired?: boolean;
}

const NormalTextField = ({
	inputProps,
	isDisabled,
	onChange,
	value,
	isRequired,
}: NormalTextFieldProps) => {
	return (
		<>
			<Input
				{...inputProps}
				w="100%"
				disabled={isDisabled !== undefined && 'true'}
				onChange={(event) => {
					onChange(event.target.value);
				}}
				value={value ?? ''}
				required={isRequired}
				color="gray.700"
				_hover={{ borderColor: 'green.700' }}
			/>
		</>
	);
};

export default NormalTextField;
