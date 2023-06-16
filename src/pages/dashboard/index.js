import React from 'react'
import ResponsiveDrawer from '../../components/Sidebar'
import { connect } from "react-redux";

function HomePage() {
  return (
    <div>
        <ResponsiveDrawer />
        Hello dashboard page
    </div>
  )
}

const mapStateToProps = ({ ExampleReducer }) => ({
    data: ExampleReducer.data
  });
  
  export default connect(mapStateToProps)(HomePage);
  
  