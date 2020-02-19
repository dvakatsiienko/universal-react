module.exports = api => {
    api.cache(false);

    return {
        presets: [
            '@babel/react',
            [
                '@babel/env',
                {
                    targets: {
                        node: 'current',
                    },
                },
            ],
        ],
        plugins: ['@babel/plugin-proposal-class-properties'],
    };
};
