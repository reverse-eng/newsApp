import React, { useEffect, useState } from 'react';
import ViewNewsArticle from '../components/viewNewsArticle/ViewNewsArticle';
import utility from '../utilities/utility';
import { useParams } from "react-router-dom";

const NewsDetails = () => {
    const [article, setArticle] = useState(null)
    const { slug } = useParams();
    useEffect(() =>{
        const getData = async () => {
            return await utility.get(`/article/${slug}`)
        }
        getData().then((articleData) => {
            setArticle(articleData.data[0])
        })
    }, [slug]);

    return <div>

       {!article ? '...Loading' :  <ViewNewsArticle article={article} />}
    </div>
}


export default NewsDetails;