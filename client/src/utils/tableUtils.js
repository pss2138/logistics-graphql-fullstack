export const handleUpdateItems = ({
  rowIndex,
  itemId,
  updatingCells,
  items,
  setItems,
  setUpdatingItems,
}) => {
  return new Promise((resolve, reject) => {
    // render updated Table view
    setItems((oldData) =>
      oldData.map((row, index) => {
        if (index === rowIndex) {
          return { ...oldData[rowIndex], ...updatingCells };
        }
        return row;
      })
    );

    // setState updatingItems to send PATCH request
    setUpdatingItems((oldData) => {
      let isNew = true;
      let updatedData = oldData.map((row) => {
        if (row._id === itemId) {
          isNew = false;
          return { ...items[rowIndex], ...updatingCells };
        }
        return row;
      });

      if (!isNew) return updatedData;
      else return [...oldData, { ...items[rowIndex], ...updatingCells }];
    });

    resolve("success");
  });
};
