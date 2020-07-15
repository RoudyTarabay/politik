import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";

export default function CustomMaterialTable(props) {
  const [state, setState] = React.useState({
    columns: [],
    data: [],
  });
  useEffect(() => {
    setState({ ...state, columns: props.columns });
  }, [props.columns]);
  useEffect(() => {
    setState({ ...state, data: props.data });
  }, [props.data]);
  console.log("state", state);
  return (
    <MaterialTable
      title={props.title}
      columns={state.columns}
      data={state.data}
    />
  );
}
