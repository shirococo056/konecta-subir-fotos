import { useContext } from 'react';
import Suggestions from './suggestions';
import LoggedInUserContext from '../../context/logged-in-user';

export default function Sidebar() {
  const { user: { docId = '', userId, following } = {} } = useContext(LoggedInUserContext);

  return (
    <div className="col-span-3 grid grid-cols-3 lg:grid-cols-3">
      <Suggestions userId={userId} following={following} loggedInUserDocId={docId} />
    </div>
  );
}
