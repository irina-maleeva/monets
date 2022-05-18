import React, { Component } from 'react';
import './CoinPage.css';
import store from '../../redux/store';
import { Link } from 'react-router-dom';

class CoinPage extends Component {

    state = {
        data: []
    }

    componentDidMount = () => {

        store.subscribe(() => {
            const state = store.getState();
            state.idCoin &&
                this.setState({
                    data: state.idCoin[0]
                });
        });
    }

    render() {
        const coin = this.state.data;
        return (
            <>
                {coin.map((item) => {
                    <div>
                        <div className="coin" key={item.id}>
                            <div>
                                <img scr={item.obverse_side} alt='obverse' />
                            </div>
                            <div>
                                <img scr={item.reverse_side} alt='reverse' />
                            </div>
                        </div>
                        <div className='grey-block'>
                            <h1>{item.naming}</h1>
                            <p>{item.paragraph_one}</p>
                            <p>{item.paragraph_two}</p>
                            <p>{item.paragraph_three}</p>
                            <p>{item.paragraph_four}</p>
                            <p>{item.paragraph_five}</p>
                            <p>{item.paragraph_six}</p>
                            <p>{item.paragraph_seven}</p>
                            <p>{item.paragraph_eight}</p>
                            <p>{item.paragraph_nine}</p>
                            <p>{item.paragraph_ten}</p>
                            <table>
                                <tr className='white_row'>
                                    <td>Issuing Country</td>
                                    <td>{item.country}</td>
                                </tr>
                                <tr>
                                    <td>Composition</td>
                                    <td>{item.composition}</td>
                                </tr>
                                <tr className='white_row'>
                                    <td>Quality</td>
                                    <td>{item.quality}</td>
                                </tr>
                                <tr>
                                    <td>Denomination</td>
                                    <td>{item.denomination}</td>
                                </tr>
                                <tr className='white_row'>
                                    <td>Year</td>
                                    <td>{item.issued}</td>
                                </tr>
                                <tr>
                                    <td>Weight</td>
                                    <td>{item.weight} g</td>
                                </tr>
                                <tr className='white_row'>
                                    <td>Price</td>
                                    <td>{item.price}$</td>
                                </tr>
                            </table>
                            <Link to={'/list'}>Back to the list</Link>
                        </div>
                    </div>
                })}
            </>
        );
    }
}
export default CoinPage;