import { gql, useQuery, useLazyQuery } from '@apollo/client';

interface IData {
  characters: {
    results: Array<ICharacters>;
  };
}

interface ICharacters {
  id: string;
  name: string;
  gender: string;
  image: string;
}

const GET_CHARACTER_BY_NAME = gql`
  query GetCharactersByName($name: String!) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        gender
        image
      }
    }
  }
`;

export const useCharacters = (name: string | undefined) => {
  const [getCharactersByName, { error, data, loading, refetch }] = useLazyQuery<
    IData
  >(GET_CHARACTER_BY_NAME, {
    variables: {
      name,
    },
  });
  if (!data) {
    return {
      error,
      results: undefined,
      loading,
      refetch,
      getCharactersByName,
    };
  }
  const { characters } = data;
  const { results } = characters;
  const result = {
    error,
    results,
    loading,
    refetch,
    getCharactersByName,
  };
  return result;
};
