# react-leaflet-custom-control

A [React-Leaflet](https://github.com/PaulLeCam/react-leaflet) component that renders React elements in leaflet's control pane.

[Demo](https://skyeer.github.io/react-leaflet-custom-control/)

## installation

`yarn add @skyeer/react-leaflet-custom-control` or `npm install @skyeer/react-leaflet-custom-control`

## Options

`position`: Which pane to mount to. Options are `topleft`, `topright`, `bottomleft`, `bottomright`

`className`: Add class name to div.leaflet-control

## Usage

```js
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Map, TileLayer } from 'react-leaflet'

import Control from '@skyeer/react-leaflet-custom-control'

const DEFAULT_VIEWPORT = {
  center: [51.505, -0.09],
  zoom: 13,
}

export default class Example extends Component {
  state = {
    viewport: DEFAULT_VIEWPORT,
  }

  handleClick = () => {
    this.setState({ viewport: DEFAULT_VIEWPORT })
  }

  onViewportChanged = viewport => {
    this.setState({ viewport })
  }

  render() {
    return (
      <div>
        <h1>React-Leaflet-Custom-Control example</h1>
        <Map onViewportChanged={this.onViewportChanged} viewport={this.state.viewport}>
          <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
          <Control position="bottomright">
            <button onClick={this.handleClick}>Reset View</button>
          </Control>
        </Map>
      </div>
    )
  }
}
```

## Attribution

Based on [react-leaflet-control](https://github.com/LiveBy/react-leaflet-control).
