import React from 'react';

import ListNewsCards from '../components/list-news-cards/ListNewsCards';
import Utility from '../utilities/utility';



class Home extends React.Component {
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
    const newsData = await Utility.get('/articles');
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
          {isLoading ? <div> ...Loading </div> : <ListNewsCards newsArticles={newsArticles} />}
        </div>
        
       
      
    );

  }

  
}

export default Home;
