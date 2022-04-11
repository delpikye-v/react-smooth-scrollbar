<div align="center">
    <h1>react-smooth-scrollbar-z</h1>
    <br />
    <a href="https://codesandbox.io/s/8c5vzo">LIVE EXAMPLE</a>
</div>

---

#### Description
---

#### Usage
```js
npm install react-smooth-scrollbar-z
```

Import the module in the place you want to use:
```js
import Scrollbar from 'react-smooth-scrollbar-z'
```


#### Snippet

##### `simple`

```js
    <Scrollbar
        alwaysShowTracks
        height="100px"
        width="200px"
        damping={number}
        thumbMinSize={number}
        renderByPixels={boolean}
        continuousScrolling={boolean}
        wheelEventTarget={element}
        // overEffect={"bounce" | "glow"}
        // plugins={object}
        onScroll={func}
      >
      { something1...  }
    </Scrollbar>
```


#### RUN

<a href="https://codesandbox.io/s/8c5vzo">LIVE EXAMPLE</a>

```js
npm install
```
```js
npm run dev
npm run start
```

### License

MIT
