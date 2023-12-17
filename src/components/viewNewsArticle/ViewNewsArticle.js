import React from 'react';
import { Container, Row, Col, Button } from "shards-react";
import './viewnewsarticle.css'

const ViewNewsArticle = (props) => {
    const {Article} = props;
    return(
        <Container fluid className="news-article-container">
            
            <Row>
            <Col sm="12" lg="12">
                <h1 className="article-title">{Article.article.title}</h1>
                
            </Col>
            </Row>
            <Row>
                <Col lg="2" ></Col>
                <Col className="img-col" sm="12" lg="8">
                    <img className="news-art-img" alt=" " src={Article.article.urlToImage} />
                </Col>
                <Col lg="2"></Col>
            </Row>
            <Row>
                <Col sm="12" lg="6">
                    {Article.article.source.name} 
                </Col>
                <Col sm="12" lg="6">
                    {Article.article.author}
                </Col>
            </Row>
            <Row>
                {Article.article.content}
                
            </Row>
            <Row>
                <a href={Article.article.url}>Read full story at {Article.article?.source?.source?.name}</a>
            </Row>

            <Button onClick={props.BackButton} theme="dark"> <span className="back-arrow"> &larr;</span></Button>
        </Container>
    )
}

export default ViewNewsArticle;