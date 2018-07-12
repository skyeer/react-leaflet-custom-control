import { Control, DomUtil, DomEvent } from 'leaflet'

const DivControl = Control.extend({
  options: {
    className: '',
  },
  onAdd: function() {
    const container = DomUtil.create('div', this.options.className)
    DomEvent.disableClickPropagation(container)
    return container
  },
})

export default DivControl
