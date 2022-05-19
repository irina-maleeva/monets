import React, { Component } from 'react';
import './Coin.css';
import { Link } from 'react-router-dom';
import store from '../../redux/store';
import { connect } from 'react-redux';
// import { addApiCoins, addApiId } from '../..redux/action';

class Coin extends Component {

    requestId = () => {
        const id = this.props.id;
        const URL = `http://localhost:5000/coins/${id}`;
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                store.dispatch({
                    type: 'ADD_API_ID',
                    payload: {
                        IdCoin: data,
                    }
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    render() {
        const { naming, paragraph_one, obverse_side } = this.props;
        return (
            <div>
                <div>
                    <img src={obverse_side} alt="obverse" />
                </div>
                <div>
                    <Link to='/coinPage'>
                        <h4> onClick={this.requestId} {naming} </h4>
                    </Link>
                    <p>{paragraph_one}</p>
                </div>
            </div>
        )
    }

}
export default Coin;