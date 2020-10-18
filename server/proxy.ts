const devProxy: { [key: string]: any } = {
    "/api": {
        target: "https://i.loyep.com",
        pathRewrite: { "^/api": "" },
        changeOrigin: true,
    },
};

export default devProxy;