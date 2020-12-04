import { DefaultLayout } from '../../Layouts/DefaultLayout';
import { useMeQuery } from '../../graphql/generators';
import { Box, Text } from '@chakra-ui/react';

const MePage: React.FC = () => {
    const { data } = useMeQuery();

    const renderMeFields = (object: any) => {
        return Object.keys(object).map(
            (key: any) =>
                key !== '__typename' && (
                    <Text key={key}>
                        {key} -
                        <Text as="span" fontWeight="bold">
                            {object[key]}
                        </Text>
                    </Text>
                )
        );
    };

    return (
        <DefaultLayout>
            <Box>{data?.me && renderMeFields(data.me)}</Box>
        </DefaultLayout>
    );
};

export default MePage;
