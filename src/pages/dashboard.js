//dashboard page
// pages/secure-page.js
import withAuth from "../lib/withAuth";

const SecurePage = () => {
  return (
    <div>
      <h1>Secure Page</h1>
      {/* Your secure page content */}
    </div>
  );
};

export default withAuth(SecurePage);
