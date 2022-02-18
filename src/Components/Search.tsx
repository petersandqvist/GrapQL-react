import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_CHARACTER_BY_NAME } from '../GraphQL/Querys/useCharacterNames';
import { Link } from 'react-router-dom';

export const Search = () => {
  const [name, setName] = useState('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const [getCharactersByName, { error, data, loading, refetch }] = useLazyQuery(
    GET_CHARACTER_BY_NAME,
    {
      variables: {
        name,
      },
    }
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    //not sure if refetch is correct here
    refetch();
  };

  const handleClickOnCards = (id: string) => {
    const newSelectedItems = [...selectedItems];
    !newSelectedItems.includes(id)
      ? newSelectedItems.push(id)
      : newSelectedItems.splice(newSelectedItems.indexOf(id));
    setSelectedItems(newSelectedItems);
  };

  return (
    <div className='form-wrapper'>
      <form onChange={() => getCharactersByName({ variables: { name: name } })}>
        <div className='inputs'>
          <h1>Search for a name, like Rick, Morty etc 🚀</h1>
          <input
            autoFocus
            className='search-input'
            value={name}
            onChange={onChange}
            placeholder=''
          ></input>
        </div>
      </form>
      {loading && <div className='loading'>loading...</div>}
      {error && <div>Something went wrong</div>}
      <ul>
        {data &&
          data?.characters?.results.map(
            (character: { image: string; id: string; name: string }) => {
              const isNotInTheList =
                selectedItems.indexOf(character.id) === -1 ? '' : 'transparent';
              return (
                <li key={character.id}>
                  <img
                    className={isNotInTheList}
                    onClick={() => handleClickOnCards(character.id)}
                    src={character.image}
                    alt='RickAndMorty'
                  />
                  <Link to={`/${character.id}`}>
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
