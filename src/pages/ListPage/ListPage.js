import React, { Component } from 'react';
import './ListPage.css';
import ListHeader from '../../components/ListHeader/ListHeader';
import SearchBox from '../../components/SearchBox/SearchBox';
import ListOfCoinsComponent from '../../components/ListOfCoinsComponent/ListOfCoinsComponent';
import store from '../../redux/store';
import { Link } from 'react-router-dom';


class ListPage extends Component {

    render() {
        return (
            <div>
                <ListHeader />
                <main>
                    <section>
                        <div>
                            <SearchBox />
                        </div>
                    </section>
                    <section>
                        <div>
                            <ListOfCoinsComponent />
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default ListPage;