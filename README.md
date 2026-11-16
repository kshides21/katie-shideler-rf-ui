# RainFocus UI Challenge

A responsive single-page application built for the RainFocus UI Developer take-home challenge.

## Technologies
- React
- JavaScript
- SCSS

## Getting Started

To run the project locally:

1. Install dependencies:
   ```bash
   npm ci
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open the local URL provided in your terminal.

## Production Build

To generate the production build:

```bash
npm run build
```

The compiled static site is located in the `build` folder. Serve that folder with a static web server to preview the production build.

The build uses relative asset paths, so you can open `build/index.html` directly in a browser after building. You can also preview it with VS Code Live Server: open this repository as the VS Code workspace and click **Go Live**. The workspace setting serves the `build` folder as the site root.

## CodeSandbox

Import this repository into a CodeSandbox Devbox (container), then run:

```bash
npm ci
npm start
```

Open the preview for port 3000. A Devbox runs the app with its installed dependencies instead of relying on the browser-only Sass transpiler worker.