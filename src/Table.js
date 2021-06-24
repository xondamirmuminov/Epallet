import React, { useState } from 'react';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';
import TableBody from './TableBody';

const Table = () => {
    const [activeLinkName, setActiveLinkName] = useState('nutri');
    return (
        <section>
            <table>
                <tr>
                    <th>
                        <Link to="/overview" onClick={() => setActiveLinkName('overview')}
                            className={`tab__link ${activeLinkName === 'overview' ? 'active' : ''}`}>
                            Overview
                        </Link>
                    </th>
                    <th>
                        <Link to="" onClick={() => setActiveLinkName('nutri')}
                            className={`tab__link ${activeLinkName === 'nutri' ? 'active' : ''}`}>
                            Nutritionals
                        </Link>
                    </th>
                    <th>
                        <Link to="/palette" onClick={() => setActiveLinkName('palette')}
                            className={`tab__link ${activeLinkName === 'palette' ? 'active' : ''}`}>
                            Palette/Case Configuration
                        </Link>
                    </th>
                    <th>
                        <Link to="/shipping" onClick={() => setActiveLinkName('shipping')}
                            className={`tab__link ${activeLinkName === 'shipping' ? 'active' : ''}`}>
                            Shipping/Storage
                        </Link>
                    </th>
                    <th>
                        <Link to="/docs" onClick={() => setActiveLinkName('docs')}
                            className={`tab__link ${activeLinkName === 'docs' ? 'active' : ''}`}>
                            Docs & Certs
                        </Link>
                    </th>
                </tr>
            </table>
            <Switch>
                <Route exact path="/overview" component='' />
                <Route exact path="/palette" component='' />
                <Route exact path="/shipping" component='' />
                <Route exact path="/docs" component='' />
                <Route exact path="" component={TableBody} />
            </Switch>
        </section>
    )
}

export default Table;