import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTIONS_TYPES } from './category.types';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

export const setCategories = (categories) =>
  createAction(CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES, categories);

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categories) =>
  createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = async (dispatch) => {
  dispatch(fetchCategoriesStart());

  try {
    const categoriesArray = await getCategoriesAndDocuments();
    fetchCategoriesSuccess(categoriesArray);
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
