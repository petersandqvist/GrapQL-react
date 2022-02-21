import React, { useState, FC } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  image: string;
  id: string;
  name: string;
}

export const CharacterList: FC<IProps> = ({ image, id, name }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleClickOnImg = (id: string) => {
    const newSelectedItems = [...selectedItems];
    !newSelectedItems.includes(id)
      ? newSelectedItems.push(id)
      : newSelectedItems.splice(newSelectedItems.indexOf(id));
    setSelectedItems(newSelectedItems);
  };

  const isSelected = selectedItems.indexOf(id) !== -1;

  const className = isSelected ? 'transparent' : '';
  return (
    <li key={id}>
      <img
        className={className}
        onClick={() => handleClickOnImg(id)}
        src={image}
        alt='RickAndMorty'
      />
      <Link to={`/${id}`}>
        <h2>{name}</h2>
      </Link>
    </li>
  );
};
