import "./UsedLetters.css";
import PropTypes from "prop-types";

const UsedLetters = ({ usedLetters }) => {
  return (
    <section className="used-letters-container">
      <h2>Used letters</h2>
      <ul className="used-letters">
        {usedLetters.map((usedLetter) => (
          <li className="used-letter">{usedLetter}</li>
        ))}
      </ul>
    </section>
  );
};

UsedLetters.propTypes = { usedLetters: PropTypes.arrayOf(PropTypes.string) };

export default UsedLetters;
