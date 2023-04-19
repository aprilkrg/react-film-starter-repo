import { Component } from 'react'

export default class FilmRow extends Component {
    render() {
        const posterUrl = "https://image.tmdb.org/t/p/w780/" + this.props.film.poster_path
        return (
            <>
                <div className="film-row">
                    <img src={posterUrl} alt="" />
                    <div className="film-summary">
                        <h1>{this.props.film.title}</h1>
                        <p>{this.props.film.release_date.split("-")[0]}</p>
                    </div>
                </div>
            </>
        )
    }
}