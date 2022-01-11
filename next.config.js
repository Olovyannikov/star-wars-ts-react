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
    }
}
