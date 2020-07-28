module.exports = {
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
      "@semantic-release/npm",
      {
        npmPublish: false,
      },
    ],
    "@semantic-release/changelog",
    "@semantic-release/github",
    "@semantic-release/git",
  ],
};
