import { ArticleType } from "../../types/article";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ActionMap<M extends { [index: string]: any }> = {
	[Key in keyof M]: M[Key] extends undefined
		? {
				type: Key;
		  }
		: {
				type: Key;
				payload: M[Key];
		  };
};

export enum Types {
	Set = 'SET_ARTICLES',
}

type ArticlePayload = {
	[Types.Set]: ArticleType[];
};

export type ArticleActions =
	ActionMap<ArticlePayload>[keyof ActionMap<ArticlePayload>];

export const articleReducer = (
	state: ArticleType[],
	action: ArticleActions,
) => {
	console.log('reducer', action)
	switch (action.type) {
		case Types.Set:
			return action.payload;
		default:
			return state;
	}
};
