import { FormControl, FormLabel, InputProps } from '@chakra-ui/react';
import { useTsController } from '@ts-react/form';
import React, { useState } from 'react';

import NormalTextField from './item/NormalTextField';
import PasswordTextField from './item/PasswordFieldText';
import { BaseFieldProps } from './types/base_field_props';

interface TextFieldProps extends BaseFieldProps {
	inputProps?: InputProps;
}

const TextField = (props: TextFieldProps) => {
	const { label, inputProps, isPassword } = props;
	const [isValuePassword, setIsValuePassword] = useState(true);
	const handleShowPassword = () => setIsValuePassword(!isValuePassword);

	const {
		field: { onChange, value },
		error,
	} = useTsController<string>();

	return (
		<div>
			<FormControl
				isInvalid={!!error}
				display="flex"
				flexDir="column"
				w="100%"
				py={1}
			>
				<FormLabel>{label}</FormLabel>
				{isPassword === undefined ? (
					<NormalTextField
						inputProps={inputProps}
						onChange={onChange}
						value={value}
					/>
				) : (
					<PasswordTextField
						inputProps={inputProps}
						onChange={onChange}
						value={value}
						handleShowPassword={handleShowPassword}
						isPassword={isValuePassword}
					/>
				)}
			</FormControl>
		</div>
	);
};

export default TextField;
