import { Flex } from '@chakra-ui/react';
import { useMeQuery } from '../graphql/generators';
import { LinkComponent } from './LinkComponent';

export const HeaderComponent = () => {
    const { data, loading } = useMeQuery();

    return (
        <Flex px="5" py="3">
            <LinkComponent mr="8px" to="/" children="Home" />
            {!loading &&
                (data?.me ? (
                    <LinkComponent mr="8px" to="/user" children="Me" />
                ) : (
                    <LinkComponent mr="8px" to="/login" children="Login" />
                ))}
        </Flex>
    );
};
