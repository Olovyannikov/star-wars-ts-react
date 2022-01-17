/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    sassOptions: {
        prependData: `
        @import "./src/client/resources/styles/general/mixins.scss";
        `,
    },
    images: {
        domains: [process.env.NEXT_PUBLIC_IMAGES, 'starwars-visualguide.com']
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                and: [/\.(js|ts)x?$/]
            },

            use: ['@svgr/webpack'],
        });

        return config;
    },
}
