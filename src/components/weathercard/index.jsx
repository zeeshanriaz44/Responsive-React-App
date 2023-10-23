import moment from "moment/moment";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./index.css";

const Weather = ({ date, temp, min, max, sea, humidity, feels_like }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }} border="success">
        <Card.Body>
          <Card.Title>{moment(date).format("dddd ha")}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <h1>{Math.round(temp - 273)}°C</h1>
          </Card.Subtitle>
          <Card.Text>
            {Math.round(min - 273)}°C-{Math.round(max - 273)}°C
            <h1> Sea Level: {sea}</h1>
            <h4>humidity: {humidity}</h4>
            <p>feels_like:{feels_like}</p>
          </Card.Text>
        </Card.Body>
        <Button variant="success" className="weabtn">
          Click
        </Button>{" "}
      </Card>
    </div>
  );
};

export default Weather;
