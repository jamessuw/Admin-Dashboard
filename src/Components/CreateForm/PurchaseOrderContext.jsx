import React, { createContext, useContext, useState } from 'react';

const PurchaseOrderContext = createContext();

export const usePurchaseOrderContext = () => {
  return useContext(PurchaseOrderContext);
};

const PurchaseOrderProvider = ({ children }) => {
  const [purchaseOrderData, setPurchaseOrderData] = useState([]);

  const addPurchaseOrderData = (data) => {
    setPurchaseOrderData([...purchaseOrderData, data]);
  };

  return (
    <PurchaseOrderContext.Provider value={{ purchaseOrderData, addPurchaseOrderData }}>
      {children}
    </PurchaseOrderContext.Provider>
  );
};

export default PurchaseOrderProvider;
