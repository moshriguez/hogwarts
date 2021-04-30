import React from 'react'

class PigTile extends React.Component {
    state = {
        pizza: true
    }
    
    handleClick = () => {
        this.setState({
            pizza: !this.state.pizza}
    )
    }

    renderDetails = () => {
        const { name, specialty, weight, ['highest medal achieved']: medal } = this.props.hog
        return (<div>
            <h3>{name}</h3>
            <p>{specialty}</p>
            <p>{weight}</p>
            <p>{medal}</p>
            </div>)
    }

    renderImage = () => {
        const { name, specialty, weight, ['highest medal achieved']: medal } = this.props.hog
        const imgMapper = {
                [name]: require(`../hog-imgs/${name.toLowerCase().split(' ').join('_')}.jpg`)
            }
        return (<div>
            <h3>{name}</h3>
            <img className="minPigTile" src={imgMapper[name]} />
            </div>)
    }

    render() {
        return (
            <div className='pigTile' onClick={()=>{this.handleClick()}} >
                
                {this.state.pizza ? this.renderImage() : this.renderDetails()}
                
            </div>
        )
    }
}

export default PigTile