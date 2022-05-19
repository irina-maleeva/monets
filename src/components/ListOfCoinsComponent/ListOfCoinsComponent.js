import React, { Component } from 'react';
import store from '../../redux/store';
import './ListOfCoinsComponent.css';
import Coin from '../Coin/Coin';

class ListOfCoinsComponent extends Component {

    state = {
        data: []
    }

    componentDidMount = () => {

        // fetch('http://localhost:5000/bullion')
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         this.setState({
        //             bullion: arrCoins
        //         })
        //     })

        store.subscribe(() => {
            const state = store.getState();
            state.arrCoins && this.setState({
                data: state.arrCoins
            });
        });
    }

    render() {
        const coins = this.state.data;
        console.log(coins);
        const { composition, country, quality, priceMin, priceMax, yearMin, yearMax } = this.props;
        return (
            <div>
                {coins && coins.filter((item) =>
                    (item.composition === composition ? composition : !composition)
                    && (country === '' ? true : country === item.country ? country : !country)
                    && (quality === '' ? true : quality === item.quality ? quality : !quality)
                    && (priceMin === 1 && priceMax === 2000 ?
                        true : +item.price >= priceMin && +item.price <= priceMax ?
                            priceMin || priceMax : !priceMin || !priceMax)
                    && (yearMin === 1000 && yearMax === 2100 ?
                        true : +item.issued >= yearMin && +item.issued <= yearMax ?
                            yearMin || yearMax : !yearMin || !yearMax)
                ).map((item) => (
                    <div key={item.id}>
                        <Coin {...item} />
                    </div>
                ))}
            </div>
        )
    }
}

export default ListOfCoinsComponent;