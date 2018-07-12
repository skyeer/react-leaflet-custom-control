import { Children } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { MapControl, withLeaflet } from 'react-leaflet'
import PropTypes from 'prop-types'
import DivControl from './DivControl'

class Control extends MapControl {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    position: PropTypes.string,
  }

  createLeafletElement({ position, className }) {
    this.leafletElement = new DivControl({ position, className })
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
