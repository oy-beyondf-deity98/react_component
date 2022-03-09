import React from 'react';
import SearchLayer from "../components/layers/SearchLayer";
import SearchField from "../components/fields/SearchField";
import TableLayer from "../components/layers/TableLayer";
import TableList from "../components/atoms/list/TableList";
import ListTemplate from "../components/templates/ListTemplate";
import UserLayout from "../components/layouts/userLayout";

function ListTemplateApp(props) {
  return (
    <UserLayout>
      <ListTemplate>
        <SearchLayer>
          <SearchField label={"첫번째 필드"}/>
          <SearchField/>
          <SearchField/>
          <SearchField/>
        </SearchLayer>
        <TableLayer>
          <TableList/>
        </TableLayer>
      </ListTemplate>
    </UserLayout>
  );
}

export default ListTemplateApp;