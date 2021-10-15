/* eslint-disable react/prop-types */
import { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import usePhotos from '../hooks/use-photos';
import Post from './post';
import LoggedInUserContext from '../context/logged-in-user';

export default function Timeline() {
  const { user } = useContext(LoggedInUserContext);
  const { photos } = usePhotos(user);

  return (
    <div className="grid col-span-3 grid-cols-3 lg:grid-cols-3">
      {!photos ? (
        <Skeleton count={4} width={640} height={500} className="mb-5" />
      ) : (
        photos.map((content) => <Post key={content.docId} content={content} />)
      )}
    </div>
  );
}
