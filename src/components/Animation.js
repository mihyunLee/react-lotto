import { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animationData from "../animation/31177-winning-cup.json";

const Animation = () => {
  const container = useRef();

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      speed: 2,
      animationData: animationData,
    });
  }, [container]);

  return (
    <div className="Animation">
      <div ref={container} className="container"></div>
      <h1>당첨 결과 확인중 ...</h1>
    </div>
  );
};

export default Animation;
