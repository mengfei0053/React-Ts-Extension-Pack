const { AZURE_TOKEN } = process.env;

module.exports = {
  repositoryUrl: "git://github.com/mengfei0053/React-Ts-Extension-Pack.git",
  branches: ["master", { name: "beta", prerelease: true }],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        releaseRules: [
          { breaking: true, release: "major" },
          { revert: true, release: "patch" },
          { type: "feat", release: "minor" },
          { type: "fix", release: "patch" },
          { type: "perf", release: "patch" },
          { type: "docs", release: "patch" },
          { type: "refactor", release: "patch" },
        ],
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
        },
      },
    ],
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/exec",
      {
        publishCmd: `npm i -g vsce && vsce package && vsce publish -p ${AZURE_TOKEN}`,
      },
    ],
    "@semantic-release/changelog",
    [
      "@semantic-release/github",
      {
        assets: [{ path: "*.vsix", label: "Release Extension Pack" }],
      },
    ],
  ],
};
