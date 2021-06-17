import Header from '../components/Header';
import Login from './login/index';

export default function Home() {
  return (
    <>
      <Header hideButtons />
      <Login />
    </>
  );
}
