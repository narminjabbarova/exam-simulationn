import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import styles from './index.module.scss'
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";

const Header = () => {
  return (
    <>
    <header>
      <div className={styles['container']}>

        <div className={styles['upper-header']}>
          <div className={styles['inp']}>
          <FaSearch />
          <input type="text" placeholder='search'/>
          </div>

        <div className={styles["logo"]}>
          <h3>SHOPPERS</h3>
        </div>

        <div className={styles['icons']}>
        <FaUser />
        <FaRegHeart />
        </div>

        </div>


        <nav>
          <ul>
            <li>
              <NavLink to={'/'}>HOME</NavLink>
            </li>
            <li>
              <NavLink to={'/about'}>ABOUT</NavLink>
            </li>
            <li>
              <NavLink to={'/products'}>PRODUCTS</NavLink>
            </li>
            <li>
              <NavLink to={'/wishlist'}>WISHLIST</NavLink>
            </li>
            <li>
              <NavLink to={'/add'}>ADD</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    </>
  )
}

export default Header