import gql from 'graphql-tag';

export const getAllPolls = gql`
    {
        AllPolls {
            _id
            question
            option1 {
                name
                votes
            }
        }
    }
`;
