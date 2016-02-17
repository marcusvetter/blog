module.exports = {
    entry: './app/main',
    output: {
        path: __dirname,
        filename: 'dist/bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: 'raw' },
            { test: /\.ts$/, loader: 'ts-loader' },
            { test: /\.jade$/, loader: 'raw!jade-html' }
        ]
    }
};