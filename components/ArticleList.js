import ArticleStyles from '../styles/Article.module.css'
import Head from 'next/head'
import ArticleItem from './ArticleItem'

/* eslint-disable */
const ArticleList = ({articles}) => {
  return (
      <div className={ArticleStyles.grid}>
          {articles.map((article) => <ArticleItem article={article} /> )}
         
      </div>      
   
  )
}

export default ArticleList