import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Weather from "../weathercard";
import Button from "react-bootstrap/Button";
import "./index.css";

const Home = () => {
  const [cityName, setcityname] = useState("");
  const [data, setdata] = useState([]);

  let submitHandler = async (e) => {
    e.preventDefault();
    console.log("i am a submit handler function");

    try {
      let response = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=4f1056b88963c9e561cab089277d11ea&units=matric`
      );
      console.log(response);
      setdata(response.data.list);
    } catch (error) {
      console.log("error in api", error);
    }
  };
  return (
    <div>
      <h1>weather App home</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>City Name</Form.Label> <br />
          <Form.Control
            type="text"
            className="fields"
            placeholder="Enter city name"
            onChange={(e) => {
              // console.log(e.target.value);
              setcityname(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="btns">
          get weather
        </Button>{" "}
      </Form>
      {data.map((eachForcast, index) => (
        <Weather
          key={index}
          date={eachForcast.dt_txt}
          temp={eachForcast.main.temp}
          min={eachForcast.main.temp_min}
          max={eachForcast.main.temp_max}
          sea={eachForcast.main.sea_level}
          humidity={eachForcast.main.humidity}
          feels_like={eachForcast.main.feels_like}
        />
      ))}
    </div>
  );
};

export default Home;
