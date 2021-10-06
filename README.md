# @orbit-ui/tachyons

ShareGate old styling stack using Tachyons atomic CSS library.

Includes:

- CSS normalize
- ShareGate fonts
- Customized version of Tachyons

## Installation

```bash
npm i -D @orbit-ui/tachyons
```

Import the styles in your root stylesheet:

```css
@import "~@orbit-ui/tachyons";
```

Apply the font:

```css
html,
body {
    font-family: "TT Interphases Variable", Arial, Helvetica, sans-serif;
    font-size: 16px;
}
```

Create the theme variables at the root of your React application:

```js
// index.js

import { createThemeVars, ApricotTheme } from "@orbit-ui/styles";
import { ThemeProvider } from "@orbit-ui/react"; 
import { render } from "react-dom";
import App from "./App";

createThemeVars([ApricotTheme]);

render(
    <ThemeProvider colorScheme="light">
        <App />
    </ThemeProvider>,
    document.getElementById("root")
);
```

## Maintainers

The following documentation is only for the maintainers of this repository.

### Installation

Clone the repository:

```bash
git clone https://github.com/gsoft-inc/sg-orbit-tachyons.git
```

Then, install the dependencies for all the packages with Yarn or NPM:

```bash
yarn install
```

### Release

This project use [np](https://github.com/sindresorhus/np) to automate the release flow of the package.

Before you release, make sure you have **write access** to [@orbit-ui/tachyons NPM package](https://www.npmjs.com/package/@orbit-ui/tachyons) and that you are [logged in to NPM](https://docs.npmjs.com/logging-in-to-an-npm-enterprise-registry-from-the-command-line).

To release, open a terminal at the root of the project and execute the following commands:

```bash
yarn publish
```

Dont forget to **publish** the release.

## License

Copyright © 2019, GSoft inc. This code is licensed under the Apache License, Version 2.0. You may obtain a copy of this license at https://github.com/gsoft-inc/gsoft-license/blob/master/LICENSE.
