import React from "react";
import { Input } from "reactstrap";

export default function SearchBar() {
  return (
    <div>
      <Input
        className="mt-3"
        id="exampleEmail"
        name="search"
        placeholder="Search..."
        type="text"
      />
    </div>
  );
}
