import { useState, memo } from 'react';

const Categories = memo(({ items, onClickItem }) => {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (i) => {
    setActiveItem(i);
    onClickItem(i);
  };

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items?.map((item, i) => (
          <li
            className={activeItem === i ? 'active' : ''}
            onClick={() => onSelectItem(i)}
            key={`${item}_${i}`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
