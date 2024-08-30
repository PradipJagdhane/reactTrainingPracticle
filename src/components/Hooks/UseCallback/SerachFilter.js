import React, { useState, useCallback } from 'react';

function ItemList({ items, filterItems }) {
  console.log('ItemList rendered');
  
  const filteredItems = filterItems(items);

  return (
    <ul>
      {filteredItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function SearchFilter() {
  const [query, setQuery] = useState('');
  const [items] = useState(['Apple', 'Banana', 'Orange', 'Mango', 'Grapes']);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const filterItems = useCallback((items) => {
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder="Search items..."
      />
      <ItemList items={items} filterItems={filterItems} />
    </div>
  );
}

export default SearchFilter;
