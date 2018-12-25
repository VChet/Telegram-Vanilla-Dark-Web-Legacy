# Telegram Vanilla Dark
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![saythanks](https://img.shields.io/badge/Say-thanks-B9B384.svg)](https://saythanks.io/to/VChet)

Dark theme for [web.telegram.org](https://web.telegram.org).

## Preview
![](./images/screenshots/color-themes.png)

## Installation
1. Install Stylus
([<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_16x16.png" /> Chrome](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne),
[<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_16x16.png" /> Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/),
[<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_16x16.png" /> Opera](https://addons.opera.com/en-gb/extensions/details/stylus/)).

1. Install the style using one of these methods:<br>
   * [Install from userstyles.org](https://userstyles.org/styles/162801)
   * [Install directly with Stylus](https://github.com/VChet/Telegram-Vanilla-Dark/raw/master/telegram-vanilla-dark.user.css)

## Contribute
Anyone and everyone is welcome to [contribute](https://github.com/VChet/Telegram-Vanilla-Dark/pulls), report any [issues](https://github.com/VChet/Telegram-Vanilla-Dark/issues) or just [say thanks](https://saythanks.io/to/VChet).

## Development
1. [Fork](https://github.com/VChet/Telegram-Vanilla-Dark/fork) and download this repository.
1. Install [Node.js](https://nodejs.org/).
1. Install all dependencies using `npm install`.
1. Install gulp-cli using `npm install -g gulp-cli`.
1. Make your changes:
   * In `telegram-vanilla-dark.css` for common styles.
   * In `/options/themes` for different color themes.
1. Use available tasks if needed:
   * `gulp lint`: run Stylelint on all css files.
   * `npm run usercss`: build a usercss style.
   * `npm run patch`: increment the version on the patch version number, creates commit and tag.
   * `npm run minor`: increment the version on the minor version number, creates commit and tag.
   * `npm run major`: increment the version on the major version number, creates commit and tag.
7. Make a pull request.
