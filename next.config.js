module.exports = {
    webpackDevMiddleware: (config) => {
        return {
            ...config,
            watchOptions: {
                poll: 500,
                aggregateTimeout: 300,
            },
        };
    },
};