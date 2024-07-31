import React from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { Container, Table, Button } from "reactstrap";
import ChemicalItem from "./ChemicalItem";
import AddChemical from "./AddChemical";
import {
  addChemical,
  deleteChemical,
  editChemical,
} from "../redux/chemicalSlice";

export default function ChemicalApp() {
  const dispatch = useDispatch();
  // lay danh sach cac hop chat
  const chemicals = useSelector((state) => state.chemicals.chemicals);

  const handle_Add = (chemical) => {
    dispatch(addChemical(chemical));
    Swal.fire({
      title: "Good job!",
      text: "Thêm thành công!",
      icon: "success",
    });
  };

  const handle_Delete = (id) => {
    dispatch(deleteChemical(id));
  };

  const handle_Update = (id) => {
    dispatch(editChemical(id));
  }
  return (
    <div>
      <Container className="text-center">
        <h1>Chemical App</h1>
        <AddChemical handle_Add={handle_Add} />
        <Table bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Formula</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {chemicals.map((chemical, index) => (
              //nen tach ra 1 component khac => ChemicalItem
              <ChemicalItem
                key={index}
                chemical={chemical}
                handle_Delete={handle_Delete}
                handle_Update={handle_Update}
              />
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
