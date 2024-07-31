import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  chemicals: [
    {
      id: 1,
      name: "Ethanon",
      formula: "C2H5OH",
    },
    {
      id: 2,
      name: "Amomonia",
      formula: "NH3",
    },
    {
      id: 3,
      name: "Sulfuric Acid",
      formula: "H2SO4",
    },
    {
      id: 4,
      name: "Sulfuric Acid",
      formula: "H2SO4",
    },
    {
      id: 5,
      name: "Sulfuric Acid",
      formula: "H2SO4",
    },
  ],
};

if(localStorage.getItem(("chemicals"))){
    initialState.chemicals = JSON.parse(localStorage.getItem("chemicals"));
}

const chemicalSlice = createSlice({
  name: "chemicals",
  initialState,
  reducers: {
    // Them 1 hop chat moi
    addChemical(state, action) {
      let idMax = state.chemicals.reduce(
        (max_value, chemical) => Math.max(max_value, chemical.id),
        0
      );
      state.chemicals = [
        ...state.chemicals,
        {
          id: state.chemicals.lengthe === 0 ? 1 : idMax + 1,
          ...action.payload
        }
      ];
      localStorage.setItem("chemicals", JSON.stringify(state.chemicals))
    },

    deleteChemical(state, action) {
      state.chemicals = state.chemicals.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("chemicals", JSON.stringify(state.chemicals));
    },


    editChemical(state, action) {
        state.chemicals = state.chemicals.map(
          (item) => item.id === action.payload?{...item,...action.payload}:item
        );
        localStorage.setItem("chemicals", JSON.stringify(state.chemicals));
    }
  },
});

export const { addChemical, deleteChemical, editChemical } = chemicalSlice.actions;
export default chemicalSlice.reducer;
