import { Flex } from '@chakra-ui/react';
import { LinkComponent } from './LinkComponent';

export const HeaderComponent = () => {
    return (
        <Flex px="5" py="3">
            <LinkComponent mr="8px" to="/" children="Home" />
            <LinkComponent to="/about" children="About" />
        </Flex>
    );
};
