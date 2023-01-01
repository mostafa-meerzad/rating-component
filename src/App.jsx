import React from "react";
import { useState } from "react";
import { motion } from 'framer-motion';
import { Star } from "./icons";
import illustration from "./illustration-thank-you.svg";


const App = () => {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  return (
    <>
      {submitted
        ? <Thanks rating={rating} />
        : <Rating
            setSubmitted={setSubmitted}
            rating={rating}
            setRating={setRating}
          />}
    </>
  );
};

const Rating = ({ rating, setRating, setSubmitted }) => {
  const [btnActive, setBtnActive] = useState();
  const handleActive = e => {
    const rateValue = e.target.value;
    setRating(rateValue);
    setBtnActive(rateValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    console.log("submitted");
  }
  const btnContainerVariants = {
    hidden:{},
    visible:{}
  }
  const btnVariants = {
    hidden:{scale:.3, opacity:0},
    visible:{scale:1, opacity:1}
  }
  return (
    <div className="rating">
      <div className="rating__star">
        <Star />
      </div>
      <h2 className="rating__title"> How did we do?</h2>
      <p className="rating__desc">
        {" "}Please let us know how we did with your support request. All
        feedback is appreciated to help us improve our offering!
      </p>

      <form action="#" onSubmit={handleSubmit}>
        <motion.div variants={btnContainerVariants} initial="hidden" animate="visible" transition={{staggerChildren:.200}} className="rating__btn-container">
        <motion.input variants={btnVariants}
          type="button"
          onClick={handleActive}
          value="1"
          className={btnActive === '1' ? "rating__btn rating__btn--active": "rating__btn"}
        />
        <motion.input variants={btnVariants}
          type="button"
          onClick={handleActive}
          value="2"
          className={btnActive === '2' ? "rating__btn rating__btn--active": "rating__btn"}
        />
        <motion.input variants={btnVariants}
          type="button"
          onClick={handleActive}
          value="3"
          className={btnActive === '3' ? "rating__btn rating__btn--active": "rating__btn"}
        />
        <motion.input variants={btnVariants}
          type="button"
          onClick={handleActive}
          value="4"
          className={btnActive === '4' ? "rating__btn rating__btn--active": "rating__btn"}
        />
        <motion.input variants={btnVariants}
          type="button"
          onClick={handleActive}
          value="5"
          className={btnActive === '5' ? "rating__btn rating__btn--active": "rating__btn"}
        />
        </motion.div>
        <input type="submit" className="rating__submit" disabled={!rating && "disabled"} />
      </form>
    </div>
  );
};

const Thanks = ({ rating }) => {
  return (
    <motion.div initial={{scale:0}} animate={{scale:1}} className="rating thanks">
      <object type="image/svg+xml" data={illustration} />
      <p className="thanks__rated">
        You selected {rating} out of 5
      </p>
      <h2 className="thanks__title">Thank you!</h2>
      <p className="thanks__desc">
        We appreciate you taking the time to give a rating. If you ever
        need more support, don’t hesitate to get in touch!
      </p>
    </motion.div>
  );
};

export default App;
