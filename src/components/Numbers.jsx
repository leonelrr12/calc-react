import React from "react";
import Button from "./button/Button";
import PropTypes from "prop-types";

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3,"+/-", 0, "."];
const Numbers = ({ handleOnClickNumber }) => (
  <section className="numbers">
    {numbers.map((num, key) => (
      <Button
        key={key}
        type="button"
        text={num.toString()}
        handleOnClick={handleOnClickNumber}
      />
    ))}
  </section>
);

Numbers.propTypes = {
  handleOnClickNumber: PropTypes.func.isRequired,
};

export default Numbers;
