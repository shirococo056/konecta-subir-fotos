import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';
import Timeline from '../components/timeline';
import Sidebar from '../components/sidebar';
import useUser from '../hooks/use-user';
import LoggedInUserContext from '../context/logged-in-user';

export default function Dashboard({ user: loggedInUser }) {
  const { user } = useUser(loggedInUser.uid);

  useEffect(() => {
    document.title = 'semana de la familia';
  }, []);

  return (
    <LoggedInUserContext.Provider value={{ user }}>
      <div className="bg-gray-background">
        <Header />
        <div className="ml-5 pl-3 mr- 4 pr-3 grid grid-cols-4 gap-4 justify-between mx-auto max-w-full px-4 lg:px-0">
          <Timeline />
          <Sidebar />
        </div>
      </div>
    </LoggedInUserContext.Provider>
  );
}

Dashboard.propTypes = {
  user: PropTypes.object.isRequired
};
