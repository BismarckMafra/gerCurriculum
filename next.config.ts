import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/curriculos/visualizar",
        destination: "/sistema/paginas/curriculos",
        permanent: true,
      },
      {
        source: "/curriculos/visualizar/:id",
        destination: "/sistema/paginas/curriculos/:id",
        permanent: true,
      },
      {
        source: "/curriculos/cadastrar",
        destination: "/sistema/paginas/curriculos/novo",
        permanent: true,
      },
    ];
  }
  /* config options here */
};

export default nextConfig;
