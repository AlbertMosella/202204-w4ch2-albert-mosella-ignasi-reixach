import "./UsedLetters.css";
import PropTypes from "prop-types";

const UsedLetters = ({ letters }) => {
  return (
    <section className="used-letters-container">
      <h2>Used letters</h2>
      <ul className="used-letters">
        {letters.map((letter) => (
          <li className="used-letter">{letter}</li>
        ))}
      </ul>
    </section>
  );
};

UsedLetters.propTypes = { text: PropTypes.string.isRequired };

export default UsedLetters;
