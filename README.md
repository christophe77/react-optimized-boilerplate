# React + TypeScript + Vite - SEO and performance optimized - PWA

## Features

### Bundler

- Vite with vite-plugin-compression2

### Components

- Lazy loading
- Code splitting

### UI

- Semantic UI minified css files imported on each component

### Global state management

- React context with useReducer() and useContext() hooks

### SEO

- React Helmet async for dynamic metas

## Configuration

### Routing

Add routes in src/routes/routes.ts

### i18n

i18n translations are in public/locales

### PWA manifest

The PWA manifest is generated during build and has to be setup in src/manifest.ts

## Lighthouse score

Tested on a non tweaked WAMP instance.

### Performance

- Mobile : 98
- Desktop : 100

### Accessibility

- Mobile : 100
- Desktop : 100

### Best practices

- Mobile : 100
- Desktop : 100

### SEO

- Mobile : 100
- Desktop : 100

## Performance insights

Page /blog

- DCL : 0.24s
- FCP : 0.34s
- LCP : 0.39s
- CLS : 0.0843
