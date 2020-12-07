import { Flex } from '@chakra-ui/react';
import { useMeQuery } from '../graphql/generators';
import { SiteMap } from '../Router/SiteMap';
import JWTAuthService from '../Services/JWTAuthService';
import { LinkComponent } from './LinkComponent';

export const HeaderComponent = () => {
    const { data, loading } = useMeQuery();

    const onLogout = () => {
        JWTAuthService.deleteAuth();
        window.location.reload();
    };

    const { home, login, logout, user, register } = SiteMap;

    return (
        <Flex px="5" py="3">
            <LinkComponent mr="8px" to={home.path} children={home.title} />
            {data?.me ? (
                <>
                    <LinkComponent
                        mr="8px"
                        to={logout.path}
                        onClick={onLogout}
                        children={logout.title}
                    />
                    <LinkComponent mr="8px" to={user.path} children={user.title} />
                </>
            ) : (
                !loading && (
                    <>
                        <LinkComponent mr="8px" to={login.path} children={login.title} />
                        <LinkComponent mr="8px" to={register.path} children={register.title} />
                    </>
                )
            )}
        </Flex>
    );
};
