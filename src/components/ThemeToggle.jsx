

import React from 'react';
import { connect } from 'react-redux';
import { toggleTheme } from '../actions/themeActions';
import { Link } from 'react-router-dom';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <div className={`theme-toggle ${theme}-theme`}>
      <button onClick={toggleTheme}>Toggle Theme to {theme}</button>
      <p>I Have Changed theme to {theme}</p>
      <Link to="/">Home</Link>
      <Link to='/about'>About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

const mapDispatchToProps = {
  toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeToggle);
