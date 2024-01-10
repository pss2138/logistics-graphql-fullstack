import React, { useEffect, useMemo, useRef, useState } from "react";
import * as GlobalStyles from "../../style/global";
import { toastError, toastInfo, toastSuccess } from "../../style/styleUtils";
import useUploadOrders from "../../apis/order/useUploadOrders";
import PageHeader from "../../components/Global/PageHeader";
import AddItemsArea from "../../components/Global/AddItemsArea";
import TableListArea from "../../components/Global/TableListArea";
import {
  errorMsgs,
  infoMsgs,
  itemTypes,
  orderColumn,
  successMsgs,
} from "../../utils/variables";
import { handleUpdateItems } from "../../utils/tableUtils";
import useOrders from "../../apis/order/useOrders";
import useDeleteOrders from "../../apis/order/useDeleteOrders";
import useUpdateOrders from "../../apis/order/useUpdateOrders";
import ConfirmModal from "../../components/Global/Modals/ConfirmModal";

const OrderMngPage = () => {
  ////////////////
  // UI
  ////////////////

  ////////////////
  // Data
  ////////////////
  const [orders, setOrders] = useState([]);
  const columns = useMemo(() => {
    return orderColumn;
  }, []);
  const tableRows = useMemo(() => orders, [orders]);
  const queryOrders = useOrders();
  const uploadOrdersMutation = useUploadOrders();

  const retrieveOrders = async () => {
    if (queryOrders.data?.orders && orders.length < 1) {
      setOrders(queryOrders.data.orders);
    }
  };

  useEffect(() => {
    retrieveOrders();
  }, [queryOrders]);

  ////////////////
  // Update orders
  ////////////////
  const [updatingOrders, setUpdatingOrders] = useState([]);
  const updateOrdersMutation = useUpdateOrders();

  const handleUpdateOrders = async (rowIndex, itemId, updatingCells) => {
    handleUpdateItems({
      rowIndex,
      itemId,
      updatingCells,
      items: orders,
      setItems: setOrders,
      setUpdatingItems: setUpdatingOrders,
    });
  };

  const saveUpdatingOrders = (e) => {
    e.preventDefault();
    if (updatingOrders.length > 0) {
      updateOrdersMutation.mutate(updatingOrders);

      if (updateOrdersMutation.isError) {
        toastError(errorMsgs.ITEM_SAVE_FAILED.message);
      } else if (updateOrdersMutation.isSuccess) {
        toastSuccess(successMsgs.ITEM_SAVE_SUCCESSED.message);
        setUpdatingOrders([]);
      }
    } else {
      toastInfo(infoMsgs.ITEM_NOT_UPDATED.message);
    }
  };

  ////////////////
  // Delete orders
  ////////////////
  const deleteModalRef = useRef(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingOrders, setDeletingOrders] = useState([]);
  const deleteOrdersMutation = useDeleteOrders();

  const handleClickDelete = () => {
    if (deletingOrders.length > 0) {
      setIsDeleteModalOpen(true);
    } else {
      toastInfo(infoMsgs.ORDER_NOT_SELECTED.message);
    }
  };

  const requestDeleteOrders = (e) => {
    e.preventDefault();
    if (deletingOrders.length > 0) {
      deleteOrdersMutation.mutate(
        deletingOrders.map((row) => row.original._id)
      );
      if (deleteOrdersMutation.isError) {
        toastError(errorMsgs.ITEM_DELETE_FAILED.message);
      }
      setDeletingOrders([]);
    }
  };

  return (
    <>
      <GlobalStyles.Container>
        <PageHeader title="Order Management" />

        <GlobalStyles.PageContainer>
          <AddItemsArea
            itemType={itemTypes.order}
            itemsNum={orders.length}
            setItems={setOrders}
            uploadItemsMutation={uploadOrdersMutation}
          />
          <TableListArea
            columns={columns}
            data={tableRows}
            isUpdateItemsLoading={updateOrdersMutation.isLoading}
            handleUpdateItems={handleUpdateOrders}
            saveUpdatingItems={saveUpdatingOrders}
            isDeleteModalOpen={isDeleteModalOpen}
            handleClickDelete={handleClickDelete}
            deleteItemsMutation={deleteOrdersMutation}
            setDeletingItems={setDeletingOrders}
          />
        </GlobalStyles.PageContainer>
      </GlobalStyles.Container>
      {isDeleteModalOpen && (
        <ConfirmModal
          itemText={"Order"}
          actionText={"Delete"}
          modalRef={deleteModalRef}
          handleClickConfirm={requestDeleteOrders}
          setIsModalOpen={setIsDeleteModalOpen}
        />
      )}
    </>
  );
};

export default OrderMngPage;
