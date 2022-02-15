import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_CHARACTER_BY_NAME } from '../GraphQL/useCharacterNames';
import { Link } from 'react-router-dom';

export const Search = () => {
  const [name, setName] = useState('');

  //when useLazyQuery is called it returns a function that can trigger the query manually, for exampel on an event like a button click
  const [getCharactersByName, { error, data, loading, called }] = useLazyQuery(
    GET_CHARACTER_BY_NAME,
    {
      variables: {
        name,
      },
    }
  );

  // TODO create button that reset searchresult

  const onChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setName(e.target.value);
  };

  const handleKeyPress = (e: { keyCode: number }) => {
    if (e.keyCode === 13) {
      getCharactersByName();
    }
  };

  return (
    <div className='form-wrapper'>
      <div className='inputs'>
        <h1>Search for a name, like Rick, Morty etc 🚀</h1>
        <input
          autoFocus
          className='search-input'
          value={name}
          onChange={onChange}
          onKeyDown={handleKeyPress}
          placeholder=''
        ></input>
        <button onClick={() => getCharactersByName()}>Search</button>
      </div>
      {loading && <div>loading...</div>}
      {error && <div>Something went wrong</div>}
      <ul>
        {data &&
          data.characters.results.map(
            (character: {
              image: string | undefined;
              id: string | undefined;
              name: React.ReactNode;
            }) => {
              return (
                <li>
                  <Link to={`/${character.id}`} key={character.id}>
                    <img src={character.image} alt='RickAndMorty' />
                    <h2>{character.name}</h2>
                  </Link>
                </li>
              );
            }
          )}
      </ul>
    </div>
  );
};
