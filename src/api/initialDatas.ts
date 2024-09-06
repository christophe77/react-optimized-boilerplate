export const getInitialDatas = async () => {
	const response = await setTimeout(() => {
		console.log('api fecthed');
		return 'aaa';
	}, 2500);
	return response;
};
