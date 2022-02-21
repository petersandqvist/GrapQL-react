import React from 'react';
import { useCharacter } from '../../GraphQL/Querys/useCharacter';
import { useParams } from 'react-router';
import { Episodes } from '../Episodes';

export const Character = () => {
  const { id } = useParams();
  const { error, character, loading } = useCharacter(id);
  if (loading) return <div>loading...</div>;

  if (error) return <div>something went wrong!</div>;
  return (
    <div className='character'>
      <img src={character?.image} width={500} height={500} />
      <div className='character-info'>
        <h2>
          <b>{character?.name}</b>
        </h2>
        <span>{character?.gender}</span>
        <div className='character-episode'>
          {character?.episode.map((element) => {
            const { name, episode, id } = element;
            return <Episodes name={name} episode={episode} key={id} />;
          })}
        </div>
      </div>
    </div>
  );
};
