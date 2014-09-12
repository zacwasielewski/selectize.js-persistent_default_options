# Persistent Default Options plugin for Selectize

Selectize is an extensible jQuery-based custom &lt;select&gt; UI control.

Persistent Default Options solves a very specific use-case: providing a default list of select options that persists whenever the user input is blank.

### Dependencies

- [Selectize](http://brianreavis.github.io/selectize.js/)

### Installing

Follow instructions in the [Selectize plugin documentation](https://github.com/sjhewitt/selectize.js/blob/master/docs/plugins.md)

### Plugin Usage

```js
$('select').selectize({
    plugins: ['persistent_default_options']
});
```
