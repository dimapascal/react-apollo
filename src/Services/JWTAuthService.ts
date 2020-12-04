import { gql } from '@apollo/client';
import { client } from './apolloClient';
export type JWTAuth = {
    token: string;
    refreshToken: string;
    expiresIn?: number;
};

const REFRESH_TOKENS_MUTATION = gql`
    mutation RefreshTokens($token: String!) {
        refreshToken(token: $token) {
            token
            refreshToken
            expiresIn
        }
    }
`;

class JWTAuthServiceClass {
    private PERSIST_STORAGE_KEY = 'auth';

    public setAuth(data: JWTAuth) {
        this.setAuthPersistent(data);
    }

    public getToken() {
        const auth = this.getAuthPersistent();
        if (auth) {
            return auth.token;
        }
        return null;
    }

    public async refreshTokens(): Promise<JWTAuth | null> {
        const auth = this.getAuthPersistent();
        if (auth) {
            const { data } = await client.mutate({
                mutation: REFRESH_TOKENS_MUTATION,
                variables: { token: auth.refreshToken }
            });

            if (data?.refreshToken) {
                const auth: JWTAuth = data.refreshToken;
                this.setAuth(auth);
                return auth;
            }
            this.clearPersistentAuth();
            return null;
        }
        return null;
    }

    private clearPersistentAuth() {
        window.localStorage.removeItem(this.PERSIST_STORAGE_KEY);
    }

    private setAuthPersistent(auth: JWTAuth) {
        try {
            window.localStorage.setItem(this.PERSIST_STORAGE_KEY, JSON.stringify(auth));
        } catch (error) {
            console.error(error);
        }
    }
    private getAuthPersistent(): JWTAuth | null {
        try {
            const authJSON = window.localStorage.getItem(this.PERSIST_STORAGE_KEY);
            if (authJSON) return JSON.parse(authJSON) as JWTAuth;
            return null;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

const JWTAuthService = new JWTAuthServiceClass();
export default JWTAuthService;
