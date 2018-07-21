import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";

class HelloMessage extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container is-fluid">
          <h1 className="title">
            Demonstrates a minimal parcel based ReactJS application.
          </h1>
          <div>Hello {this.props.name}</div>
          <footer className="footer">
            <div className="content has-text-centered">
              <p>
                By the way, this sample also includes{" "}
                <a href="https://bulma.io/">Bulma</a>.
              </p>
            </div>
          </footer>
        </div>
      </section>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Bernard" />, mountNode);
