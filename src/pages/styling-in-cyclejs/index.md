---
title: Styling in Cycle.js
date: "2018-06-17T22:40:32.169Z"
---

After falling in love with [Cycle.js](https://cycle.js.org/) for it's explicit, functional, and reactive paradigm, I realized that there was no accepted way to manage the styling of a large application.

[Snabbdom](https://github.com/snabbdom/snabbdom) provides a style module, but it merely applies inline styles and clutters the DOM. The limitations of inline styles (no :hover for example) make this a non-option in any non-trival application.

Another suggested method was using [typestyle](https://github.com/typestyle/typestyle) to create hashed classnames to apply styles to elements. Typestyle makes css type-safe, which is an amazing benefit, but using it in Cycle.js introduces a side-effect: Styles are injected directly into the head *without going through a driver*. This goes against the architecture outlined by Cycle.

After reading some discussion on the subject, it seemed the consensus was to build a snabbdom module that would use typestyle to apply styles to elements and make the classname completely implicit. Thus, [snabbdom-typestyle](https://github.com/sliptype/snabbdom-typestyle) was born.

Snabbdom-typestyle also injects styles into the head, but because it is part of the DOMDriver it follows the Cycle.js paradigm. It allows you to pass style objects directly to your elements and let snabbdom take care of the rest! So you can do cool things like:

```javascript
export const main = (listLength) => ({
  'display'   : listLength ? 'block' : 'none',
  'position'  : 'relative',
  'z-index'   : '2',
  'border-top': '1px solid #e6e6e6',
});
```

```javascript
function renderMainSection(state, listVDom) {
  return section('.main', { css: styles.main(state.list.length) });
}
```

If you've used [React styled-components](https://www.styled-components.com/) before this should look familiar, but there are some notable differences:
* Styles are nested within the component rather than being wrapped around it
* Styles are checked at compile-time
* No template literals

I've been pleasantly surprised with how easy this makes writing maintainable styles!
