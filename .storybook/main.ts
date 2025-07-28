// import type { StorybookConfig } from "@storybook/nextjs";
// /** @type {import('tailwindcss').Config} */

// const config: StorybookConfig = {
//   "stories": [
//     "../stories/**/*.mdx",
//     "../stories/*.mdx",
//     "../app/components/**/*.mdx",
//     "../app/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
//     "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
//   ],
//   "addons": [
//     // "@chromatic-com/storybook",
//     "@storybook/addon-docs",
//     // "@storybook/addon-onboarding",
//     // "@storybook/addon-a11y",
//     // "@storybook/addon-vitest"
//   ],
//   "framework": {
//     "name": "@storybook/nextjs",
//     "options": {}
//   },
//   "staticDirs": [
//     "..\\public"
//   ]
// };
// export default config;

// main.ts
import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
    "stories": [
    "../stories/**/*.mdx",
    "../stories/*.mdx",
    "../app/components/**/*.mdx",
    "../app/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    // "@storybook/addon-links",
    // "@storybook/addon-essentials",
    // "@storybook/addon-interactions",
    // "@storybook/addon-essentials", // isso inclui addon-docs
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  

};

export default config;
