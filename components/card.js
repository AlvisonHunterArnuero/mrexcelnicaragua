import Link from "next/link";
import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      name,
      imgsrc,
      imgalt,
      title,
      strbody,
      btncaption,
    } = this.props.cardInfo;
    return (
      <div className="card border-0">
        <div className="card-header mb-3 text-uppercase text-center">
          {name}
        </div>
        <img className="card-img-top mx-auto w-75" src={imgsrc} alt={imgalt} />
        <div className="card-body">
          <h4 className="card-title text-success text-center">{title}</h4>
          <p className="card-text text-muted">{strbody}</p>
          <Link href="/contact">
            <a className="btn btn-outline-primary btn-block">{btncaption}</a>
          </Link>
        </div>
      </div>
    );
  }
}

export default Card;
