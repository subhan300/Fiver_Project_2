import React from 'react'
import './Section.css'

import visa from './IMAGES/visa.png'
import master from './IMAGES/master.jpg'
import america from './IMAGES/america.png'
import RemoveFromQueueIcon from '@material-ui/icons/RemoveFromQueue';

function Section() {
    return (
        <div className="section">
            <div className="form">
                <div className="row">
                    <span> <label>database:</label><br />
                        <input className="w200" type="list" placeholder="All" />
                    </span>

                    <span> <label>bin:</label><br />
                        <input className="w200" type="list" placeholder="All" />
                    </span>

                    <span> <label>country:</label><br />
                        <input className="w150" type="list" placeholder="All" />
                    </span>

                    <span> <label>state:</label><br />
                        <input className="w150" type="list" placeholder="All" />
                    </span>

                    <span> <label>zip:</label><br />
                        <input className="w150" type="list" placeholder="All" />
                    </span>
                </div>

                <div className="row">
                    <span> <label>type:</label><br />
                        <input className="w150" type="list" placeholder="All" />
                    </span>

                    <span> <label>code:</label><br />
                        <input className="w150" type="list" placeholder="All" />
                    </span>

                    <span> <label>level:</label><br />
                        <input className="w150" type="list" placeholder="All" />
                    </span>

                    <span> <label>class:</label><br />
                        <input className="w150" type="list" placeholder="All" />
                    </span>

                    <span> <label>bank:</label><br />
                        <input className="w298" type="list" placeholder="All" />
                    </span>
                </div>

                <div className="row">
                    <span> <label>last 4:</label><br />
                        <input className="w150" type="list" placeholder="All" />
                    </span>

                    <span> <label>track 1:</label><br />
                        <input className="w150" type="list" placeholder="All" />
                    </span>

                    <span> <label>vendor:</label><br />
                        <input className="w150" type="list" placeholder="All" />
                    </span>

                    <span> <label>per page:</label><br />
                        <input className="w150" type="list" placeholder="All" />
                    </span>

                    <span> <label>price:</label><br />
                        <input className="w200" type="list" placeholder="All" />
                    </span>
                </div>

            </div>

            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th><ul><li></li></ul></th>
                            <th>type</th>
                            <th>bin</th>
                            <th>level</th>
                            <th>class</th>
                            <th>code</th>
                            <th>exp</th>
                            <th>tr 1</th>
                            <th>database</th>
                            <th>country</th>
                            <th>state</th>
                            <th>zip</th>
                            <th>bank</th>
                            <th>vendor</th>
                            <th>price</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><ul><li></li></ul></td>
                            <td><img src={visa} className="visa__img"/></td>
                            <td>414734</td>
                            <td>signature</td>
                            <td>credit</td>
                            <td>201</td>
                            <td>11/23</td>
                            <td><RemoveFromQueueIcon/></td>
                            <td>(26-03-2021) world-mix #2<br/><span>no refund</span></td>
                            <td><img src={america} className="visa__img" /></td>
                            <td>-</td>
                            <td>-</td>
                            <td>bank of america na</td>
                            <td><span className="green">Easy</span><span className="gray">dump</span><br/>platinum</td>
                            <td>$9.46</td>
                            <td><button>buy</button></td>
                        </tr>

                        <tr>
                            <td><ul><li></li></ul></td>
                            <td><img src={visa} className="visa__img"/></td>
                            <td>414734</td>
                            <td>signature</td>
                            <td>credit</td>
                            <td>201</td>
                            <td>11/23</td>
                            <td><RemoveFromQueueIcon/></td>
                            <td>(26-03-2021) world-mix #2<br/><span>no refund</span></td>
                            <td><img src={america} className="visa__img" /></td>
                            <td>-</td>
                            <td>-</td>
                            <td>bank of america na</td>
                            <td><span className="green">Easy</span><span className="gray">dump</span><br/>platinum</td>
                            <td>$9.46</td>
                            <td><button>buy</button></td>
                        </tr>

                        <tr>
                            <td><ul><li></li></ul></td>
                            <td><img src={visa} className="visa__img"/></td>
                            <td>414734</td>
                            <td>signature</td>
                            <td>credit</td>
                            <td>201</td>
                            <td>11/23</td>
                            <td><RemoveFromQueueIcon/></td>
                            <td>(26-03-2021) world-mix #2<br/><span>no refund</span></td>
                            <td><img src={america} className="visa__img" /></td>
                            <td>-</td>
                            <td>-</td>
                            <td>bank of america na</td>
                            <td><span className="green">Easy</span><span className="gray">dump</span><br/>platinum</td>
                            <td>$9.46</td>
                            <td><button>buy</button></td>
                        </tr>

                        <tr>
                            <td><ul><li></li></ul></td>
                            <td><img src={visa} className="visa__img"/></td>
                            <td>414734</td>
                            <td>signature</td>
                            <td>credit</td>
                            <td>201</td>
                            <td>11/23</td>
                            <td><RemoveFromQueueIcon/></td>
                            <td>(26-03-2021) world-mix #2<br/><span>no refund</span></td>
                            <td><img src={america} className="visa__img" /></td>
                            <td>-</td>
                            <td>-</td>
                            <td>bank of america na</td>
                            <td><span className="green">Easy</span><span className="gray">dump</span><br/>platinum</td>
                            <td>$9.46</td>
                            <td><button>buy</button></td>
                        </tr>

                        <tr>
                            <td><ul><li></li></ul></td>
                            <td><img src={visa} className="visa__img"/></td>
                            <td>414734</td>
                            <td>signature</td>
                            <td>credit</td>
                            <td>201</td>
                            <td>11/23</td>
                            <td><RemoveFromQueueIcon/></td>
                            <td>(26-03-2021) world-mix #2<br/><span>no refund</span></td>
                            <td><img src={america} className="visa__img" /></td>
                            <td>-</td>
                            <td>-</td>
                            <td>bank of america na</td>
                            <td><span className="green">Easy</span><span className="gray">dump</span><br/>platinum</td>
                            <td>$9.46</td>
                            <td><button>buy</button></td>
                        </tr>

                        <tr>
                            <td><ul><li></li></ul></td>
                            <td><img src={visa} className="visa__img"/></td>
                            <td>414734</td>
                            <td>signature</td>
                            <td>credit</td>
                            <td>201</td>
                            <td>11/23</td>
                            <td><RemoveFromQueueIcon/></td>
                            <td>(26-03-2021) world-mix #2<br/><span>no refund</span></td>
                            <td><img src={america} className="visa__img" /></td>
                            <td>-</td>
                            <td>-</td>
                            <td>bank of america na</td>
                            <td><span className="green">Easy</span><span className="gray">dump</span><br/>platinum</td>
                            <td>$9.46</td>
                            <td><button>buy</button></td>
                        </tr>

                        <tr>
                            <td><ul><li></li></ul></td>
                            <td><img src={visa} className="visa__img"/></td>
                            <td>414734</td>
                            <td>signature</td>
                            <td>credit</td>
                            <td>201</td>
                            <td>11/23</td>
                            <td><RemoveFromQueueIcon/></td>
                            <td>(26-03-2021) world-mix #2<br/><span>no refund</span></td>
                            <td><img src={america} className="visa__img" /></td>
                            <td>-</td>
                            <td>-</td>
                            <td>bank of america na</td>
                            <td><span className="green">Easy</span><span className="gray">dump</span><br/>platinum</td>
                            <td>$9.46</td>
                            <td><button>buy</button></td>
                        </tr>

                        <tr>
                            <td><ul><li></li></ul></td>
                            <td><img src={visa} className="visa__img"/></td>
                            <td>414734</td>
                            <td>signature</td>
                            <td>credit</td>
                            <td>201</td>
                            <td>11/23</td>
                            <td><RemoveFromQueueIcon/></td>
                            <td>(26-03-2021) world-mix #2<br/><span>no refund</span></td>
                            <td><img src={america} className="visa__img" /></td>
                            <td>-</td>
                            <td>-</td>
                            <td>bank of america na</td>
                            <td><span className="green">Easy</span><span className="gray">dump</span><br/>platinum</td>
                            <td>$9.46</td>
                            <td><button>buy</button></td>
                        </tr>

                        <tr>
                            <td><ul><li></li></ul></td>
                            <td><img src={visa} className="visa__img"/></td>
                            <td>414734</td>
                            <td>signature</td>
                            <td>credit</td>
                            <td>201</td>
                            <td>11/23</td>
                            <td><RemoveFromQueueIcon/></td>
                            <td>(26-03-2021) world-mix #2<br/><span>no refund</span></td>
                            <td><img src={america} className="visa__img" /></td>
                            <td>-</td>
                            <td>-</td>
                            <td>bank of america na</td>
                            <td><span className="green">Easy</span><span className="gray">dump</span><br/>platinum</td>
                            <td>$9.46</td>
                            <td><button>buy</button></td>
                        </tr>

                        <tr>
                            <td><ul><li></li></ul></td>
                            <td><img src={visa} className="visa__img" /></td>
                            <td>414734</td>
                            <td>signature</td>
                            <td>credit</td>
                            <td>201</td>
                            <td>11/23</td>
                            <td><RemoveFromQueueIcon/></td>
                            <td>(26-03-2021) world-mix #2<br/><span>no refund</span></td>
                            <td><img src={america} className="visa__img" /></td>
                            <td>-</td>
                            <td>-</td>
                            <td>bank of america na</td>
                            <td><span className="green">Easy</span><span className="grey">dump</span><br/>platinum</td>
                            <td>$9.46</td>
                            <td><button>buy</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Section
