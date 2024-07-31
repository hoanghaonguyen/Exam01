import React from "react";
import { Button } from "reactstrap";
import EditChemical from "./EditChemical";

export default function ChemicalItem(props) {
  //Nhan props tu ChemicalApp component
  const { chemical, handle_Delete } = props;
  return (
    <tr>
      <th scope="row">{chemical.id}</th>
      <td>{chemical.name}</td>
      <td>{chemical.formula}</td>
      <td>
        <Button color="danger" onClick={() => handle_Delete(chemical.id)}>
          Delete
        </Button>
      </td>
      <td>
        <EditChemical/>
      </td>
    </tr>
  );
}


