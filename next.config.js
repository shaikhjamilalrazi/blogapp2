/** @type {import('next').NextConfig} */
const nextConfig = {
    // Set the custom build directory name to "build"
    // distDir: "build",

    async headers() {
        return [
            {
                source: "/",
                headers: [
                    {
                        key: "X-Frame-Options",
                        value: "DENY", // or 'SAMEORIGIN' if you want to allow framing from the same origin
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
