import React from 'react';
import Songs from './Songs'

export default function Station (props) {
  console.log(props);
  return (
    <div>
      <h3>{props.genre} Station</h3>
      <Songs {...props}/>
    </div>
  )
}
