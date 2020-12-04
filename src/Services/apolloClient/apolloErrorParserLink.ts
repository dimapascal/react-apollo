import { fromPromise, NextLink, Operation } from '@apollo/client';
import { ErrorResponse } from '@apollo/client/link/error';
import { unauthorizedError, UnauthorizedErrorCode } from './ErrorsMethods/unauthorizedError';

const execAsyncMethod = (method: Function, operation: Operation, forward: NextLink) =>
    fromPromise(method(operation, forward)).flatMap(() => forward(operation));

const parseErrorByExtensionCode = (code: string, errorHandler: ErrorResponse) => {
    const { operation, forward } = errorHandler;
    switch (code) {
        case UnauthorizedErrorCode:
            return execAsyncMethod(unauthorizedError, operation, forward);
    }
};

export const apolloErrorParserLink = (errorHandler: ErrorResponse) => {
    if (errorHandler.graphQLErrors)
        for (const error of errorHandler?.graphQLErrors) {
            if (error.extensions)
                return parseErrorByExtensionCode(error.extensions.code, errorHandler);
        }
};
