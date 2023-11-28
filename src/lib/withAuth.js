// lib/withAuth.js
import { getSession } from 'next-auth/react';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { data: session, status } = getSession();

    // Redirect to login if not authenticated
    if (status === 'loading' || !session) {
      return <p>Loading...</p>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
