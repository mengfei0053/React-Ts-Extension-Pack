import * as vscode from "vscode";

export default class Utils {
  static SetWorkSpaceConfig = () => {
    const c = {
      // "files.autoSave": "onFocusChange",
      "javascript.implicitProjectConfig.experimentalDecorators": true,
      // -----------------------git settings----------------------------
      //   "git.enableSmartCommit": true,
      //   "git.autofetch": true,
      //   "git.confirmSync": false,
      // -----------------------emmet settings----------------------------
      "emmet.triggerExpansionOnTab": true,
      "emmet.includeLanguages": {
        javascript: ["javascriptreact", "typescriptreact"],
      },
      // -----------------------auto rename tag settings----------------------------
      "auto-rename-tag.activationOnLanguage": ["*"],
      // -----------------------eslint settings----------------------------
      "eslint.alwaysShowStatus": true,
      "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact",
      ],
      "eslint.enable": true,
      // -----------------------editor settings----------------------------
      "editor.colorDecorators": false,
      "editor.renderIndentGuides": true,
      "editor.formatOnSave": true,
      "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
      },
      "editor.snippetSuggestions": "top",
      "[markdown]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
      },
      "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
      },
      "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
      },
      "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
      },
    };

    const config = vscode.workspace.getConfiguration();

    for (let i = 0; i < Object.keys(c).length; i++) {
      const key = Object.keys(c)[i] as keyof typeof c;
      try {
        config.update(key, c[key], true);
      } catch (error) {
        console.log(error, "");
      }
    }
  };
}
