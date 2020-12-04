import React from 'react';
import { useFormik } from 'formik';
import {
    Alert,
    AlertIcon,
    Box,
    Button,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input
} from '@chakra-ui/react';
import { DefaultLayout } from '../../Layouts/DefaultLayout';
import { useLoginMutation } from '../../graphql/generators';
import { useHistory } from 'react-router-dom';
import JWTAuthService from '../../Services/JWTAuthService';

const LoginPage: React.FC = () => {
    const history = useHistory();

    const onFinishRequest = function (data: any) {
        if (data?.login) {
            JWTAuthService.setAuth(data.login);
            history.push('/');
        }
    };

    const [login, { data, loading }] = useLoginMutation({ onCompleted: onFinishRequest });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (options) => login({ variables: { options } }),
        validate: (values) => {
            const { email, password } = values;
            const errors: { email?: string; password?: string } = {};

            if (!email) errors.email = 'Email is required';
            if (!password) errors.password = 'Password is required';

            return errors;
        }
    });

    return (
        <DefaultLayout>
            <Container>
                <form onSubmit={formik.handleSubmit}>
                    <Box height="50px">
                        {data && !data.login && (
                            <Alert status="error">
                                <AlertIcon />
                                User with that credentials do not exist
                            </Alert>
                        )}
                    </Box>

                    <FormControl isInvalid={!!formik.errors.email} id="email" mt="5">
                        <FormLabel>Email address</FormLabel>
                        <Input
                            required
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!formik.errors.password} id="password" mt="5">
                        <FormLabel>Password</FormLabel>
                        <Input
                            required
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                    </FormControl>
                    <Button isLoading={loading} type="submit" mt="5" w="100%" colorScheme="teal">
                        Submit
                    </Button>
                </form>
            </Container>
        </DefaultLayout>
    );
};

export default LoginPage;
