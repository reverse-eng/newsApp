import React from 'react';
import { Container, Row, Col } from "shards-react";
import ReactHtmlParser  from 'react-html-parser';
import {Helmet} from "react-helmet";
import './viewnewsarticle.css'

const ViewNewsArticle = ({ article }) => {
    
    return(
        <>
        <Helmet>
            <title>{article.title}</title>
            <link rel="canonical" href={`${window.location.href}`} />
            <meta  name='description' content={article.description} />
            {/* inline script elements */}
            <script type="application/ld+json">{`
                {
                    "@context": "https://schema.org",
                    "@type": "NewsArticle",
                    "headline": "${article.title}",
                    "image": {
                      "@type": "ImageObject",
                      "url": "${article.urlToImage}"
                    },
                    "datePublished": "${article.publishedAt}",
                    "author": [
                      {
                        "@type": "Person",
                        "name": "${article.author}"
                      }
                    ]
                  }
            `}</script>
        </Helmet>
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
        </>
    )
}

export default ViewNewsArticle;