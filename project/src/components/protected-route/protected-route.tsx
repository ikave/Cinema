import { Redirect, Route, RouteProps } from 'react-router-dom';
import { AuthStatus, AppRoute } from '../../const';

type ProtectedRouteProps = RouteProps & {
  render: () => JSX.Element,
}

function ProtectedRoute(props: ProtectedRouteProps): JSX.Element {
  const {exact, path, render} = props;
  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => (
        AuthStatus.NO_AUTH === 'AUTH'
          ? render(routeProps)
          : <Redirect to={AppRoute.SIGNIN} />
      )}
    />
  );
}

export default ProtectedRoute;
