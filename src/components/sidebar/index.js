import { useContext } from 'react';
import Suggestions from './suggestions';
import LoggedInUserContext from '../../context/logged-in-user';

export default function Sidebar() {
  const { user: { docId = '', userId, following } = {} } = useContext(LoggedInUserContext);

  return (
    <div className="rounded flex flex-col">
      <Suggestions userId={userId} following={following} loggedInUserDocId={docId} />
    </div>
  );
}
