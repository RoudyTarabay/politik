import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import useAxiosApi from "./hooks/useAxiosApi";
import Table from "./components/table";
import Container from "@material-ui/core/Container";
import { spacing } from "@material-ui/system";

function App() {
  const [councillors] = useAxiosApi({
    url: "http://ws-old.parlament.ch/councillors/basicdetails/session",
  });
  const [councils] = useAxiosApi({
    url: "http://ws-old.parlament.ch/councils",
  });
  const [affairs] = useAxiosApi({
    url: "http://ws-old.parlament.ch/affairs",
  });
  const [councillorTableData, setCouncillorTableData] = useState(
    councillors || []
  );
  const [councilsTableData, setCouncilsTableData] = useState(councils || []);
  const [affairsTableData, setAffairsTableData] = useState(affairs || []);

  useEffect(() => {
    setCouncillorTableData(councillors);
  }, [councillors]);

  useEffect(() => {
    setCouncilsTableData(councils);
  }, [councils]);

  useEffect(() => {
    setAffairsTableData(affairs);
  }, [affairs]);
  return (
    <div className="App">
      <Container pt={4}>
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
              type: "date",
            },
          ]}
        ></Table>
      </Container>
      <Container style={{ marginTop: "50px" }}>
        <Table
          data={councilsTableData}
          title={"Councils"}
          columns={[
            { field: "id", title: "ID", sorting: false, searching: false },
            {
              field: "abbreviation",
              title: "Abbreviation",
              sorting: false,
              searchable: false,
            },
            { field: "code", title: "Code", sorting: false, searching: false },
            { field: "name", title: "Name" },
            {
              field: "type",
              title: "Type",
              sorting: false,
              searching: false,
            },
          ]}
        ></Table>
      </Container>
      <Container style={{ marginTop: "50px" }}>
        <Table
          data={affairsTableData}
          title={"Affairs"}
          columns={[
            { field: "id", title: "ID", sorting: false, searching: false },
            {
              field: "shortId",
              title: "Short ID",
              sorting: false,
              searchable: false,
            },
            { field: "updated", title: "Updated", type: "date" },
          ]}
        ></Table>
      </Container>
    </div>
  );
}

export default App;
