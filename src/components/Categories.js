import { memo } from 'react';

import propTypes from 'prop-types';

const Categories = memo(({ activeCategory, items, onClickCategory }) => {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}>
          Все
        </li>
        {items?.map((item, i) => (
          <li
            className={activeCategory === i ? 'active' : ''}
            onClick={() => onClickCategory(i)}
            key={`${item}_${i}`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  items: propTypes.array.isRequired,
  onClickCategory: propTypes.func,
};

Categories.defaultProps = { activeCategory: null, items: [] };

export default Categories;
