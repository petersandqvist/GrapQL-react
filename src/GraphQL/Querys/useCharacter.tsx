import { gql, useQuery } from '@apollo/client';

//in order for the Query to work we specify it with a bang ! that makes ID necesary.
const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      gender
      image
      episode {
        name
        episode
      }
    }
  }
`;

export const useCharacter = (id: any) => {
  const { error, data, loading } = useQuery(GET_CHARACTER, {
    variables: {
      id,
    },
  });

  return {
    data,
    error,
    loading,
  };
};
