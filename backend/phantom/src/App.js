import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Candidate from './pages/candidate/Candidate';
import Party from './pages/party/Party';
import Home from './pages/home/Home';
import HomeRank2 from './pages/rank2/HomeRank2';
import AdminList from './pages/admin/AdminList';
import AddAdmin from './pages/admin/AddAdmin';
import Table from './pages/admin/Table';
import EditAdmin from './pages/admin/EditAdmin';

function App() {
  return (
    <>
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path = "/" component={Home} />
          <Route path = "/candidate" component={Candidate} />
          <Route path = "/party" component={Party} />
          <Route path = "/rank2" component={HomeRank2} />
          <Route path = "/adminList" component={AdminList} />
          <Route path = "/addAdmin" component={AddAdmin} />
          <Route path = "/table" component={Table} />
          <Route path = "/editAdmin/:id" component={EditAdmin} />
        </Switch>
      </Router>
    </div>
    </> 
  );
}

export default App;
