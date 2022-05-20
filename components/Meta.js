import Head from 'next/head'

//params is from third party
const Meta = ({ title, keywords, description}) => {
  return <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content={keywords} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
  </Head>
};

Meta.defaultProps ={
    title :'Webdev News',
    keywords: 'web development, programming',
    description: 'get latest news in web dev'
}

export default Meta;