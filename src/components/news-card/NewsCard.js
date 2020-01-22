import React from 'react';
import {
  Card,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

import "./newscard.css"

const NewsCard = (props) => (
  <Card className="ui-news-card">
    <CardImg className="ui-news-card-image"src={props.imageSource} />
    <CardBody>
        <CardTitle>{props.title}</CardTitle>
      <div className="card-date">
        <span className={props.postDate}>{props.date}</span>
      </div>
      <p className="card-descrition">{props.description}</p>
      <Button onClick={()=> props.clicked(props.article)}>Read more &rarr; </Button>
    </CardBody>
    <CardFooter>
      <a href={props.url}>
        {props.sourceName}
      </a>
    </CardFooter>
  </Card>
)

export default NewsCard