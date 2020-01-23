import React, {useEffect, useState} from 'react';
import Utility from '../utilities/utility';

const UKNews = () => {
    const [newsReady, setNewsReady] = useState(false);
    useEffect(()=>{
        let ukNews = {}
            async function getData(){
                ukNews = await Utility.get('/', {
                    params: {
                      results: 1,
                      country: 'gb'
                    }
                  });
                console.log(ukNews)
                setNewsReady(ukNews.data.articles)
            }
            getData();
            
                //const newsArticles = ukNews.data.articles;
                //console.log(newsArticles)
            
    },[])

    return (
        <h1>News Ready For Display</h1>
    )
}

export default UKNews;