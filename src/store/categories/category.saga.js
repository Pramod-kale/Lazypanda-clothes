import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';


import { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailed } from './category.action';

import { CATEGORY_ACTION_TYPES } from "./category.types";



export function* fetchCategoriesAsync() {
    // cannot have async and await in generator function
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments, 'categories')
        // this will take function like strings and the next parameter will use the second one and pass it to the function,
        //  if you pass call(getCategoriesAndDocuments, 'categories') => under the hood it will work like this call(getCategoriesAndDocuments('categories'))

        // inside generator we don't call dispatch instead we use put
        // dispatch(fetchCategoriesSuccess(categoriesArray))
        yield put(fetchCategoriesSuccess(categoriesArray))


    } catch (error) {
        yield put(fetchCategoriesFailed(error))
    }
}

export function* onFetchCategories() {
    yield takeLatest(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}


export function* categoriesSaga() {

    yield all([call(onFetchCategories)])
}
