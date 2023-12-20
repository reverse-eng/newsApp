import React, { useEffect, useState } from 'react';
import ViewNewsArticle from '../components/viewNewsArticle/ViewNewsArticle';
import utility from '../utilities/utility';
import { useParams } from "react-router-dom";

const NewsDetails = () => {
    const [article, setArticle] = useState(null)
    const { slug } = useParams();
    useEffect(async () =>{
        const articleSlug = await utility.get(`/article/${slug}`)
        setArticle(articleSlug.data[0])
    }, []);

    return <div>

       {!article ? '...Loading' :  <ViewNewsArticle article={article} />}
    </div>
}


export default NewsDetails;