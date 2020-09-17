import React from 'react';
import './App.css';
import Header from './Header/Header';
import { Switch, Route, Redirect } from 'react-router-dom'
import Search from './SearchAndFilter/Search';
import CountryInfo from './Main/CountryInfo';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Country: [],
      loading: true,
      darkMode: false
    }
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(result => result.json())
      .then(Country => this.setState({ Country, loading: false }))
  }



  render() {


    const handleDark = () => {
      this.setState({ darkMode: !this.state.darkMode })
    }

    if (this.state.loading) {
      return "Loading....."
    }

    return (
      <div className={this.state.darkMode ? 'darkMode' : 'lightMode'}>

        <Header darkMode={this.state.darkMode} handleDark={handleDark} />

        <Switch>
          <Route exact path='/Country' render={props => <Search Country={this.state.Country} />} />
          <Route exact path='/' render={props => <Search Country={this.state.Country} />}  >
            <Redirect to='/Country' />
          </Route>
          <Route exact path='/Country/:cc?' render={props => <CountryInfo Country={this.state.Country} {...props} />} />
        </Switch>
      </div>
    )
  }

}

export default App;
