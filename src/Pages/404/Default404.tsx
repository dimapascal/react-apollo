import { DefaultLayout } from '../../Layouts/DefaultLayout';
import { Flex, Text } from '@chakra-ui/react';

export const Default404Page: React.FC = () => {
    return (
        <DefaultLayout>
            <Flex minH="60vh" direction="column" align="center" justify="center">
                <Text d="block" fontSize="8xl" color="tomato" align="center">
                    404
                </Text>
                <Text d="block" fontSize="3xl" align="center" textTransform="uppercase">
                    Page not found
                </Text>
            </Flex>
        </DefaultLayout>
    );
};
