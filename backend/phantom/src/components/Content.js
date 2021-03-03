import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react'

import EditAdmin from '../pages/admin/EditAdmin';
import Home from '../pages/home/Home';
import HomeRank2 from '../pages/rank2/HomeRank2';
import AdminList from '../pages/admin/AdminList';
import HomePolling from '../pages/homePolling/HomePolling';
import AddPerson from '../pages/person/AddPerson';
import AddParty from '../pages/party/AddParty';
import AddCandidate from '../pages/candidate/AddCandidate';

export default class Content extends Component {
    render() {
        return (
            <div style={{ top:'60px', position:'relative', paddingBottom:'60px'}}>
                <Router>
                    <Switch>
                    <Route exact path = "/" component={Home} />

                    <Route path = "/adminList" component={AdminList} />

                    <Route path = "/homeRank2" component={HomeRank2} />
                    <Route path = "/homePolling" component={HomePolling} />
                    <Route path= "/addPerson" component={AddPerson}/>
                    <Route path= "/addParty" component={AddParty}/>
                    <Route path = "/addCandidate" component={AddCandidate} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
