import React from "react";
import ReactDOM from "react-dom";
import img1 from '../img/handi1.png'
import img2 from '../img/handi2.png'

class SlideshowHandi extends React.Component {
    constructor(props) {
        super(props);
        this.switchImage = this.switchImage.bind(this);
        this.state = {
            currentImage: 0,
            images: [
                img1,
                img2
            ]
        };
    }

    switchImage() {
        if (this.state.currentImage < this.state.images.length - 1) {
            this.setState({
                currentImage: this.state.currentImage + 1
            });
        } else {
            this.setState({
                currentImage: 0
            });
        }
        return this.currentImage;
    }

    componentDidMount() {
        setInterval(this.switchImage, 5000);
    }

    render() {
        return (
            <div className="slideshow-handisport">
                <img
                    src={this.state.images[this.state.currentImage]}
                    alt="cleaning images"
                />
            </div>
        );
    }
}

export default SlideshowHandi