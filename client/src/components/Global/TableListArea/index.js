import React from "react";
import * as Styles from "./styles";
import TableListHeader from "../TableListHeader";
import Table from "../Table";

const TableListArea = ({
  columns,
  data,
  isUpdateItemsLoading,
  handleUpdateItems,
  saveUpdatingItems,
  isDeleteModalOpen,
  handleClickDelete,
  deleteItemsMutation,
  setDeletingItems,
}) => {
  return (
    <Styles.Container>
      <TableListHeader
        isUpdateItemsLoading={isUpdateItemsLoading}
        saveUpdatingItems={saveUpdatingItems}
        isRemoveBtnDisabled={
          isDeleteModalOpen || deleteItemsMutation?.isLoading
        }
        handleClickDelete={handleClickDelete}
      />
      <Styles.Divider />

      <Table
        columns={columns}
        data={data}
        handleUpdateItems={handleUpdateItems}
        deleteItemsMutation={deleteItemsMutation}
        setDeletingItems={setDeletingItems}
      />
      {/* TODO : after connecting to apis, handle isLoading from react-query */}
    </Styles.Container>
  );
};

export default TableListArea;
