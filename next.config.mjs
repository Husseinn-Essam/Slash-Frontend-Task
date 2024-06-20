/** @type {import('next').NextConfig} */
const nextConfig = {

    async redirects() {
        return [
          {
            source: '/',
            destination: '/Home',
            permanent: true,
          },
        ];
      },
      images: {
        domains: ['picsum.photos',"via.placeholder.com","placeholder.com","via.placeholder.com/150"],
      },

};

export default nextConfig;
