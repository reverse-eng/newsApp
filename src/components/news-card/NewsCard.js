import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import './newscard.css';

const NewsCard = (props) => (
  <Card className="ui-news-card">
    <Image src={props.imageSource} wrapped ui={false} />
    <Card.Content>
        <Card.Header>{props.title}</Card.Header>
      <Card.Meta>
        <span className={props.postDate}>{props.date}</span>
      </Card.Meta>
      <Card.Description>
        {props.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href={props.url}>
        <Icon name='user' />
        {props.sourceName}
      </a>
    </Card.Content>
  </Card>
)

export default NewsCard