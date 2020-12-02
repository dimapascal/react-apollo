import { Button, ButtonProps } from '@chakra-ui/react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

export const LinkComponent: React.FC<ButtonProps & RouterLinkProps> = (props) => (
    <Button {...props} as={RouterLink}>
        {props.children}
    </Button>
);
