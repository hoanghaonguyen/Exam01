import React, { useState } from "react";
import { Row, Col, Label, Input, Button } from "reactstrap";

export default function AddChemical(props) {
  const { handle_Add } = props;
  //tên hợp chất
  const [name, setName] = useState("");
  const [formula, setFormula] = useState("");

  const add = () => {
    if (name.trim() === "" || formula.trim() === "") return;
    handle_Add({name: name, formula: formula});
    setName("");
    setFormula("");
  };
  return (
    <Row className="row-cols-lg-auto g-3 align-items-center my-3">
      <Col>
        <Label className="visually-hidden" for="exampleEmail">
          Email
        </Label>
        <Input
          id="exampleEmail"
          name="name"
          placeholder="Nhập tên hợp chất..."
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Col>
      <Col>
        <Label className="visually-hidden" for="examplePassword">
          Password
        </Label>
        <Input
          id="examplePassword"
          name="formula"
          placeholder="Công thức..."
          type="text"
          value={formula}
          onChange={(e) => setFormula(e.target.value)}
        />
      </Col>

      <Col>
        <Button color="primary" onClick={() => add()}>
          Thêm mới
        </Button>
      </Col>
    </Row>
  );
}
