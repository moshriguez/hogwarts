import React from 'react'

class Filter extends React.Component {
    render() {
        return (
        <form className="filterWrapper" onChange={(e)=>{this.props.setFilter(e.target.value)}}>
            <label className="ui label" >Greased<input 
            type="radio" 
            name="greased" 
            value="greased" 
            // {[this.props.filter === this.value] ? 'checked' : null}
            className="ui radio checkbox" /></label>
            <label className="ui label" >Ungreased<input 
            type="radio" 
            name="greased" 
            value="ungreased" 
            className="ui radio checkbox" /></label>
            <label className="ui label" >All<input 
            type="radio" 
            name="greased" 
            value="all" 
            className="ui radio checkbox" /></label>
        </form>)
    }
}

export default Filter