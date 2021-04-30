import React from 'react'

class Filter extends React.Component {
    render() {
        return (
        <form onChange={()=>{}}>
            <label>Greased<input type="radio" name="greased" value="greased" className="radiobox" /></label>
            <label>Ungreased<input type="radio" name="greased" value="ungreased" className="radiobox" /></label>
            <label>All<input type="radio" name="greased" value="all" className="radiobox" /></label>
        </form>)
    }
}

export default Filter