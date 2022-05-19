import React, { Component } from 'react';
import './SearchBox.css';
import { Link } from 'react-router-dom'
import store from '../../redux/store';
// import { connect } from 'react-redux';
// import { getSearchResults } from "../../redux/actions.js";
// import { API_KEY } from "../../config";

class SearchBox extends Component {

    state = {
        AdvancedFiltersVisible: false,
        quality: "",
        country: "",
        composition: "",
        yearMin: 1000,
        yearMax: 2023,
        priceMin: 1,
        priceMax: 2000,
        searchLine: ''
    }

    searchInputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
    };

    searchByInput = (e) => {
        e.preventDefault();
        let input = this.state.searchLine;
        let URL = `http://localhost:5000/coin/${input}`;
        // input === '' ? URL = 'http://localhost:5000/coins' : URL = `http://localhost:5000/coin/${input}`;
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                store.dispatch({
                    type: 'ADD_API_COINS',
                    payload: {
                        arrCoins: data,
                    }
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    expandFiltersHandler = () => {
        this.state.AdvancedFiltersVisible === false ?
            this.setState({
                AdvancedFiltersVisible: true
            })
            :
            this.setState({
                AdvancedFiltersVisible: false
            })
    }

    render() {
        const filter = this.state.AdvancedFiltersVisible;
        return (
            <>

                <form className="search-box__form">
                    <label className="search-box__form-label">
                        <h4>Input field</h4>
                        <input
                            value={this.state.searchLine}
                            type="text"
                            className="search-box__form-input"
                            onChange={this.searchLineChangeHandler}
                        />
                    </label>
                    <Link to='/list'>
                        <button onClick={this.searchByInput}
                            type="submit"
                            className="search-box__form-submit"
                        // disabled={!this.state.searchLine}
                        >
                            Search
                        </button>
                    </Link>
                    <div>
                        <button className="advanced" onClick={this.expandFiltersHandler}>Advanced filter v </button>
                    </div>

                    {filter === false ?
                        <div></div>
                        :
                        <div className='hiddenSection'>
                            <div className='left'>
                                <h5>Issuing country</h5>
                                <select
                                    className="search-box__form-input">
                                    <option value='any'>any country</option>
                                    <option value='Australia'>Australia</option>
                                    <option value='Bolivia'>Bolivia</option>
                                    <option value='Botswana'>Botswana</option>
                                    <option value='British South Africa'>British South Africa</option>
                                    <option value='British Virgin Islands'>British Virgin Islands</option>
                                    <option value='CANADA'>CANADA</option>
                                    <option value='China'>China</option>
                                    <option value='Costa Rica'>Costa Rica</option>
                                    <option value='Egypt'>Egypt</option>
                                    <option value='Estonia'>Estonia</option>
                                    <option value='France'>France</option>
                                    <option value='Ghana'>Ghana</option>
                                    <option value='Iceland'>Iceland</option>
                                    <option value='India'>India</option>
                                    <option value='Iran'>Iran</option>
                                    <option value='Portugal'>Portugal</option>
                                    <option value='the Belgian Congo'>the Belgian Congo</option>
                                    <option value='the Republic of Vietnam'>the Republic of Vietnam</option>
                                    <option value='the Weimar Republic'>the Weimar Republic</option>
                                    <option value='UNITED STATES OF AMERICA'>UNITED STATES OF AMERICA</option>
                                    <option value='Yemen'>Yemen</option>
                                </select>

                                <div>
                                    <h5>Metal</h5>
                                    <select
                                        // defaultValue={this.state.metal}
                                        // type="text"
                                        className="search-box__form-input"
                                    // onChange={this.metalChangeHandler}
                                    >
                                        <option value='any'>any composition</option>
                                        <option value='nickel'>nickel</option>
                                        <option value='gold'>gold</option>
                                        <option value='Steel'>Steel</option>
                                        <option value='silver'>silver</option>
                                    </select>
                                </div>

                                <div>
                                    <h5>Quality of the coin</h5>
                                    <select
                                        // defaultValue={this.state.quality}
                                        type="text"
                                        className="search-box__form-input"
                                    // onChange={this.qualityChangeHandler}
                                    >
                                        <option value='any'>any</option>
                                        <option value='BU'>BU</option>
                                    </select>
                                </div >
                            </div>
                            <div className='right'>
                                <label className="search-box__form-label">
                                    <h5>Price</h5>
                                    from
                                    <input
                                        defaultValue={this.state.priceMin}
                                        type="number"
                                        name='priceMin'
                                        className="search-box__form-input small"
                                        onChange={this.searchInputHandler}
                                    />
                                    to
                                    <input
                                        defaultValue={this.state.priceMax}
                                        type="number"
                                        name='priceMax'
                                        className="search-box__form-input small"
                                        onChange={this.searchInputHandler}
                                    />
                                </label>
                                <label className="search-box__form-label">
                                    <h5>Year of issue</h5>
                                    from
                                    <input
                                        defaultValue={this.state.yearMin}
                                        type="number"
                                        name='yearMax'
                                        className="search-box__form-input small"
                                        onChange={this.searchInputHandler}
                                    />
                                    to
                                    <input
                                        defaultValue={this.state.yearMax}
                                        type="number"
                                        name='yearMax'
                                        className="search-box__form-input small"
                                        onChange={this.searchInputHandler}
                                    />
                                </label>
                            </div>
                        </div>
                    }
                </form >
            </ >
        );
    }
}

export default SearchBox;