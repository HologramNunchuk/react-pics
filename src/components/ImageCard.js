import React from 'react';


class ImageCard extends React.Component {

  // Creating a Ref
  constructor(props) {
    super(props);
    this.state = {spans: 0};
    //assign the ref to an instance var, which is imageRef here, so you can use it later on in the class
    this.imageRef = React.createRef();
  }

  componentDidMount() {
     this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
      const height = this.imageRef.current.clientHeight;
      const spans = Math.ceil(height / 10);

      this.setState({spans: spans});
  }

  render() {
    const {description, urls} = this.props.image;
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img ref={this.imageRef}src={urls.regular} alt={description}/>
      </div>
    )
  }
}


export default ImageCard;
