import React, { Component } from "react";
import ContentLoader from "react-content-loader";

export default class Placeholder extends Component {
  render() {
    return (
      <ContentLoader
        height={160}
        width={317}
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
        style={{ marginBottom: "4px" }}
      >
        <rect x="160" y="-1" rx="10" ry="10" width="160" height="160" />
      </ContentLoader>
    );
  }
}
