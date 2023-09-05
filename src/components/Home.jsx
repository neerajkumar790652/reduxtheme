import React from 'react'
import { toggleTheme } from '../actions/themeActions';
const Home = ({ theme, toggleTheme }) => {
  return (
    <div className={`theme-toggle ${theme}-theme`}>
      This is Home Page
    </div>
  )
}

export default Home
