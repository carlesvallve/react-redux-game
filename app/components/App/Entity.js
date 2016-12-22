import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateEntity } from '../../actions'


export class Entity extends Component {
  constructor(props) {
    super(props)

    this.debugInfo = true;
  }


  render() {
    const { x, y, width, height } = this.props
    const className = 'entity-inner'

    return (
      <div className='entity'
        style={{
          width: width + '%',
          height: height + '%',
          left: (x * width * 1) + '%',
          top: (y * height * 0.9925) + '%'
        }}
        x={x}
        y={y}
      >
        <div className={className}>
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
