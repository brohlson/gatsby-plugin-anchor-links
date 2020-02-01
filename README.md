![Banner](/static/gatsby-anchor-link.svg "Banner")

# Gatsby Anchor Links

## What does this do?

This plugin adds a check `onRouteUpdate` - which looks for hashes in the current pathname. If so, it uses a scrolling library to scroll to the provided hash. In addition, it provides component(s) for use in your Gatsby code.

## Installation

Using Yarn

- `yarn add gatsby-plugin-anchor-links`

Using NPM

- `npm i gatsby-plugin-anchor-links`

### gatsby-config.js

This plugin can be used with or without a configuration object:

```
module.exports = {
    plugins: [`gatsby-plugin-anchor-links`]
}
```

```
module.exports = {
    plugins: [
        {
        resolve: 'gatsby-plugin-anchor-links',
        options: {
            offset: -100,
        },
        },
    ]
}
```

### Configuration Options

| Option |          Description | Default |   Type |
| ------ | -------------------: | ------: | -----: |
| offset | # of pixels from top |       0 | number |

## Credits

- Anchor logo by dData via [Noun Project](https://thenounproject.com/dDara)
