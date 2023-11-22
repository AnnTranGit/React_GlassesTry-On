import React, { Component } from 'react'

export default class Models extends Component {
  render() {
    return (
      <div className='w-25'>
        <div className="card">
            <img src="./glassesImage/model.jpg" alt="" />
            <img src="./glassesImage/v1.png" alt="..." />
            <div className="card-body">
                <h3>name</h3>
                <p>des</p>
            </div>
        </div>
      </div>
    )
  }
}
