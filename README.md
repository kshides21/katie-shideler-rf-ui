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

To preview the production build with VS Code Live Server, open this repository as the VS Code workspace and click **Go Live**. The workspace Live Server setting serves the `build` folder as the site root so the compiled assets load from the correct paths.