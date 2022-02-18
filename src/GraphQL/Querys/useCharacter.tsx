import { gql, useQuery } from '@apollo/client';

interface IData {
  character: ICharacter;
}

interface ICharacter {
  id: string;
  name: string;
  gender: string;
  image: string;
  episode: Array<IEpisode>;
}

interface IEpisode {
  episode: string;
  name: string;
  id: string;
}

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
        id
      }
    }
  }
`;

export const useCharacter = (id: string | undefined) => {
  const { error, data, loading } = useQuery<IData>(GET_CHARACTER, {
    variables: {
      id,
    },
  });

  const result = { error: error, character: data?.character, loading: loading };
  return result;
};
