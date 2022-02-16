import { useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/action/filters';

import { Categories, SortPopup, PizzaBlock } from '../components';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];

const Home = () => {
  const dispatch = useDispatch();

  const items = useSelector(({ pizzas }) => pizzas.items);

  const onSelectCategory = useCallback((i) => {
    dispatch(setCategory(i));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categoryNames} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items?.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
};

export default Home;
