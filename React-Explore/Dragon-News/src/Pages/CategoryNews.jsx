import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const {id} = useParams()
    const data = useLoaderData()
    const [categoryNews, setCategoryNews] = useState([])
    useEffect(()=>{
        if(id == '0'){
            setCategoryNews(data)
        }
        else if(id == '1'){
           const  filteredData = data.filter(news => news.others.is_today_pick == true)
            setCategoryNews(filteredData)
        }
        else{
            const filteredData = data.filter(news => news.category_id == id)
            setCategoryNews(filteredData)
        }
    },[id,data])
    return (
        <div>
            <h2 className='font-bold  mb-4'>Total <span className='text-secondary'>{categoryNews.length}</span> News Found</h2>
           {
            categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
           }
        </div>
    );
};

export default CategoryNews;