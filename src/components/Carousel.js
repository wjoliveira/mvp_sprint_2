import { useState } from "react";
import { Carousel } from "react-bootstrap";

function ControlledCarousel(props) {
    const [indexCarousel, setIndexCarousel] = useState(0);

    const handleSelect = (selectedIndexCarousel) => {
        setIndexCarousel(selectedIndexCarousel);
    };

    const highlight = props.highlight;

    return (
        <Carousel activeIndex={indexCarousel} onSelect={handleSelect}>
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src={highlight.image}
                    alt="Slide"
                />
                <Carousel.Caption>
                    <h3>Highlight</h3>
                    <p>{highlight.title}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;