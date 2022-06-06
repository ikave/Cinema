import { Navigate } from 'react-router-dom';
import { AuthStatus, AppRoute } from '../../const';

type ProtectedRouteProps = {
  authorizationStatus: AuthStatus;
  children: JSX.Element;
};

function ProtectedRoute(props: ProtectedRouteProps): JSX.Element {
  const { authorizationStatus, children } = props;
  // eslint-disable-next-line no-console
  console.log(authorizationStatus);

  return authorizationStatus === AuthStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.SIGNIN} />
  );
}

export default ProtectedRoute;
