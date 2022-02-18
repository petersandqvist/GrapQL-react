import React, { FC } from 'react';

interface IProps {
  name: string;
  episode: string;
}

export const Episodes: FC<IProps> = ({ name, episode }) => {
  return (
    <div>
      return (
      <div>
        {name} - <b>{episode}</b>
      </div>
      );
    </div>
  );
};
