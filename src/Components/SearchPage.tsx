import React, { useState } from 'react';
import { Search } from './Search';

export const SearchPage = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  return (
    <div>
      <Search
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
    </div>
  );
};
