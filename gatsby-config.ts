import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    pathPrefix: "./",
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-postcss",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /\.inline\.svg$/,
                },
            },
        },
    ],
};

export default config;
