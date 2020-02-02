![Banner](https://i.imgur.com/H572MIB.jpg "Banner")

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

## Component usage

You can provide anchor or non-anchor links to this component for ease of use. If you use it as an anchor component, be sure to include both a base path and hash in the `to` string.

```
import { AnchorLink } from 'gatsby-plugin-anchor-links';

export default () => (
    <AnchorLink to='/about#team' title="Our team" >
        <span>Check out our team!</span>
    </AnchorLink>
)

export default () => (
    <AnchorLink to='/about#team' title="Check out our team!" />
)

export default () => (
    <AnchorLink to='/about' title="About us" />
)

```

### AnchorLink props

| Option   |                             Description |       Type | Required |
| -------- | --------------------------------------: | ---------: | -------: |
| to       |    path with hash to your page & anchor |     string |     true |
| title    | accessible title & fallback anchor text |     string |    false |
| children |  react node to be wrapped by AnchorLink | react node |    false |

## Sites using Gatsby Anchor Links

- [chaseohlson.com](https://chaseohlson.com/) // [source](https://github.com/brohlson/chaseohlson)

## Credits

- Anchor logo by dData via [Noun Project](https://thenounproject.com/dDara)
