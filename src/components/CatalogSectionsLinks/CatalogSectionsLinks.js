import React, { Component } from 'react';
import './CatalogSectionsLinks.css';
// import { connect } from 'react-redux';
import isk2 from '../../img/ISK_2.png';
import SouthVietnam from '../../img/South Vietnamese Dong_1.png';
import Looney from '../../img/Looney_1.png';
import { Link } from 'react-router-dom';
import { ApiRequestCoinsInfo } from '../../ConnectionToServer/ConnectionToServer';

class CatalogSectionsLinks extends Component {

    state = {
        data: []
    }

    goToBullionList = () => {
        // const address = 'bullion';
        // return ApiRequestCoinsInfo(address);
        return ApiRequestCoinsInfo('bullion');
    }

    goToExclusiveList = () => {
        return ApiRequestCoinsInfo('exclusive');
    }

    goToCommemorativeList = () => {
        return ApiRequestCoinsInfo('commemorative');
    }

    render() {
        return (
            <div className='catalogSections'>
                <div className='sectionDiv'>
                    <h2 className='sectionHead'>Bullion coins</h2>
                    <Link to='/list'>
                        <button onClick={this.goToBullionList} className='showAll'>
                            Show all &gt;
                        </button>
                    </Link>
                    <div>
                        <img src={SouthVietnam} alt="монета1"></img>
                    </div>
                </div>
                <div className='sectionDiv'>
                    <h2 className='sectionHead'>Exclusive coins</h2>
                    <Link to='/list'>
                        <button onClick={this.goToExclusiveList} className='showAll'>
                            Show all &gt;
                        </button>
                    </Link>
                    <div>
                        <img src={isk2} alt="монета2"></img>
                    </div>
                </div>
                <div className='sectionDiv'>
                    <h2 className='sectionHead'>Commemorative coins</h2>
                    <Link to='/list'>
                        <button onClick={this.goToCommemorativeList} className='showAll'>
                            Show all &gt;
                        </button>
                    </Link>
                    <div>
                        <img src={Looney} alt="монета3"></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default CatalogSectionsLinks;