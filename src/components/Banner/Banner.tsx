import { useState } from "react";
import happy from "../../assets/my_pictures/chosen/happy.jpg";
import mountain from "../../assets/my_pictures/chosen/mountain.jpg";
import angry from "../../assets/my_pictures/chosen/angry.jpg";
import lighthouse from "../../assets/my_pictures/chosen/lighthouse_edit.jpg";
// import rocks from "../../assets/my_pictures/chosen/question.jpg";
import "./Banner.scss";

const Banner = () => {
  const pictures: string[] = [happy, mountain, angry, lighthouse];
  const traits: string[] = [
    "new project starts",
    "difficulties show up",
    "work doesn't get done",
    "project turns out to be bigger than expected",
    // "it's time to recharge"
    // "it's time for adventure"
  ];

  const [index, setIndex] = useState<number>(0);

  function getNextPicture() {
    if (index !== pictures.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function getPreviousPicture() {
    if (index !== 0) {
      setIndex(index - 1);
    } else {
      setIndex(pictures.length - 1);
    }
  }

  return (
    <div className="banner-div">
      <div className="banner-box">
        <div className="pictures-box">
          <div className="banner-placeholder" onClick={getPreviousPicture}>
            <i className="fas fa-angle-left"></i>
          </div>
          <img
            src={pictures[index]}
            className="banner-pic"
            alt="Peace pic"
          />
          <div className="banner-placeholder" onClick={getNextPicture}>
            <i className="fas fa-angle-right"></i>
          </div>
        </div>
        <p className="banner-text">
          Me when {" "}
          <b>{traits[index]}</b>
        </p>
      </div>
    </div>
  );
};
export default Banner;
