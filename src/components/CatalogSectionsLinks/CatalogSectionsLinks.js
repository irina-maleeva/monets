import React, { Component } from 'react';
import './CatalogSectionsLinks.css';
import { connect } from 'react-redux';

class CatalogSectionsLinks extends Component {
    render() {
        return (
            <div className='CatalogSections'>
                <div>
                    <h4>
                        Bullion coins
                    </h4>
                    <button>
                        Show all
                    </button>
                    <div>
                        <img src="images/jpeg"></img>
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
                        <img scr="images/jpeg"></img>
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
                        <img src="images/jpeg"></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default CatalogSectionsLinks;