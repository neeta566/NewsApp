import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";

const News = ({country,category,articles, setArticles}) => {
  
   //https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=2286cf3764b345a0bada55a66ed2cdc9 

   
   

     const fetchAllNews = async()=>{
    try {
      const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=2286cf3764b345a0bada55a66ed2cdc9`)

      console.log(res.data.articles);
      setArticles(res.data.articles);
        } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=> {
   fetchAllNews()
  },[category])

  return (
    <div className="bg-gray-200 dark:bg-gray-800 text-black py-24 px-4 md:px-0">
        
      <div className="max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-3 gap-7">
         {/* <NewsCard></NewsCard> */}
          {
        articles.map((article,index) => {
          return <NewsCard key={index} article={article}></NewsCard>
        })
        } 
      </div>
    </div>
  );
};
export default News;
