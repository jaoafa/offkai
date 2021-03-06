# Contributing

Thanks for your contributionsð  
Any contribution to this project is more than welcomeð

éçºã«åå ããå ´åã¯ãæ¬ææ¸ããèª­ã¿ãã ããã

## Reporting Issues

æ°æ©è½ã®ææ¡ã»ä¸å·åã®å ±åã¯ããã®ãªãã¸ããªã® Issues ã«è¨è¼ãã¦ãã ããã

éè¤ãé¿ãããããæ¢ã«å­å¨ãã¦ãã Issue ããªããç¢ºèªããã­ãããã¾ããã¾ããè¤æ°ã®åé¡ãããå ´åã¯ãããããåå¥ã«è¿½å ãã¦ãã ããã

## Pull Requests

åç´ãªèª¤å­ãå°ããªå¤æ´ã§ãããã«ãªã¯ã¨ã¹ãã¯å¤§æ­è¿ã§ãï¼

[ã³ã³ããªãã¥ã¼ã¿ã¼è¡åè¦ç¯](./CODE_OF_CONDUCT.md) ã«åããåå®¹ãå«ããã«ãªã¯ã¨ã¹ãã¯åãå¥ãã¦ããã¾ããã

### Getting Started

éçºãéå§ããã«ã¯ãä»¥ä¸ã®æé ã§æºåãè¡ã£ã¦ãã ããã

0. [Node.js](https://nodejs.org/) ãã¤ã³ã¹ãã¼ã«ãã¾ãã
1. ãªãã¸ããªã [Fork](https://docs.github.com/ja/github/getting-started-with-github/fork-a-repo) ããã­ã¼ã«ã«ã¸ [clone](https://docs.github.com/ja/github/creating-cloning-and-archiving-repositories/cloning-a-repository) ãã¾ãã
2. `npm install` ãå®è¡ããå¿è¦ãªããã±ã¼ã¸ãã¤ã³ã¹ãã¼ã«ãã¾ãã
3. `npm run dev` ãå®è¡ãã¦éçºãéå§ãã¾ãï¼

### Commit

ã³ãããã¡ãã»ã¼ã¸ã®è¦ç´ã¨ãã¦ [Conventional Commits](https://www.conventionalcommits.org/) ãæ¡ç¨ãã¦ãã¾ããä»¥ä¸ã«ã¼ã«ã«å¾ã£ã¦ãã³ãããã¡ãã»ã¼ã¸ãè¨è¿°ãã¦ãã ããã

- 1è¡ç®ã«ã¯æ¦è¦ãè¨è¿°ãã¾ãã
  - åé ­ã«ãåãã: ï¼ã³ã­ã³ + åè§ã¹ãã¼ã¹ï¼ããããããã®å¾ãã«æ¦è¦ãè¨è¿°ãã¾ãã
- 2è¡ç®ã«ã¯ç©ºè¡ãããã¾ãï¼æ¬æãè¨è¿°ããªãå ´åã¯ä¸è¦ï¼ã
- 3è¡ç®ä»¥éã«ã¯æ¬æãè¨è¿°ãã¾ããçç¥ã§ãã¾ãã

1è¡ç®ã«è¨è¿°ãããåãã«ã¯ä»¥ä¸ã®ãã®ãè¨±å¯ããã¦ãã¾ãã  
é¸æã«å°ãå ´åã¯ãã¨ãããã `chore` ãä½¿ç¨ãã¾ããè¤æ°å½ã¦ã¯ã¾ãå ´åã¯ãå¯è½ãªéãè¤æ°ã®ã³ãããã«åå²ããããã«ãã¦ãã ããã

- **feat**: æ°ããæ©è½ã®è¿½å ã
- **fix**: ä¸å·åã®ä¿®æ­£ãï¼å°ããªå¤æ´ã¯ chore ãä½¿ç¨ï¼
- **docs**: ãã­ã¥ã¡ã³ãã®æ´æ°ã
- **perf**: ããã©ã¼ãã³ã¹ã®æ¹åã
- **refactor**: ãªãã¡ã¯ã¿ãªã³ã°ãæ©è½ã«å¤åã®ãªãä¿®æ­£ã
- **style**: ã³ã¼ãã¹ã¿ã¤ã«ã®å¤æ´ãã¹ãã¼ã¹ãã¤ã³ãã³ãã®èª¿æ´ã Lint ã¨ã©ã¼ã®ä¿®æ­£ã
- **build**: ãã«ãã«é¢é£ããå¤æ´ã
- **ci**: CIã«é¢é£ããå¤æ´ã
- **test**: ãã¹ãã«é¢é£ããå¤æ´ã
- **revert**: ã³ãããã®åãæ¶ãã
- **chore**: ãã®ä»ã®å¤æ´ã typo ã®ä¿®æ­£ãªã©ã®å°ããªå¤æ´ã

è©³ããã«ã¼ã«ã«ã¤ãã¦ã¯ [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) ããç¢ºèªãã ããã

### Linting

ã³ã¼ãã®æ¸ãæ¹ãçµ±ä¸ããããã [ESLint](https://eslint.org/) ã¨ [stylelint](https://stylelint.io/) ãä½¿ç¨ãã¦ãã¾ããå¤æ´ãã³ãããããåã« `npm run lint` ãå®è¡ãã¦ã¨ã©ã¼ã¨ãªããªããã¨ãç¢ºèªãã¦ãã ããã  
[Visual Studio Code](https://code.visualstudio.com/) ãä½¿ç¨ãã¦ããå ´åã¯ãæ¡å¼µæ©è½ãè¿½å ãããã¨ããããããã¾ãã

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
