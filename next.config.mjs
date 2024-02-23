/** @type {import('next').NextConfig} */

import path from "path";

const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(process.cwd(), "./src/styles")],
    },
    eslint: {
        dirs: ["src"],
    },
};

export default nextConfig;
