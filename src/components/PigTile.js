import React from 'react'

class PigTile extends React.Component {
    state = {
        sideOne: true,
        visable: true
    }
    
    handleClick = () => {
        this.setState({
            sideOne: !this.state.sideOne}
    )
    }

    hide = () => {
        this.setState({
            visable: !this.state.visable}
        )
    }
    
    renderDetails = () => {
        const { name, specialty, weight, 'highest medal achieved': medal } = this.props.hog
        return (
        <div className="ui card" >
            <header>
                <h3>{name}</h3>
                <button>x</button>
            </header>
            <p>Specialty: {specialty}</p>
            <p>Weight: {weight}</p>
            <p>Medals: {medal}</p>
        </div>
        )
    }

    renderImage = () => {
        const { name } = this.props.hog
        const imgMapper = {
                [name]: require(`../hog-imgs/${name.toLowerCase().split(' ').join('_')}.jpg`)
            }
        return (
        <div className="ui card" >
            <header>
                <h3>{name}</h3>
                <button onClick={this.hide}>x</button>
            </header>
            <img src={imgMapper[name]} alt={name}/>
        </div>
        )
    }

    render() {
        return (
            <div className="ui cards" onClick={()=>{this.handleClick()}} 
            // style={this.state.visable ? display: "block" : display: "none"}
            >
                
                {this.state.sideOne ? this.renderImage() : this.renderDetails()}
                
            </div>
        )
    }
}

export default PigTile