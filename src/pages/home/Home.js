import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import logoGapsi from "../../assets/pages/gapsi.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css"

const home = () => {
  return (
    <div className="col d-flex justify-content-center home-section">
      <Card className="text-center" style={{ width: "27rem" }}>
        <Card.Img variant="top" src={logoGapsi} className="p-5" />
        <Card.Body>
          <Card.Title>Bienvenido candidato 01</Card.Title>
          <Button href="/list-suppiers" variant="primary">Continuar</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default home;
