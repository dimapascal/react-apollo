import { Box, Text } from '@chakra-ui/react';
import { HelloQueryHookResult, useHelloQuery } from '../../graphql/generators';
import { RouteChildrenProps } from 'react-router-dom';
import { DefaultLayout } from '../../Layouts/DefaultLayout';

function HomePage(props: RouteChildrenProps) {
    const resp: HelloQueryHookResult = useHelloQuery();
    console.log(resp);

    return (
        <DefaultLayout>
            <Text>
                Current path:
                <Text as="span" fontWeight="bold">
                    {props.location.pathname}
                </Text>
            </Text>
            <br />
            <Box as="pre">{JSON.stringify(resp.data, null, 2)}</Box>
        </DefaultLayout>
    );
}

export default HomePage;
