import React from 'react'
import PigTile from './PigTile'

class PigIndex extends React.Component {
    

    renderDetails = () => {
        return this.props.hogs.map(hog => {return <PigTile hog={hog}/>})
    }

    render() {
        console.log(this.props.hogs)
        return <div>{this.renderDetails()}</div>
    }
}   

export default PigIndex