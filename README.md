# jQuery Equaliser plugin
> Make the heights of elements on the same row the same.

## Getting started
### NPM
Install package with NPM and add it to your dependencies:
`npm install @mogusbi/jquery.equaliser --save`

## Introducing it to your page
Include jQuery and the plugin to your page and then select the elements you wish to set equal heights to and call the `equaliser` method.

```html
<!doctype html>
<html>
  <head>
    ...
  </head>
  <body>
    <div class="row">
      <div class="col-xs-4" data-equalise>...</div>
      <div class="col-xs-4" data-equalise>...</div>
      <div class="col-xs-4" data-equalise>...</div>
    </div>

    <script src="jquery.js"></script>
    <script src="jquery.equaliser.js"></script>
    <script>
      $('[data-equalise]').equaliser();
    </script>
  </body>
</html>
```

## License
Copyright &copy; Mo Gusbi.
Licensed under the MIT license.