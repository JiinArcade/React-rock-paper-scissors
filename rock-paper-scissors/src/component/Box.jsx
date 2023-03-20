import React from 'react'

const Box = (props) => {
  return (
    <div className='Box'>
      <h1>{props.title}</h1>
      <h2>Rock</h2>
      <img src="http://health.chosun.com/site/data/img_dir/2019/12/10/2019121001214_0.jpg" alt="" />
      <h2>Win</h2>
    </div>
  )
}

export default Box