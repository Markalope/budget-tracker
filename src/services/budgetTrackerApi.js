import { put, post, get, del } from './request';

const URL = 'https://budget-tracker-61ea8.firebaseio.com';
const CATEGORY_URL = `${URL}/categories`;

const getCategoryUrl = key => `${CATEGORY_URL}/${key}.json`;

const makeArray = obj => {
  return obj
    ? Object.keys(obj).map((key => {
      const each = obj[key];
      each.id = key;
      return each;
    }))
    : [];
};

export const getCategories = () => {
  return get(`${CATEGORY_URL}.json`)
    .then(response => {
      const categories = makeArray(response);
      categories.forEach(category => category.expenses = makeArray(category.expenses));
      return categories;
    });
};

export const addCategory = (category) => {
  const url = `${CATEGORY_URL}.json`;
  return post(url, category)
    .then(res => {
      category.key = res.name;
      return category;
    });
};

export const updateCategory = category => {
  const url = getCategoryUrl(category.id);
  return put(url, category);
};
export const removeCategory = id => {
  const url = getCategoryUrl(id);
  return del(url);
};
        