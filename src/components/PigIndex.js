import React from 'react'
import PigTile from './PigTile'

class PigIndex extends React.Component {
    
    sort= (unsortedArray) => {
        let unsortedHogs = [...unsortedArray]
        if (this.props.sort === 'name') {
            return unsortedHogs.sort(function(a, b) {
                if (a.name < b.name) {
                    return -1
                }
                if (a.name > b.name) {
                    return 1
                }
                return 0
            })
        } else if (this.props.sort === 'weight') {
            return unsortedHogs.sort(function(a, b) {return a.weight - b.weight})
        } else {
            return unsortedHogs
        }
    }
    
    filter = (unfilteredArray) => {
        if (this.props.filter === 'greased') {return unfilteredArray.filter(hog => hog.greased)}
        else if (this.props.filter === 'ungreased') {return unfilteredArray.filter(hog => !hog.greased)}
        else {return unfilteredArray}
    }

    renderDetails = (hogArray) => {
        let filteredAndSortedHogs = this.filter(this.sort(hogArray))
        
        return filteredAndSortedHogs.map(hog => {return <PigTile hog={hog}/>})
    }

    render() {
        console.log(this.props.hogs)
        return <div className='indexWrapper'>{this.renderDetails(this.props.hogs)}</div>
    }
}   

export default PigIndex