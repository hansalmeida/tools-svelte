const path = require("path")
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin")

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf",
    "storybook-dark-mode",
  ],
  framework: "@storybook/svelte",
  svelteOptions: {
    preprocess: import("../svelte.config.js").preprocess,
  },
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ]

    const svelteLoader = config.module.rules.find((r) => r?.loader?.includes("svelte-loader"))
    svelteLoader.options.preprocess = require("svelte-preprocess")()
    return config
  },
}
