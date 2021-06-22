const CracoAntDesignPlugin = require('craco-antd');
const CracoLessPlugin = require('craco-less');
const path = require('path');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        javascriptEnabled: true,
                    },
                },
            },
        },
        {
            plugin: CracoAntDesignPlugin,
            options: {
                customizeThemeLessPath: path.join(__dirname, 'src/less/customTheme.less'),
            },
        },
    ],
};
