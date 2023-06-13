import React, { Component } from "react";
import placeHolderImage from "./placeHolder.jpeg";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={imageUrl === null ? placeHolderImage : imageUrl}
            className="card-img-top"
            alt="..."
            style={{ height: "15rem" }}
          />
          <div className="card-body" >
            <h5 className="card-title" style={{ height: "5rem" }}>
              {title}
            </h5>
            <p className="card-text" style={{ height: "10rem" }}>
              {description} 
            </p>
            <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
