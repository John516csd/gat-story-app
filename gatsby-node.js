const path = require("path");
const { copyLibFiles } = require("@builder.io/partytown/utils");

exports.onPreBuild = async () => {
  await copyLibFiles(path.join(__dirname, "static", "~partytown"));
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@components": path.resolve(__dirname, "src/components"),
        "@layout": path.resolve(__dirname, "src/layout"),
      },
      fallback: {
        fs: false,
      },
    },
  });

  // 301 Redirect
//   redirects.forEach((redirect) =>
//     actions.createRedirect({
//       fromPath: redirect.fromPath,
//       toPath: redirect.toPath,
//       statusCode: 301,
//     })
//   );
};
