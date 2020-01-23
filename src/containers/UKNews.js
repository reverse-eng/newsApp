import React, {useEffect, useState, useRef} from 'react';
import Utility from '../utilities/utility';
import { useParams} from 'react-router-dom';

import ListNewsCards from '../components/list-news-cards/ListNewsCards';


const UKNews = () => {
    const [newsReady, setNewsReady] = useState(false);
    const news = {};
    const {id} = useParams();
    const loadedNews = useRef(news);
    useEffect(()=>{
        
            async function getData(){
                loadedNews.current = await Utility.get('/', {
                    params: {
                      results: 1,
                      country: id
                    }
                  });
                
            }
            getData().then(()=> {   
                setNewsReady(true);  
            });
                
                //const newsArticles = ukNews.data.articles;
                //console.log(newsArticles)
            
    },[id])
    
    console.log("[UKNEWS] - ",id);

    return (
        <div>
            {!newsReady ? <div> ...Loading </div> : <ListNewsCards newsArticles={loadedNews.current.data.articles} />}
        </div>
    )
}

export default UKNews;