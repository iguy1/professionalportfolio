const path = require('path');

module.exports = {
    // ...existing code...
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'resolve-url-loader',
                        options: {
                            sourceMap: true, // Ensure source maps are enabled
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true, // Ensure source maps are enabled
                        },
                    },
                ],
            },
            {
                test: /\.(woff2?|ttf|eot|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]',
                },
            },
        ],
    },
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets'),
        },
    },
};