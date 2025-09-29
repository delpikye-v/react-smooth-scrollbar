## React Smooth Scrollbar

A customizable React scrollbar library with **NeoScrollbar** and **Scrollbar** components, built using **Smooth Scrollbar** with plugin support.

---

[![NPM](https://img.shields.io/npm/v/react-smooth-scrollbar-z.svg)](https://www.npmjs.com/package/react-smooth-scrollbar-z)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![Downloads](https://img.shields.io/npm/dt/react-smooth-scrollbar.svg)

---

### 🚀 Live Demo

👉 [Codesandbox](https://codesandbox.io/s/8c5vzo)

---

## 🚀 Features

- **NeoScrollbar:** Lightweight, simple, smooth scrollbar.
- **Scrollbar:** Extended features with hover scaling, always visible option, and full plugin support.
- **Plugin System:** Overscroll, EdgeBounce, FadeScroll, Minimap, Momentum, Resize, ScrollHint, StickyScroll, VirtualScroll, MouseWheel, Wheel, and more.
- Fully customizable: thumb color, size, hover size, track color, and opacity.
- Smooth, responsive scrolling.
- React `ref` exposes a full API for programmatic control.
- Optimize: >=3.0.0 (Suggestion using AI)

---

## 📦 Installation

```bash
npm install react-smooth-scrollbar-z smooth-scrollbar
```

---

## 🛠 Usage

```tsx
import React, { useRef } from "react";
import { Scrollbar, NeoScrollbar } from "react-smooth-scrollbar-z";
// Scrollbar: FullScrollbar

const App = () => {
  const content = Array.from({ length: 50 }, (_, i) => (
    <div key={i} style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      Item {i + 1}
    </div>
  ));

  const neoRef = useRef(null);
  const fullRef = useRef(null);

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <div style={{ flex: 1 }}>
        <h3>NeoScrollbar</h3>
        <NeoScrollbar
          ref={neoRef}
          height="300px"
          thumbColor="rgba(0,0,0,0.3)"
          thumbHoverColor="rgba(0,0,0,0.7)"
          thumbSize="8px"
          showOnHover
          visibleOpacity={0.8}
        >
          {content}
        </NeoScrollbar>
      </div>

      <div style={{ flex: 1 }}>
        <h3>Scrollbar</h3>
        <Scrollbar
          ref={fullRef}
          height="300px"
          thumbColor="rgba(0,0,0,0.3)"
          thumbHoverColor="rgba(0,0,0,0.7)"
          thumbSize="8px"
          thickness={8}
          thumbHoverSize={16}
          showOnHover
          visibleOpacity={0.8}
        >
          {content}
        </Scrollbar>
      </div>
    </div>
  );
};

export default App;
```

## 🛠 Hooks

```tsx
useFullScrollbar(options) – returns { ref, initScrollbar, api } // Scrollbar

useNeoScrollbar(options) – returns { ref, api }
```

---

## ⚙️ Props

### Common Props

| Prop              | Type      | Default             | Description                     |                            |
| ----------------- | --------- | ------------------- | ------------------------------- | -------------------------- |
| `height`          | `string`  | `"auto"`            | Scroll container height         |                            |
| `width`           | `string`  | `"auto"`            | Scroll container width          |                            |
| `thumbColor`      | `string`  | `"rgba(0,0,0,0.4)"` | Scroll thumb color              |                            |
| `trackColor`      | `string`  | `"transparent"`     | Scroll track color              |                            |
| `thumbSize`       | `string`  | `"6px"`             | Scroll thumb size               |                            |
| `thickness`       | `number`  | `6`                 | Scrollbar thickness (Scrollbar) |                            |
| `thumbHoverColor` | `string`  | `"rgba(0,0,0,0.6)"` | Hover color for thumb           |                            |
| `thumbHoverSize`  | `number   | string`             | `undefined`                     | Scale on hover (Scrollbar) |
| `showOnHover`     | `boolean` | `false`             | Track visible only on hover     |                            |
| `visibleOpacity`  | `number`  | `1`                 | Track opacity (0→1)             |                            |
| `plugins`         | `object`  | `{}`                | SmoothScrollbar plugins object  |                            |

### API (via ref)

- `scrollTo(x: number, y: number, duration?: number)`
- `scrollToTop(duration?: number)`
- `scrollToBottom(duration?: number)`
- `scrollBy(dx: number, dy: number, duration?: number)` **(Scrollbar)**
- `update()`
- `destroy()`
- `getScrollbar(): Scrollbar | null` **(Scrollbar)**
- `disableScroll()` / `enableScroll()` **(Scrollbar)**
- `setSpeed(multiplier: number)` **(Scrollbar)**

---

## 🔌 Plugins

Available plugins (can be used with Scrollbar via `plugins` prop):

- `overscroll` - bounce/glow effect
- `edgeEasing`
- `resize`
- `anchor`
- `minimap`
- `fadeScroll`
- `scrollHint`
- `scrollProgress`
- `sticky`
- `edgeBounce`
- `wheel`
- `mouseWheel`
- `contentSize`
- `momentum`
- `virtualScroll`

**Usage:**

```ts
import {
  OverscrollPlugin,
  MinimapPlugin,
  FadeScrollPlugin,
} from "react-smooth-scrollbar-z";

<Scrollbar
  height="300px"
  plugins={{ overscroll: OverscrollPlugin, minimap: MinimapPlugin }}
>
  {content}
</Scrollbar>;
```

---

## 📋 License

MIT
