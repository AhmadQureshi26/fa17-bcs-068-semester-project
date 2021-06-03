import React, { useEffect } from "react";
import MaterialTable from "material-table";
import axios from "axios";
import store from "../store/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { totalFormCalculate } from "../selectors/totalForm";

export default function MaterialTableDemo() {
  const notify = (message, status) => {
    if (status) {
      toast.success(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    toast.error(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    console.log("notify was called");
  };

  const [state, setState] = React.useState({
    columns: [
      { title: "Customer name", field: "customerName" },
      { title: "Company name", field: "companyName" },

      {
        title: "Email",
        field: "email",
      },
    ],
    data: [],
  });

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "customer", {
        headers: {
          authorization: store.getState().authReducer.token,
        },
      })
      .then(({ data }) => {
        console.log(data);
        setState((prevState) => {
          return { ...prevState, data };
        });
      })
      .catch((e) => {
        console.log(e);
        notify("Error loading customers!", false);
        // alert("Error loading stocks!");
      });
  }, []);

  return (
    <>
      <ToastContainer />
      <MaterialTable
        title="Customer record"
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              console.log(newData);
              axios
                .post(process.env.REACT_APP_API_URL + "customer", newData, {
                  headers: {
                    authorization: store.getState().authReducer.token,
                  },
                })
                .then(({ data }) => {
                  console.log("dataFromServer", data);
                  resolve();
                  setState((prevState) => {
                    const previousData = [...prevState.data];
                    console.log(newData);
                    newData = { ...newData, _id: data.id };
                    previousData.push({ ...newData });
                    return { ...prevState, data: previousData };
                  });
                  notify("Customer added Successfully", true);
                  // alert("stock added Successfully");
                  console.log(state.data);
                })
                .catch((e) => {
                  console.log(e);
                  reject();
                  notify("Error saving customer", false);
                  // alert("error saving stock");
                });
            }),

          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              console.log(oldData);
              axios
                .put(
                  `process.env.REACT_APP_API_URLcustomer/${oldData._id}`,
                  {
                    productName: newData.productName,
                    customerName: newData.customerName,
                    date: newData.date,
                    stock: newData.stock,
                  },
                  {
                    headers: {
                      authorization: store.getState().authReducer.token,
                    },
                  }
                )
                .then(({ data }) => {
                  console.log(data);
                  resolve();
                  if (oldData) {
                    setState((prevState) => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  }
                  notify("Successfully updated customer", true);

                  // alert("Successfully updated stock");
                })
                .catch((e) => {
                  console.log(e);
                  reject();
                  notify("Error updating customer", false);
                  // alert("Error updating stock");
                });
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              axios
                .delete(
                  `process.env.REACT_APP_API_URLcustomer/${oldData._id}`,
                  {
                    headers: {
                      authorization: store.getState().authReducer.token,
                    },
                  }
                )
                .then(({ data }) => {
                  console.log(data);
                  resolve();
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                  // alert("Successfully deleted stock ");
                  notify("Successfully deleted customer", true);
                })
                .catch((e) => {
                  console.log(e);
                  reject();
                  notify("Error deleting customer", false);
                  // alert("Error deleting record!");
                });
            }),
        }}
      />
    </>
  );
}
