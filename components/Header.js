import React from 'react'
import styles from '../styles/header.module.scss'

export const Header = () => {
    return (
        <div>
            <div className={styles.menu}>
                <a href='#libarts'>Libarts</a>
                <a href='#callab'>Callab</a>
                <a href='#home'>Home</a>
                <a href='#blog'>Blog</a>
                <a href='#aboutus'>About us</a>
            </div>
        </div>
    )
}
