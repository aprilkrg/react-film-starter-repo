import { Component } from 'react'

export default class FilmList extends Component {
    render() {
        return (
            <>
                <div className="film-list">
                    <h1 className="section-title">FILMS</h1>
                    <h2>{this.props.films[0].title}</h2>
                </div>
            </>
        )
    }
}