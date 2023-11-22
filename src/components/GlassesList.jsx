import React, { Component } from 'react'

export default class GlassesList extends Component {
    renderGlassesItem = () => {
        let {arrGlasses} = this.props;
        return arrGlasses.map((item,index)=>{
            return <div className='col-md-2 mt-2 mx-3' key={item.id} >
            <button>
                <img src= {item.url} alt="" height={100} width={200}/>
            </button>
            </div>
        })
    }

  render() {

    return (
      <div className='container mt-5 row'>
        {this.renderGlassesItem()}
        
      </div>
    )
  }
}
