import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }) {
  const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100);
    },
    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    },
  };

  return (
    <Route
      {...rest}
      render={() => {
        // 依驗證結果 true , false 決定是否轉到登入頁面
        return fakeAuth.isAuthenticated === true ? (
          children
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
}
