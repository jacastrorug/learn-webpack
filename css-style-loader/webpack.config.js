const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        home: path.resolve(__dirname, 'src/js/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};