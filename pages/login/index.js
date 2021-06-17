import Link from 'next/link';

const Login = () => {
  return (
    <div style={styles.container}>
      <div className="row">
        <div className="col-md-12">
          <form className="card p-4 bg-warning">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <Link href="/posts">
              <button type="submit" className="btn btn-secondary">
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '120px',
  },
};

export default Login;
