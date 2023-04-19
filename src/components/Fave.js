import { Component } from "react";

export default class Fave extends Component {
    state = {
        isFave: false
    }

    handleClick = (e) => {
        e.stopPropagation()
        console.log("handling fave click!")
        this.setState({isFave: !this.state.isFave})
    }

    render() {
        return (
            <>
                <div 
                    className={`film-row-fave ${this.state.isFave === true ?"remove_from_queue" : "add_to_queue"}`}
                    onClick={this.handleClick}
                >
                    <p className="material-icons">{`${this.state.isFave === true ?"remove_from_queue" : "add_to_queue"}`}</p>
                </div>
            </>
        )
    }
}