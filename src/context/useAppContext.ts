import {
	createContext,
	Dispatch,
} from 'react';
import {
	articleReducer,
	ArticleActions,
} from '../store/reducers';
import { getArticles } from '../utils/articles';
import { ArticleType } from '../types/article';

type InitialStateType = {
	articles: ArticleType[];
};

const useAppContext = () => {
	const articles = getArticles();

	const initialState = {
		articles,
	};
    const AppContext = createContext<{
        state: InitialStateType;
        dispatch: Dispatch<ArticleActions>;
    }>({
        state: initialState,
        dispatch: () => null,
    });

    const mainReducer = (
        { articles }: InitialStateType,
        action: ArticleActions,
    ) => ({
        articles: articleReducer(articles, action)
    });

	return { initialState, AppContext, mainReducer };
};
export default useAppContext;
