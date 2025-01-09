import PropTypes from "prop-types";
import "../style.css";

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          kamu berhutang {Math.abs(friend.balance)} kepada {friend.name}{" "}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} berhutang {Math.abs(friend.balance)} kepada kamu
        </p>
      )}
      {friend.balance === 0 && (
        <p className="">kamu dan {friend.name} tidak berhutang apapun</p>
      )}
      <button className="button">pilih</button>
    </li>
  );
}

Friend.propTypes = {
  friend: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
  }).isRequired,
};

export default Friend;
