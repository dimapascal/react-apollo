import { Box, Container } from '@chakra-ui/react';
import { HeaderComponent } from '../Components/HeaderComponent';

export const DefaultLayout: React.FC = (props) => (
    <Box>
        <HeaderComponent />
        <Container maxW="xl">{props.children}</Container>
    </Box>
);
