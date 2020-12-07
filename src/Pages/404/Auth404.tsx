import { DefaultLayout } from '../../Layouts/DefaultLayout';
import { Flex, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { SiteMap } from '../../Router/SiteMap';

const { login } = SiteMap;

export const Auth404Page: React.FC = () => {
    return (
        <DefaultLayout>
            <Flex minH="60vh" direction="column" align="center" justify="center">
                <Text d="block" fontSize="8xl" color="tomato" align="center">
                    403
                </Text>
                <Text
                    d="block"
                    fontSize="3xl"
                    fontWeight="bold"
                    align="center"
                    textTransform="uppercase"
                    mb="8">
                    Not enough access rights
                </Text>
                <Text d="block" fontSize="2xl" align="center">
                    Please try to{' '}
                    <RouterLink to={login.path}>
                        <Link as="span" color="teal.500">
                            Sign-in
                        </Link>
                    </RouterLink>
                </Text>
            </Flex>
        </DefaultLayout>
    );
};
