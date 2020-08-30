import React from "react";

const getVideoList = (data) => {
  let arrVBA = data;
  let embebURL = "https://www.youtube.com/embed/";
  return (
    <React.Fragment>
      {Object.keys(arrVBA).map((key, index) => {
        console.log(arrVBA[key]);
        return (
          <div key={index} className="col-6">
            <iframe
              height="315"
              width="560"
              src={embebURL + arrVBA[key]}
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        );
      })}
    </React.Fragment>
  );
};

class Media extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="row">{getVideoList(this.props.data)}</div>
      </div>
    );
  }
}

export default Media;
