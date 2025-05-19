import { NavLink } from "react-router";

import './button.css';

export const ButtonPrimary = ({ content, size, route, target }) => {
  return (
    <NavLink
      to={route}
      target={target}
      className="body2 buttonPrimary"
      style={
        size === 'small' ? { padding: '.5em .75em', gap: '.25em' } : { padding: '.75em 1em', gap: '.5em' }
      }
    >
      {content}

    </NavLink>
  )
}

export const ButtonSecondary = ({ content, size }) => {
  return (
    <button
      className="body2 buttonSecondary"
      style={
        size === 'small' ? { padding: '.5em .75em', gap: '.25em' } : { padding: '.75em 1em', gap: '.5em' }
      }
    >
      {content}

    </button>
  )
}
