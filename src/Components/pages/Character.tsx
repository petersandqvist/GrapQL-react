import React from 'react';
import { useCharacter } from '../../GraphQL/Querys/useCharacter';
import { useParams } from 'react-router';

export const Character = () => {
  const { id } = useParams();
  const { error, data, loading } = useCharacter(id);
  if (loading) return <div>loading...</div>;

  if (error) return <div>something went wrong!</div>;
  return (
    <div className='character'>
      <img src={data.character.image} width={500} height={500} />
      <div className='character-info'>
        <h2>
          <b>{data.character.name}</b>
        </h2>
        <span>{data.character.gender}</span>
        <div className='character-episode'>
          {data.character.episode.map(
            (episode: { name: string; episode: string }) => {
              return (
                <div>
                  {episode.name} - <b>{episode.episode}</b>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};
