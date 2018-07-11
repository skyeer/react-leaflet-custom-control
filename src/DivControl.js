import { Control, DomUtil, DomEvent } from 'leaflet'

const DivControl = Control.extend({
  onAdd: function() {
    const container = DomUtil.create('div')
    DomEvent.disableClickPropagation(container)
    return container
  },
})

export default DivControl
