import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateEntity } from '../../actions'


export class Entity extends Component {
  constructor(props) {
    super(props)

    this.debugInfo = true;

    this.style={
      width: props.width + '%',
      height: props.height + '%',
    }
  }

  moveTo(x, y) {
    const px = (x * this.props.width) * this.props.grid.width
    const py = (y * this.props.height) * this.props.grid.height

    this.style = Object.assign({}, this.style, {
      transform: 'translate3d(' + px + '%, ' + py + '%, 0)',
      transition: 'transform .2s ease-in-out'
    })
  }


  render() {
    const { x, y } = this.props
    this.moveTo(x, y)

    return (
      <div className='entity'
        style={this.style}
        x={x} y={y}
      >
        <div className='entity-inner'>
          <div
            className='entity-info'
            style={{visibility : this.debugInfo ? 'visible' : 'hidden'}}>
            {x + ',' + y}
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state, ownProps) {
  return state.grid.entities[ownProps.id]
}

export default connect(mapStateToProps, { updateEntity })(Entity);
