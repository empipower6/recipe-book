import * as React from "react"
import Logo from '../svg/logo';
import * as styles from '../styles/layout.module.scss';
import { Link } from "gatsby"

// markup
const Layout = ({children}) => {
  return (
    <>
        <Link to='/'>
          <div className={styles.header}>
                  <Logo />
          </div>
        </Link>
        {children}
    </>
  )
}

export default Layout
