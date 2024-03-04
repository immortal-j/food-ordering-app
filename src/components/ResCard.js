import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};
ResCard = (props) => {
  let { cardData } = props;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-img"
        src={CDN_URL + cardData?.cloudinaryImageId}
      ></img>
      <h3>{cardData?.name}</h3>
      <h4>{cardData?.cuisines?.join(". ")}</h4>
      <h4>{cardData?.avgRatingString}</h4>
      <h4>{cardData?.sla?.deliveryTime}</h4>
    </div>
  );
};
export default ResCard;
