import React from "react";
import "./style.css";


class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoad: true,
    };
  }
  toggleIsLoad = () => {
    this.setState({
      isLoad: true,
    });
  };

  render() {
    const {
      fullName,
      alt,
      src,
      initials,
      description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur, ligula nec molestie viverra, lectus lacus scelerisque justo, ac placerat sem est id sapien. Aliquam erat volutpat. Nunc quis dolor neque. Phasellus sed purus vitae metus sagittis commodo eget sit amet urna. Aliquam erat volutpat. Pellentesque a mauris orci. Morbi dictum urna vel elit euismod, eu pellentesque erat venenatis. Praesent aliquet diam libero, eget egestas enim sagittis vitae",
    } = this.props;

    const { isLoad } = this.state;

    const userCard = (
      <li className="userCardWrapper">
        <article className="cardContainer">
          <div className="cardImgWrapper">
            <img
              className="cardImg"
              src={src}
              alt={alt}
              onError={this.toggleIsLoad}
            ></img>
            {isLoad && <div className="initials">{initials}</div>}
          </div>
          <h2 className="cardName">{fullName}</h2>
          <p className="cardDescription">{description}</p>
        </article>
      </li>
    );

    return userCard;
  }
}

export default UserCard;
