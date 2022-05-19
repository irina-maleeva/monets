import React, { Component } from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import CatalogSectionsLinks from '../../components/CatalogSectionsLinks/CatalogSectionsLinks';

class MainPage extends Component {

    render() {
        return (
            <div>
                <Header />
                <main>
                    <section>
                        <div>
                            <SearchBox />
                        </div>
                    </section>
                    <section>
                        <div>
                            <CatalogSectionsLinks />
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default MainPage;