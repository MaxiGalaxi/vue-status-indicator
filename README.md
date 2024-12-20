# Vue 3 Status Indicator

A simple, customizable status indicator component for Vue 3. Show status with colored dots and optional pulse animations.

[![npm version](https://img.shields.io/npm/v/@maxigalaxi/vue-status-indicator.svg)](https://www.npmjs.com/package/@maxigalaxi/vue-status-indicator)
[![npm downloads](https://img.shields.io/npm/dm/@maxigalaxi/vue-status-indicator.svg)](https://www.npmjs.com/package/@maxigalaxi/vue-status-indicator)
[![License](https://img.shields.io/npm/l/@maxigalaxi/vue-status-indicator.svg)](https://github.com/MaxiGalaxi/vue-status-indicator/blob/main/LICENSE)

## Installation

```bash
npm install @maxigalaxi/vue-status-indicator
```

## Usage

### Global Registration

```js
import { createApp } from 'vue'
import StatusIndicator from '@maxigalaxi/vue-status-indicator'
// Import the CSS
import '@maxigalaxi/vue-status-indicator/dist/status-indicator.css'

const app = createApp(App)
app.use(StatusIndicator)
```

### Local Registration

```js
import { StatusIndicator } from '@maxigalaxi/vue-status-indicator'
import '@maxigalaxi/vue-status-indicator/dist/status-indicator.css'

export default {
  components: {
    StatusIndicator
  }
}
```

### Basic Usage

```html
<template>
  <status-indicator status="positive" />
  <status-indicator status="negative" pulse />
</template>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| status | String | "" | Status type: 'active', 'positive', 'intermediary', 'negative' |
| pulse | Boolean | false | Enable pulsing animation |

## Customization

Customize the appearance using CSS variables:

```css
:root {
  --status-indicator-size: 10px;
  --status-indicator-animation-duration: 2s;

  /* Default state */
  --status-indicator-color: rgb(216, 226, 233);
  
  /* Active state */
  --status-indicator-color-active: rgb(0, 149, 255);
  
  /* Positive state */
  --status-indicator-color-positive: rgb(75, 210, 143);
  
  /* Intermediary state */
  --status-indicator-color-intermediary: rgb(255, 170, 0);
  
  /* Negative state */
  --status-indicator-color-negative: rgb(255, 77, 77);
}
```

## Why This Fork?

This is a Vue 3 compatible fork of the original [vue-status-indicator](https://github.com/coderdiaz/vue-status-indicator) package. Created to provide Vue 3 support while maintaining the simplicity of the original component.

## License

MIT © Maximilian Rittler
