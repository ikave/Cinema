import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../const';
import { useAppSelector } from '../hooks';

type HeaderProps = {
  children?: React.ReactNode;
};

function Header({ children }: HeaderProps): JSX.Element {
  const authStatus = useAppSelector((state) => state.USER.authorizationStatus);

  return (
    <header className="page-header film-card__head">
      <div className="logo">
        <Link to={AppRoute.MAIN} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      {children}
      {authStatus === AuthStatus.Auth ? (
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img
                src="img/avatar.jpg"
                alt="User avatar"
                width="63"
                height="63"
              />
            </div>
          </li>
          <li className="user-block__item">
            <Link to={AppRoute.MAIN} className="user-block__link">
              Sign out
            </Link>
          </li>
        </ul>
      ) : (
        <div className="user-block">
          <Link to={AppRoute.SIGNIN} className="user-block__link">
            Sign in
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
