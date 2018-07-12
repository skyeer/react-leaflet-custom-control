import React, { Component } from 'react'
import { render } from 'react-dom'
import { Map, TileLayer } from 'react-leaflet'

import Control from '../src'

const DEFAULT_VIEWPORT = {
  center: [51.505, -0.09],
  zoom: 13,
}

class App extends Component {
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
          <Control className="reset-view-control" position="topleft">
            <button onClick={this.handleClick}>Reset View TL</button>
          </Control>
          <Control className="reset-view-control" position="topright">
            <button onClick={this.handleClick}>Reset View TR</button>
          </Control>
          <Control className="reset-view-control" position="bottomleft">
            <button onClick={this.handleClick}>Reset View BL</button>
          </Control>
          <Control className="reset-view-control" position="bottomright">
            <button onClick={this.handleClick}>Reset View BR</button>
          </Control>
        </Map>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
