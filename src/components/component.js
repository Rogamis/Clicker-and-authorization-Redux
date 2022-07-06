import React from 'react'
import { connect } from 'react-redux'

const Count = (props) => {
    console.log("Count Render");
  return (
    <div>
     <p>
       {props.count}
    </p> 
    </div>
  )
}

const mapStateToProps = (state) => ({
  count: state.clicker.count,
});

export default connect(mapStateToProps)(Count)
