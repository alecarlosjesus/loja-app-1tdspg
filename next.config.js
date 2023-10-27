/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {

    // async redirects() {
    //     return [
    //       {
    //         source: '/login',
    //         destination: '/login', 
    //         permanent: true,
    //       },
    //     ]
    //   },

    images: {
        remotePatterns:[
            {
            protocol: "https",
            hostname: "prints.ultracoloringpages.com",
            port: "",
            pathname: "/**"
        }
        ,
        {
            protocol: "https",
            hostname: "http.cat",
            port: "",
            pathname: "/images/**"
        }
        ,
        {
            protocol: "https",
            hostname: "70096.cdn.simplo7.net",
            port: "",
            pathname: "/static/**"
        }
        ,
    ],
    },
}
