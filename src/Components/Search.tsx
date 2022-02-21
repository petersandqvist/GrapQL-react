import React, { useState, FC } from 'react';
import { useCharacters } from '../GraphQL/Querys/useCharacters';
import { CharacterList } from './CharacterList';

interface IProps {
  selectedItems: string[];
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
}

export const Search: FC<IProps> = ({ selectedItems, setSelectedItems }) => {
  const [name, setName] = useState('');
  const { error, results, loading, getCharactersByName } = useCharacters(name);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleResetState = (event: { preventDefault: () => void }) => {
    setSelectedItems(selectedItems);
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
          <button className='reset-state-button' onClick={handleResetState}>
            Clear search
          </button>
        </div>
      </form>
      {loading && <div className='loading'>loading...</div>}
      {error && <div>Something went wrong</div>}
      <ul>
        {results?.length &&
          results?.map((element) => {
            const { name, id, image } = element;
            return <CharacterList name={name} id={id} image={image} key={id} />;
          })}
      </ul>
    </div>
  );
};
