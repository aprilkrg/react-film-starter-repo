import { Component } from 'react'

export default class FilmRow extends Component {
    render() {
        return (
            <>
                <div className="film-row">
                    <h1>{this.props.film.title}</h1>
                </div>
            </>
        )
    }
}