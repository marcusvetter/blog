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
            { test: /\.ts$/, loader: 'ts' },
            { test: /\.jade$/, loader: 'raw!jade-html' },
            { test: /\.scss$/, loader: 'raw!sass' }
        ]
    }
};