import React from 'react';


class ImageCard extends React.Component {

  // Creating a Ref
  constructor(props) {
    super(props);
    //assign the ref to an instance var so you can use it later on in the class
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.imageRef.current.addEventListener('load', this.setSpans));
  }

  setSpans = () => {
      console.log(this.imageRef.current.clientHeight);

  }

  render() {
    const {description, urls} = this.props.image;
    return (
      <div>
        <img ref={this.imageRef}src={urls.regular} alt={description}/>
      </div>
    )
  }
}


export default ImageCard;
