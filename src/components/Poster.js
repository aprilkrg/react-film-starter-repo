import { Component } from "react";

export default class Poster extends Component {
    render() {
        const posterUrl = "https://image.tmdb.org/t/p/w780/" + this.props.poster
        return (
            <>
                <img 
                    src={posterUrl} 
                    alt={"poster for " + this.props.filmName}
                />
            </>
        )
    }
}