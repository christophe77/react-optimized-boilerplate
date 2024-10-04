import { useReducer, FC, ReactNode } from 'react';

import useAppContext from './useAppContext';

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const { initialState, AppContext, mainReducer } = useAppContext();
	const [state, dispatch] = useReducer(mainReducer, initialState);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};

export { AppProvider };
