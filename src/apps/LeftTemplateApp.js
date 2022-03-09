import React from 'react';
import LeftTemplate from "../components/templates/LeftTemplate";
import ListTemplate from "../components/templates/ListTemplate";
import SearchLayer from "../components/layers/SearchLayer";
import TableLayer from "../components/layers/TableLayer";
import SearchField from "../components/fields/SearchField";
import TreeList from "../components/atoms/list/TreeList";
import TableList from "../components/atoms/list/TableList";

function LeftTemplateApp(props) {
  return (
    <LeftTemplate>
      <TreeList/>
      <ListTemplate>
        <SearchLayer>
          <SearchField/>
          <SearchField/>
          <SearchField/>
          <SearchField/>
        </SearchLayer>
        <TableLayer>
          <TableList/>
        </TableLayer>
      </ListTemplate>
    </LeftTemplate>
  );
}

export default LeftTemplateApp;