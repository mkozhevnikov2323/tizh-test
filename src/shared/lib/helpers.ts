import { foodList } from './constants';

export const renderFavoriteFood = (favorite_food_ids: any) =>
  Object.entries(foodList)
    ?.filter(([key, value]) => favorite_food_ids?.includes(key))
    ?.map(([key, value], index, array) => {
      if (index === array.length - 1) {
        return value;
      }
      return `${value}, `;
    });
