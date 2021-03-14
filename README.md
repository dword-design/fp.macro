<!-- TITLE/ -->
# fp.macro
<!-- /TITLE -->

<!-- BADGES/ -->
  <p>
    <a href="https://npmjs.org/package/fp.macro">
      <img
        src="https://img.shields.io/npm/v/fp.macro.svg"
        alt="npm version"
      >
    </a><img src="https://img.shields.io/badge/os-linux%20%7C%C2%A0macos%20%7C%C2%A0windows-blue" alt="Linux macOS Windows compatible"><a href="https://github.com/dword-design/fp.macro/actions">
      <img
        src="https://github.com/dword-design/fp.macro/workflows/build/badge.svg"
        alt="Build status"
      >
    </a><a href="https://codecov.io/gh/dword-design/fp.macro">
      <img
        src="https://codecov.io/gh/dword-design/fp.macro/branch/master/graph/badge.svg"
        alt="Coverage status"
      >
    </a><a href="https://david-dm.org/dword-design/fp.macro">
      <img src="https://img.shields.io/david/dword-design/fp.macro" alt="Dependency status">
    </a><img src="https://img.shields.io/badge/renovate-enabled-brightgreen" alt="Renovate enabled"><br/><a href="https://gitpod.io/#https://github.com/dword-design/fp.macro">
      <img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Open in Gitpod">
    </a><a href="https://www.buymeacoffee.com/dword">
      <img
        src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg"
        alt="Buy Me a Coffee"
        height="32"
      >
    </a><a href="https://paypal.me/SebastianLandwehr">
      <img
        src="https://dword-design.de/images/paypal.svg"
        alt="PayPal"
        height="32"
      >
    </a><a href="https://www.patreon.com/dworddesign">
      <img
        src="https://dword-design.de/images/patreon.svg"
        alt="Patreon"
        height="32"
      >
    </a>
</p>
<!-- /BADGES -->

<!-- DESCRIPTION/ -->
A zero-runtime functional programming library as a babel macro.
<!-- /DESCRIPTION -->

`fp.macro` This is a build-time functional programming library that allows you to use high-level collection functions without a production dependency and without the runtime penalty that you have when using a dedicated library.

It does so by exposing a [Babel](https://babeljs.io/) macro that is evaluated at build time by [babel-plugin-macros]((https://github.com/kentcdodds/babel-plugin-macros). So in the end you do not have a production dependency anymore, it's all in the generated Babel code.

<!-- INSTALL/ -->
## Install

```bash
# npm
$ npm install fp.macro

# Yarn
$ yarn add fp.macro
```
<!-- /INSTALL -->

## Usage

Install `babel-plugin-macros`:

```bash
$ npm install babel-plugin-macros
```

The plugin is best used with the [Babel pipeline operator](https://babel.dev/docs/en/babel-plugin-proposal-pipeline-operator), so optionally install this one as well:

```bash
$ npm install @babel/plugin-proposal-pipeline-operator
```

Then add the plugins to your babel config or create a `.babelrc.json` file:

```json
{
  "plugins": [
    "babel-plugin-macros",
    ["@babel/plugin-proposal-pipeline-operator", { "proposal": "fsharp" }]
  ]
}
```

Create a JavaScript file and start mapping collections:

```js
import { filter, join, map, mapValues } from 'fp.macro'

const myMap = map(x => x * 2)

console.log(myMap([1, 2]))
// [2, 4]

// Using pipeline operator
console.log(
  [1, 2, 3]
    |> map(x => x * 2)
    |> filter(x => x > 2)
    |> join(',')
)
// 4,6

console.log(
  { foo: { name: 'foo' }, bar: { name: 'bar' } }
    |> mapValues(x => x.name)
)
// { foo: 'foo', bar: 'bar' }
```

To run the files, you need to use Babel. You can either compile them using [@babel/cli](https://babel.dev/docs/en/babel-cli), or run them directly via [@babel/node](https://babel.dev/docs/en/babel-node) (which is not recommended for production though).

The library is currently in development, so for more insights into the available functions check out the source code.

<!-- LICENSE/ -->
## Support Me

Hey, I am Sebastian Landwehr, a freelance web developer, and I love developing web apps and open source packages. If you want to support me so that I can keep packages up to date and build more helpful tools, you can donate here:

<p>
  <a href="https://www.buymeacoffee.com/dword">
    <img
      src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg"
      alt="Buy Me a Coffee"
      height="32"
    >
  </a>&nbsp;If you want to send me a one time donation. The coffee is pretty good 😊.<br/>
  <a href="https://paypal.me/SebastianLandwehr">
    <img
      src="https://dword-design.de/images/paypal.svg"
      alt="PayPal"
      height="32"
    >
  </a>&nbsp;Also for one time donations if you like PayPal.<br/>
  <a href="https://www.patreon.com/dworddesign">
    <img
      src="https://dword-design.de/images/patreon.svg"
      alt="Patreon"
      height="32"
    >
  </a>&nbsp;Here you can support me regularly, which is great so I can steadily work on projects.
</p>

Thanks a lot for your support! ❤️

## License

[MIT License](https://opensource.org/licenses/MIT) © [Sebastian Landwehr](https://dword-design.de)
<!-- /LICENSE -->
