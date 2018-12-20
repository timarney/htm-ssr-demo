# HTM Demo
- [HTM](https://github.com/developit/htm) Rendering using JSX-like syntax in plain JavaScript - no transpiler necessary.
- Zero Babel config
- [ESM](https://github.com/standard-things/esm) for module loading
- Server Side Rendered CSS using Emotion

```javascript
// map over a list of items js + template literals :)
<div class="${main}">
  ${
    items.map(item => {
      const href = `https://twitter.com/${item}`;
      return html`
        <div><a class="${link}" href=${href}>${item}</a></div>
      `;
    })
  }
</div>
```

<hr>

[Demo Link](https://htm-demo-hdmdzmdplv.now.sh)
