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

    // remove __typename field
    const itemInputs = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i].__typename) {
        const { __typename, ...rest } = items[i];
        itemInputs.push(rest);
      }
    }
    // setState updatingItems to send PATCH request
    setUpdatingItems((oldData) => {
      let isNew = true;
      let updatedData = oldData.map((row) => {
        if (row._id === itemId) {
          isNew = false;
          return { ...itemInputs[rowIndex], ...updatingCells };
        }
        return row;
      });

      if (!isNew) return updatedData;
      else return [...oldData, { ...itemInputs[rowIndex], ...updatingCells }];
    });

    resolve("success");
  });
};
