import NavStyle from '../styles/Nav.module.css';
import Link from 'next/link'

const Nav = () => {
  return (
    <div className={NavStyle.nav}>
        <ul>
            <li>
                <Link href='/'><a>Home</a></Link>
            </li>
            <li>
                <Link href='/about'><a>About</a></Link>
            </li>
        </ul>
    </div>
  )
}

export default Nav