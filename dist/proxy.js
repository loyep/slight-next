"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const devProxy = {
    "/api": {
        target: "https://i.loyep.com",
        pathRewrite: { "^/api": "" },
        changeOrigin: true,
    },
};
exports.default = devProxy;
//# sourceMappingURL=proxy.js.map