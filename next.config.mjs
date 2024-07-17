export default {
    webpack: (config, { dev }) => {
        if (dev) {
            config.watchOptions = {
                ignored: ['**/node_modules'],
                // poll: 100,
                // aggregateTimeout: 100,
            };
        }
        return config;
    },
};
