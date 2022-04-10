const path = require("path");
const { override, babelInclude, addWebpackAlias } = require("customize-cra");

const devProdConfig = (config, env) =>
  Object.assign(
    config,
    override(
      babelInclude([
        /* transpile (converting to es5) code in src/ and shared component library */
        path.resolve("src"),
        path.resolve("../../packages"),
      ]),
      addWebpackAlias({
        "^@/(.*)$": path.resolve(__dirname, "src"),
      })
    )(config, env)
  );

const testConfig = {
  jest(config) {
    // eslint-disable-next-line no-param-reassign
    config.transformIgnorePatterns = [
      "node_modules/(?!(vis-timeline|another-3rd-party-project-with-esm)/)",
    ];

    // eslint-disable-next-line no-param-reassign
    config.moduleNameMapper = {
      ...config.moduleNameMapper,
      "^@/(.*)$": "<rootDir>/src/$1",
    };

    return config;
  },
};

module.exports = process.env.NODE_ENV === "test" ? testConfig : devProdConfig;
