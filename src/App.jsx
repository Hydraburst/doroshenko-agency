import { Documents } from './components/Documents/Documents';
import { Header } from './components/Header/Header';
import { UserProfile } from './components/UserProfile/UserProfile';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="heroContent">
          <UserProfile />
          <Documents />
        </div>
      </div>
    </>
  );
}

export default App;
