import React from "react";
import UserCard from "../UserCards";
import responseData from "../../data";

function UserCardList() {
  const userCardItem = responseData.map(
    ({ id, firstName, lastName, profilePicture, description }) => {
      const getFullName =
        `${firstName.trim()} ${lastName.trim()}`.trim() || "Person";

      const getInitials = (str) => {
        const wordsArr = str.split(" ");
        const initialsArr = wordsArr.map((word) => word[0]);
        const initialsStr = initialsArr.join(" ");
        return initialsStr;
      };

      return (
        <UserCard
          key={`${id}-${lastName}`}
          fullName={getFullName}
          src={profilePicture}
          alt={`${getFullName} photo`}
          initials={getInitials(getFullName)}
          description={description}
        />
      );
    }
  );

  return (
    <div className="container">
      <ul className="userCardsContainer">{userCardItem}</ul>
    </div>
  );
}

export default UserCardList;
