import { NextLink, Operation } from '@apollo/client';
import JWTAuthService from '../JWTAuthService';

export const apolloAuthLink = (operation: Operation, forward: NextLink) => {
    const token = JWTAuthService.getToken();
    if (token)
        operation.setContext({
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    return forward(operation);
};
