// #region Global Imports
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextRoutes = require("next-routes");
// #endregion Global Imports

const routes = (module.exports = nextRoutes());

routes.add("home", "/");

export default routes;