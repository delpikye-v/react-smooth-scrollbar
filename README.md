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
    // const root = useRef(null);
    <Scrollbar
        // ref={root}
        alwaysShowTracks
        overEffect={"bounce" | "glow"} // plugin = overscroll
    >
        { something1...  }
    </Scrollbar>

    <Scrollbar
        alwaysShowTracks
        plugins={{
          overscroll: {
            effect: 'bounce',
          } as const
        }}>
        { something1...  }
    </Scrollbar>

    // dosomething
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
        onScroll={() => console.log('pabcd')}
      >
      { something1...  }
    </Scrollbar>
```


<br />
<br />

#### plugins
Options for plugins, see [Plugin](https://github.com/idiotWu/smooth-scrollbar/blob/master/docs/plugin.md).

#### options
ScrollbarOptions: from [smooth-scrollbar/interfaces](https://github.com/idiotWu/smooth-scrollbar/blob/master/src/interfaces/scrollbar.ts)



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
