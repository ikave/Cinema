import { Redirect, Route, RouteProps } from 'react-router-dom';
import { AuthStatus, AppRoute } from '../../const';

type ProtectedRouteProps = RouteProps & {
  render: () => JSX.Element;
};

function ProtectedRoute(props: ProtectedRouteProps): JSX.Element {
  const { exact, path, render } = props;
  return (
    <Route
      exact={exact}
      path={path}
      render={
        (routeProps) =>
          AuthStatus.NoAuth ? (
            render(routeProps)
          ) : (
            <Redirect to={AppRoute.SIGNIN} />
          )
        // eslint-disable-next-line react/jsx-curly-newline
      }
    />
  );
}

export default ProtectedRoute;
