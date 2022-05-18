import Head from 'next/head'
import { Fragment } from 'react';
import ArticleList from '../components/ArticleList';
import styles from '../styles/Home.module.css';


export const getStaticProps = async() => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()
  
  return {
    props: { articles }
  }
}

export default function Home({articles}) {
  //console.log(articles)
  return (<div>
    <Head>
      <title>Web Dev news</title>
      <meta name='keyword' content='web developing , developing, programmings' />
    </Head>
   
    <h1> Hello Welcome to next / Page</h1>
    <ArticleList articles={articles} />
  </div>
  )
}