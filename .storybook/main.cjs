module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/components/**/**/**/*.story.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        { name: 'storybook-css-modules' },
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-vite',
    },
    features: {
        storyStoreV7: true,
    },
    // importLoaders: 1,
    // modules: {
    //     localIdentName: '[path][name]__[local]--[hash:base64:5]',
    // },
};
