import { useState } from 'react';
import PropTypes from 'prop-types';

export default function SuggestedProfile({ username }) {
  const [followed] = useState(false);

  //  async function handleFollowUser() {setFollowed(true);await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);await updateFollowedUserFollowers(profileDocId, userId, false);}

  return !followed ? (
    <div className="flex flex-row items-center align-items justify-between">
      <div className="flex items-center justify-between">
        <p className="font-bold text-sm">{username}</p>
      </div>
    </div>
  ) : null;
}

SuggestedProfile.propTypes = {
  username: PropTypes.string.isRequired
};
