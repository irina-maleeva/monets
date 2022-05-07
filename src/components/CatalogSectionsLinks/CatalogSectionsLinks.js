import React, { Component } from 'react';
import './CatalogSectionsLinks.css';
import { connect } from 'react-redux';

class CatalogSectionsLinks extends Component {
    render() {
        return (
            <div class='CatalogSections'>
                <div>
                    <h4>
                        Bullion coins
                    </h4>
                    <button>
                        Show all
                    </button>
                    <div>
                        <img scr="../img/South Vietnamese Dong_1.png"></img>
                    </div>
                </div>
                <div>
                    <h4>
                        Exclusive coins
                    </h4>
                    <button>
                        Show all
                    </button>
                    <div>
                        <img scr="../img/ISK_2.png"></img>
                    </div>
                </div>
                <div>
                    <h4>
                        Commemorative coins
                    </h4>
                    <button>
                        Show all
                    </button>
                    <div>
                        <img scr="../img/Looney_1.png"></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default CatalogSectionsLinks;