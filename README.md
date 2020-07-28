# react-ts-extension-pack README

![release](https://github.com/mengfei0053/React-Ts-Extension-Pack/workflows/release/badge.svg?branch=master) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Out-of-the-box;Standard, elegant, quick start developing React;

## Features

The following packs will be installed

- "dsznajder.es7-react-js-snippets",
- "infeng.vscode-react-typescript",
- "formulahendry.auto-rename-tag",
- "mikey.vscode-fileheader",
- "ionutvmi.path-autocomplete",
- "eamodio.gitlens",
- "dbaeumer.vscode-eslint",
- "esbenp.prettier-vscode"

The configuration will be set automatically

```json
{
  // "files.autoSave": "onFocusChange",
  "javascript.implicitProjectConfig.experimentalDecorators": true,
  "emmet.triggerExpansionOnTab": true,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  },
  // -----------------------auto rename tag settings----------------------------
  "auto-rename-tag.activationOnLanguage": ["*"],
  // -----------------------eslint settings----------------------------
  "eslint.alwaysShowStatus": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "eslint.enable": true,
  "eslint.workingDirectories": [
    {
      "mode": "auto"
    }
  ],
  // -----------------------editor settings----------------------------
  "editor.colorDecorators": false,
  "editor.renderIndentGuides": true,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.snippetSuggestions": "top",
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```
