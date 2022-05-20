import Head from 'next/head';
import Meta from '../components/meta';

const about = () => {
  return (<>
  <Meta title='about' />
  <h1>About Page</h1>
  </>
    
  )
}

export default about

//meta pass props=title it overide the defaultProps meta.title