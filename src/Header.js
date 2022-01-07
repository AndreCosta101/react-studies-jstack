import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

import styles from './Header.scss';
console.log(styles)

import { ThemeContext } from './ThemeContext';

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <h1 className={styles.title}>{props.title}</h1>
      <Button
        onClick={onToggleTheme}
      >
        Mudar tema
      </Button>
      {props.children}

    </div>
  )
}

Header.propTypes = {
  // onToggleTheme: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
}

Header.defaultProps = {
  title: `JStack's Blog`
}