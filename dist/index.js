"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const next_1 = __importDefault(require("next"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const proxy_1 = __importDefault(require("./proxy"));
const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next_1.default({ dev });
const handler = routes_1.default.getRequestHandler(app);
app.prepare().then(() => {
    const server = express_1.default();
    if (process.env.PROXY_MODE === "local") {
        const { createProxyMiddleware } = require("http-proxy-middleware");
        Object.keys(proxy_1.default).forEach(context => {
            server.use(createProxyMiddleware(context, proxy_1.default[context]));
        });
    }
    server.all("*", (req, res) => handler(req, res));
    server.listen(port);
    console.log(`> Server listening at http://localhost:${port} as ${dev ? "development" : process.env.NODE_ENV}`);
});
//# sourceMappingURL=index.js.map