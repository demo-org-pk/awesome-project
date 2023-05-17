import React, { useEffect } from 'react';

const ItemList = () => {
  useEffect(() => {
    addItemsToPage();
  }, []);

  const addItemsToPage = () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    const list = document.getElementById('item-list');

    for (let i = 0; i <= items.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = items[i];
      list.appendChild(listItem);
    }
  };

  return (
    <div>
      <h2>Item List</h2>
      <ul id="item-list"></ul>
    </div>
  );
};

export default ItemList;
