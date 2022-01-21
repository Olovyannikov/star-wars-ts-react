/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    sassOptions: {
        prependData: `
        @import "./src/client/resources/styles/general/mixins.scss";
        `,
    },
    images: {
        domains: ['starwars-visualguide.com']
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                and: [/\.(js|ts)x?$/]
            },

            use: ['@svgr/webpack'],
        });

        config.module.rules.push({
            test: /\.(mp4)/,
            use: {
                loader: 'url-loader', // this need file-loader
                options: {
                    limit: 50000
                }
            }
        });

        return config;
    },
}
