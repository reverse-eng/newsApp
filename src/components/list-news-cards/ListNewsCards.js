import React, {useState} from 'react';
import NewsCard from '../news-card/NewsCard';
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

const viewNewsArticle = () => {
    
    return(
        <h1 >News Article Selelcted</h1>
    )
}

const handleArticleClicked = (e) => {
    e.preventDefault();
    console.log("Clicked: ", e)
}
const ListNewsCards = (props) => {
    const {selectedArticle, setSelectedArticle} = useState('');

    return (
          <div className="flex-wrapper"> 
            <NewsCards newsArticles={props.newsArticles} />
          </div>
          );

  }
export default ListNewsCards;