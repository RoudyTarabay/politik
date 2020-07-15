import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import useAxiosApi from "./hooks/useAxiosApi";
import Table from "./components/table";
import Container from "@material-ui/core/Container";

function App() {
  const [councillors] = useAxiosApi({
    url: "http://ws-old.parlament.ch/councillors/basicdetails/session",
  });
  const [councillorTableData, setCouncillorTableData] = useState([]);
  useEffect(() => {
    setCouncillorTableData(councillors);
    console.log("settingcouncillortable");
  }, [councillors]);
  return (
    <div className="App">
      <Container>
        <Table
          data={councillorTableData}
          title={"Councillors"}
          columns={[
            { field: "id", title: "ID", isSortable: true },
            {
              field: "number",
              title: "Number",
              sorting: false,
              searchable: false,
            },
            { field: "firstName", title: "First Name", isSortable: true },
            { field: "lastName", title: "Last Name", isSortable: true },
            {
              field: "biographyUrl",
              title: "Biography Url",
              sorting: false,
              searchable: false,
            },
            {
              field: "canton",
              title: "Canton",
              sorting: false,
              searchable: false,
            },
            {
              field: "cantonName",
              title: "Canton Name",
              sorting: false,
              searchable: false,
            },
            {
              field: "council",
              title: "Council",
              sorting: false,
              searchable: false,
            },
            {
              field: "faction",
              title: "Faction",
              sorting: false,
              searchable: false,
            },
            {
              field: "factionName",
              title: "Faction Name",
              sorting: false,
              searchable: false,
            },
            {
              field: "function",
              title: "Function",
              sorting: false,
              searchable: false,
            },
            {
              field: "homepage",
              title: "Homepage",
              sorting: false,
              searchable: false,
            },
            {
              field: "party",
              title: "Party",
              sorting: false,
              searchable: false,
            },
            {
              field: "partyName",
              title: "Party Name",
              sorting: false,
              searchable: false,
            },
            {
              field: "pictureUrl",
              title: "Picture Url",
              sorting: false,
              searchable: false,
            },
            {
              field: "updated",
              title: "Updated",
              sorting: false,
              searchable: false,
            },
          ]}
        ></Table>
      </Container>
    </div>
  );
}

export default App;
