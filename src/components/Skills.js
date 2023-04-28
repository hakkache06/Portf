import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import test from "../assets/img/cv.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>What i do</h2>
                        <p>Passionate about changing the world with technology.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                
                            <div className="item">
                                <h5>UI/UX Design</h5>
                            </div>

                            <div className="item">
                            <h5>ML/ DL</h5>

                            </div>
                            <div className="item">
                                <h5>Full Stack Development</h5>
                            </div>
                            <div className="item">
                                <h5>Cloud Infra-Architecture</h5>
                            </div>
                        </Carousel>

                    </div>

                    
                </div>

            </div>
        </div>
    </section>
  )
}