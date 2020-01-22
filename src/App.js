import React from 'react';
import Navigation from './Navigation';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import ListNewsCards from './components/list-news-cards/ListNewsCards';
import Utility from './utilities/utility';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      name: null,
      avatar: null,
      email: null,
      newsArticles: {}
    };
  }
  async componentDidMount() {
    const newsData = await Utility.get('/', {
      params: {
        results: 1,
        country: 'us'
      }
    });
        const newsArticles = newsData.data.articles;

        this.setState({
          ...this.state, ...{
            newsArticles,
            isLoading: false
          }
        })
  }

  render() {
    const { isLoading, newsArticles } = this.state;
    
    return (
      <div>
        <Navigation />
          {isLoading ? <div> ...Loading </div> : <ListNewsCards newsArticles={newsArticles} />}
        </div>
        
       
      
    );

  }

  
}

export default App;
