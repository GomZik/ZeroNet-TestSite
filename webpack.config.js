module.exports = {
    entry: {
        all: './assets/index.js'
    },
    output: {
        path: './js/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
            {test: /\.vue$/, loader: 'vue'}
        ]
    },
    resolve: {
        modulesDirectories: [
            'assets',
            'node_modules'
        ]
    }
}
