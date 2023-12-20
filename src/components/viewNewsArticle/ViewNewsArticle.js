import React from 'react';
import { Container, Row, Col, Button } from "shards-react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import './viewnewsarticle.css'

const ViewNewsArticle = ({ article }) => {
    console.log('this is loaded')
    // const {Article} = props;
    return(
        <Container fluid className="news-article-container">
            
            <Row>
            <Col sm="12" lg="12">
                <h1 className="article-title">{article.title}</h1>
                
            </Col>
            </Row>
            <Row>
                <Col lg="2" ></Col>
                <Col className="img-col" sm="12" lg="8">
                    <img className="news-art-img" alt=" " src={article.urlToImage} />
                </Col>
                <Col lg="2"></Col>
            </Row>
            <Row>
                <Col sm="12" lg="6">
                    {article.source.name} 
                </Col>
                <Col sm="12" lg="6">
                    {article.author}
                </Col>
            </Row>
            <Row>
                {ReactHtmlParser(article.content)}
            </Row>
            {/* <Row>
                <a href={article.url}>Read full story at {article?.source?.source?.name}</a>
            </Row> */}

            {/* <Button onClick={props.BackButton} theme="dark"> <span className="back-arrow"> &larr;</span></Button> */}
        </Container>
    )
}

export default ViewNewsArticle;