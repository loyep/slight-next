"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const devProxy = {
    "/api": {
        target: "http://127.0.0.1:3001",
        pathRewrite: { "^/api": "" },
        changeOrigin: true,
    },
};
exports.default = devProxy;
//# sourceMappingURL=proxy.js.map