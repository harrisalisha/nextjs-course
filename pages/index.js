import { server } from '../config';
import ArticleList from '../components/ArticleList';
import styles from '../styles/Home.module.css';


export const getStaticProps = async() => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()
  
  return {
    props: { articles }
  }
}

export default function Home({articles}) {
  //console.log(articles)
  return (<div>
    <h1> Hello Welcome to next / Page</h1>
    <ArticleList articles={articles} />
  </div>
  )
}