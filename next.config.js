/** @type {import('next').NextConfig} */

const BASE_PATH = "https://api.themoviedb.org/3";

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `${BASE_PATH}/movie/popular?api_key=${process.env.API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `${BASE_PATH}/movie/:id?api_key=${process.env.API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
