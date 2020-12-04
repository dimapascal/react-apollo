import { NextLink, Operation } from '@apollo/client';
import JWTAuthService from '../../JWTAuthService';

export const UnauthorizedErrorCode = 'UNAUTHENTICATED';

export async function unauthorizedError(operation: Operation, forward: NextLink) {
    const response = await JWTAuthService.refreshTokens();
    const oldHeaders = operation.getContext().headers;
    if (response) {
        operation.setContext(() => {
            return {
                headers: {
                    ...oldHeaders,
                    Authorization: `Bearer ${response.token}`
                },
                start: new Date()
            };
        });
        return forward(operation);
    }
}
