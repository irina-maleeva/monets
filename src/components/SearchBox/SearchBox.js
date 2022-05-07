import React, { Component } from 'react';
import './SearchBox.css';
import { connect } from 'react-redux';
// import { getSearchResults } from "../../redux/actions.js";
// import { API_KEY } from "../../config";

class SearchBox extends Component {

    state = {
        searchLine: ''
    }

    // searchLineChangeHandler = (e) => {
    //     this.setState({ searchLine: e.target.value });
    // }

    // searchBoxSubmitHandler = (e) => {
    //     e.preventDefault();
    //     fetch(`http://www.omdbapi.com/?s=${this.state.searchLine}&apikey=${API_KEY}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         if (!data.Response || data.Response === 'False') return alert('Error');
    //         this.props.getSearchResults(data.Search);
    //         })
    //         .catch((e) => {
    //             console.log("error: ", e);
    //         })
    // }

    // expandFiltersHandler = (e)

    render() {
        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Input field
                        <input
                            value={this.state.searchLine}
                            type="text"
                            className="search-box__form-input"
                            onChange={this.searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!this.state.searchLine}>
                        Search
                    </button>
                    <div class="advanced">
                        <button onClick={this.expandFiltersHandler}>Advanced filter v </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBox;