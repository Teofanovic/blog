import Link from 'next/link';

const Header = ({ currentRoute, hideButtons = false }) => {
  const routes = ['Posts', 'Images'];
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">Blog</a>
        </Link>
        <ul className="nav nav-pills">
          {!hideButtons &&
            routes.map((route) => {
              return (
                <Link key={route} href={`/${route.toLowerCase()}`}>
                  <a
                    className={
                      currentRoute?.toLowerCase() === route.toLowerCase()
                        ? 'nav-link active'
                        : 'nav-link'
                    }
                  >
                    {route}
                  </a>
                </Link>
              );
            })}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
