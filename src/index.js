import { Children } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { MapControl, withLeaflet } from 'react-leaflet'
import PropTypes from 'prop-types'
import DivControl from './DivControl'

class Control extends MapControl {
  static propTypes = {
    children: PropTypes.node,
    position: PropTypes.string,
  }

  createLeafletElement({ position }) {
    this.leafletElement = new DivControl(position)
    return this.leafletElement
  }

  updateLeafletElement(fromProps, toProps) {
    super.updateLeafletElement(fromProps, toProps)
    this.renderContent()
  }

  componentDidMount() {
    super.componentDidMount()
    this.renderContent()
  }

  componentWillUnmount() {
    unmountComponentAtNode(this.leafletElement.getContainer())
    super.componentWillUnmount()
  }

  renderContent() {
    const container = this.leafletElement.getContainer()
    render(Children.only(this.props.children), container)
  }
}

export default withLeaflet(Control)
