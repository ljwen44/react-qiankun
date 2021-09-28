module.exports = {
    webpack: (config) => {
        config.output.library = 'react-qiankun';
        config.output.libraryTarget = 'umd';
        config.output.publicPath = 'http://localhost:8083/';
        return config
    },
    devServer: (configFunction) => {
        return function (proxy, allowedHost) {
            const config = configFunction(proxy, allowedHost)
            config.port = '8083'
            config.headers = {
                'Access-Control-Allow-Origin': '*'
            }
            return config
        }
    }
}