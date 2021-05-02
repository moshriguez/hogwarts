import React from 'react'

class Sort extends React.Component {

    render() {
        return (
            <div className="">
            <label className="ui label" >Sort By:</label>
            <select className="ui selection dropdown" onChange={(e)=>{this.props.setSort(e.target.value)}}>
                <option value="none" >no sorting</option>
                <option value="name" >Name</option>
                <option value="weight" >Weight</option>
            </select>
            </div>
        )
    }
}

export default Sort