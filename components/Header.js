import headerStyles from '../styles/Header.module.css'


const Header = () => {
  const x = 5;
  return <div>
      <h1 className={headerStyles.title}><span>WebDev</span> News</h1>
   
      <style jsx>
          { `.title { 
              color: ${x > 3 ? 'red' : 'blue'}
              }`
           }
      </style>
      <p className={headerStyles.description}>This is paragraph keep upto date with dev web news</p>
      <hr></hr>
  </div>;
};

export default Header;