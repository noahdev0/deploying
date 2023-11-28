
const SecurePage = () => {
  return (
    <div>
      <h1>Secure Page</h1>
      {/* Your secure page content */}
    </div>
  );
};

export default withAuth(SecurePage);
