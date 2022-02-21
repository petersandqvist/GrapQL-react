import React, { useState } from 'react';
import { useCharacters } from '../GraphQL/Querys/useCharacters';
import { CharacterList } from './CharacterList';

export const Search = () => {
  const [name, setName] = useState('');
  const {
    error,
    results,
    loading,
    refetch,
    getCharactersByName,
  } = useCharacters(name);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    //not sure if refetch is correct here
    refetch();
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
        {results?.map((element) => {
          const { name, id, image } = element;
          return <CharacterList name={name} id={id} image={image} key={id} />;
        })}
      </ul>
    </div>
  );
};
