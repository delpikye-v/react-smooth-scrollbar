## ✨ react-smooth-scrollbar-z

+ A modern, fully customizable React scrollbar library featuring NeoScrollbar and Scrollbar components
+ Powered by Smooth Scrollbar – smooth, flexible, and plugin-ready.
---

[![NPM](https://img.shields.io/npm/v/react-smooth-scrollbar-z.svg)](https://www.npmjs.com/package/react-smooth-scrollbar-z)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![Downloads](https://img.shields.io/npm/dt/react-smooth-scrollbar.svg)

---

### 🌟 Live Demo

👉 [Codesandbox](https://codesandbox.io/s/8c5vzo)

---

## 🚀 Features

- NeoScrollbar: Lightweight, sleek, and smooth scrollbar for basic use.

- Scrollbar: Advanced, fully-featured scrollbar with hover scaling, always-visible option, and full plugin support.

- Smooth & Responsive: Natural inertia and momentum scrolling for a polished user experience.

- Fully Customizable: Configure thumb color, size, hover scale, track color, opacity, and more.

- Dynamic Plugin System: Supports plugins like FadeScroll, HighlightItem, GradientIndicator, ScrollBlur, OverscrollGlow, BounceEffect, and others.

- Lazy Plugin Loading: Plugins are loaded on-demand for optimal performance.

- React Integration: React hooks (useNeoScrollbar) and refs provide full programmatic control (scroll to top, bottom, or any position).

- SSR-Safe: Works seamlessly in server-side rendered applications.

- Optimized for Modern React: Ready for React >=3.0.0 (AI-suggested best practices).

---

### 📦 Installation

```bash
npm install react-smooth-scrollbar-z
```

---

### ⚡ Quick Example

```ts
import React, { useRef } from "react";
import { NeoScrollbar } from "react-smooth-scrollbar-z";

function App() {
  const scrollRef = useRef(null);

  return (
    <NeoScrollbar
      ref={scrollRef}
      height="300px"
      thumbColor="rgba(0,0,0,0.3)"
      thumbHoverColor="rgba(0,0,0,0.7)"
      showOnHover
    >
      <div style={{ height: "1000px" }}>Scrollable Content Here</div>
    </NeoScrollbar>
  );
}
```

### 🛠 Plugins

```tsx
import React, { useRef } from "react";
import { NeoScrollbar, Scrollbar } from "react-smooth-scrollbar-z";
import {
  GradientIndicatorPlugin,
  HighlightItemPlugin,
  ScrollBlurPlugin,
} from "react-smooth-scrollbar-z";

import type { IFScrollbarHandle, IFNeoScrollbarHandle } from "react-smooth-scrollbar-z";

const content = Array.from({ length: 50 }, (_, i) => (
  <div
    key={i}
    className="item"
    style={{
      padding: "10px",
      borderBottom: "1px solid #ccc",
      background: i % 2 === 0 ? "#f5f5f5" : "#fff",
    }}
  >
    Item {i + 1}
  </div>
));

function AppScrollbar() {
  const neoRef = useRef<IFNeoScrollbarHandle>(null);
  const fullRef = useRef<IFScrollbarHandle>(null);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", gap: "40px" }}>
        <div style={{ flex: 1 }}>
          <div style={{ marginBottom: "10px" }}>
            <button onClick={() => neoRef.current?.scrollToTop?.()}>Scroll Top</button>
            <button onClick={() => neoRef.current?.scrollToBottom?.()} style={{ marginLeft: 10 }}>
              Scroll Bottom
            </button>
          </div>
          <NeoScrollbar
            ref={neoRef}
            height="300px"
            thumbColor="rgba(0,0,0,0.3)"
            thumbHoverColor="rgba(0,0,0,0.7)"
            thumbSize="10px"
            showOnHover
            alwaysShowTracks
            trackColor="transparent"
            visibleOpacity={0.8}
            plugins={{
              scrollBlur: { blurAmount: 5, duration: 300, zIndex: 1000 },
            }}

            pluginLoaders={{
              scrollBlur: () => Promise.resolve(ScrollBlurPlugin),
            }}
          >
            {content}
          </NeoScrollbar>
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ marginBottom: "10px" }}>
            <button onClick={() => fullRef.current?.scrollToTop?.()}>Scroll Top</button>
            <button onClick={() => fullRef.current?.scrollToBottom?.()} style={{ marginLeft: 10 }}>
              Scroll Bottom
            </button>
          </div>
          <Scrollbar
            ref={fullRef}
            height="300px"
            thumbColor="rgba(0,0,0,0.3)"
            thumbHoverColor="rgba(0,0,0,0.7)"
            thumbSize="12px"
            trackSize="12px"
            thumbHoverSize={16}
            showOnHover
            visibleOpacity={0.8}

            plugins={{
              highlightItem: { selector: ".item", className: "highlighted", mode: "center" },
              gradientIndicator: {
                height: 30,                  
                color: "rgba(0,0,0,0.2)",   
                fadeDuration: 300,          
              }
            }}

            pluginLoaders={{
              highlightItem: () => Promise.resolve(HighlightItemPlugin),
              gradientIndicator: () => Promise.resolve(GradientIndicatorPlugin),
            }}
          >
            {content}
          </Scrollbar>
        </div>
      </div>
    </div>
  );
}

export default AppScrollbar;


```

### 🛠 Hooks

```tsx
useFullScrollbar(options) – returns { ref, initScrollbar, api } // Scrollbar

useNeoScrollbar(options) – returns { ref, api }
```

---

### ⚙️ Props

#### Common Props

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

#### API (via ref)

- `scrollTo(x: number, y: number, duration?: number)`
- `scrollToTop(duration?: number)`
- `scrollToBottom(duration?: number)`
- `scrollBy(dx: number, dy: number, duration?: number)` **(Scrollbar)**
- `update()`
- `destroy()`
- `getScrollbar(): Scrollbar | null` **(Scrollbar)**
- `disableScroll()` / `enableScroll()` **(Scrollbar)**
- `setSpeed(multiplier: number)` **(Scrollbar)**
- etc...
---

### 🔌 Plugins

Available plugins (can be used with Scrollbar via `plugins` prop):

- `overscroll` - bounce/glow effect
- `edgeEasing`
- `resize`
- `anchor`
- `minimap`
- `fadeScroll`
- `scrollHint`
- etc... see pluginLoaders

**Usage:**

---

### 📋 License

MIT
