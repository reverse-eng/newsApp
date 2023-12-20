import React, {useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import {
  Card,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

import "./newscard.css"

const NewsCard = (props) => {
  const [inProp, setInProp] = useState(false);
  setTimeout(()=>setInProp(true), 200)
  return (
  <CSSTransition 
  timeout={1000}
  in={inProp}
  unmountOnExit
  classNames='item'>
  <Card className="ui-news-card">
    <CardImg className="ui-news-card-image"src={props.imageSource} />
    <CardBody>
        <CardTitle>{props.title}</CardTitle>
      <div className="card-date">
        <span className={props.postDate}>{props.date}</span>
      </div>
      <p className="card-descrition">{props.description}</p>
      <Button 
          href={props?.isOriginal ? props.post_slug : props.url} >
          Read more &rarr;
      </Button>
    </CardBody>
    {/* <CardFooter>
      <a href={props.url}>
        {props.sourceName || 'Read More'}
      </a>
    </CardFooter> */}
  </Card>
  </CSSTransition>)
}

export default NewsCard;