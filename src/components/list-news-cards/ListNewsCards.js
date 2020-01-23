import React, {useState} from 'react';
import {CSSTransition} from 'react-transition-group';

import NewsCard from '../news-card/NewsCard';
import ViewNewsArticle from '../viewNewsArticle/ViewNewsArticle'
import './listnewscards.css';

const formatDate = (utcDate) =>{
    //current format from 2020-01-22T09:40:21Z
    let year = parseInt(utcDate.substring(0, 4));
    let  month = parseInt(utcDate.substring(5,7)-1);
    let day = parseInt(utcDate.substring(8,10));
    let hour = parseInt(utcDate.substring(11,13));
    let min = parseInt(utcDate.substring(14,16));
    let sec = parseInt(utcDate.substring(17,19));
    let dateObj = new Date(Date.UTC(year, month, day, hour, min, sec))
    return dateObj.toUTCString()
}

const NewsCards = (props) => {
    

    return (
        
        props.newsArticles.map((newsItem, index) =>
        
       
            <NewsCard 
            key={index}
            inProp={props.inProp}
            article={newsItem}
            clicked={props.ArticleClicked}
            imageSource = {newsItem.urlToImage}
            title = {newsItem.title}
            date = {formatDate(newsItem.publishedAt)}
            sourceName = {newsItem.source.name}
            description = {newsItem.description}
            url = {newsItem.url}
            
            />
        
            
        )
        
    
    )
}




const ListNewsCards = (props) => {
    const [selectedArticle, setSelectedArticle] = useState('');
    const [inProp, setInProp] = useState(false);

    const handleArticleClicked = (article) => {
        setSelectedArticle({article});
        setInProp(false)
    }
    const handleBackButtonFromArt = () =>{
        setSelectedArticle('');
        setInProp(false)
    }
   setTimeout(()=>setInProp(true),200 )

    return (
        <CSSTransition 
        in={inProp}
        timeout={700}
        mountOnEnter
        classNames="news-articles"
        >
          <div className="flex-wrapper"> 
                
           
                
                 {selectedArticle === '' ? 
                    <NewsCards newsArticles={props.newsArticles} ArticleClicked={handleArticleClicked} />
                :   
                    < ViewNewsArticle Article={selectedArticle} BackButton={handleBackButtonFromArt} />
                }
                </div>
           </CSSTransition>
          
          );

  }
export default ListNewsCards;