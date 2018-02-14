export const getDateComponent = () => {
    return import(/* webpackChunkName: "formatDate" */ '../date')
        .then((module) => {
            return module.default;
        });
};

export default getDateComponent;
