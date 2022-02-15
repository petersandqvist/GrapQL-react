import { gql, useQuery } from '@apollo/client';

export const GET_CHARACTER_BY_NAME = gql`
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
