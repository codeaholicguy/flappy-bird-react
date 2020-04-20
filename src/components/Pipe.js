import React from 'react'
import {connect} from 'react-redux'

import TopPipeImage from '../images/pipe-top.png'
import BottomPipeImage from '../images/pipe-bottom.png'

const Pipe = ({x, pipes}) => {
  return (
    <div
      style={{
        position: 'relative',
      }}>
      {pipes.map(({topHeight}, i) => (
        <div
          key={`pipe-${i}`}
          style={{
            position: 'relative',
          }}>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: x + i * 200,
              width: 52,
              height: topHeight,
              background: `url(${TopPipeImage})`,
              backgroundPosition: 'bottom',
              transition: 'left 300ms',
            }}></div>
          <div
            style={{
              position: 'absolute',
              top: topHeight + 100,
              left: x + i * 200,
              width: 52,
              height: 512 - topHeight - 100,
              background: `url(${BottomPipeImage})`,
              transition: 'left 300ms',
            }}></div>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = ({pipe}) => ({x: pipe.x, pipes: pipe.pipes})
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Pipe)
