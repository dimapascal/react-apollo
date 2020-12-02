import { Box, Text } from '@chakra-ui/react';
import { HelloQueryHookResult, useHelloQuery } from '../../graphql/generators';
import { RouteChildrenProps } from 'react-router-dom';
import { DefaultLayout } from '../../Layouts/DefaultLayout';

function HomePage(props: RouteChildrenProps) {
    const { data }: HelloQueryHookResult = useHelloQuery();

    return (
        <DefaultLayout>
            <Text>
                Current path:
                <Text as="span" fontWeight="bold">
                    {props.location.pathname}
                </Text>
            </Text>
            <Box as="pre">{JSON.stringify(data, null, 2)}</Box>
        </DefaultLayout>
    );
}

export default HomePage;
