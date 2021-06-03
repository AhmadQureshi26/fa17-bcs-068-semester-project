import React, { useEffect } from "react";
import MaterialTable from "material-table";
import axios from "axios";
import store from "../store/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Product name", field: "productName" },
      { title: "Customer name", field: "customerName" },
      { title: "Date", field: "date", type: "date" },
      {
        title: "Stock",
        field: "stock",
      },
    ],
    data: [],
  });

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "stock", {
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
        // alert("Error loading stocks!");
        notify("Error loading stocks!", false);
      });
  }, []);

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

  return (
    <>
      <ToastContainer />
      <MaterialTable
        title="Stock record"
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              console.log(newData);
              axios
                .post(
                  process.env.REACT_APP_API_URL + "stock",
                  { ...newData, date: newData.date.toString() },
                  {
                    headers: {
                      authorization: store.getState().authReducer.token,
                    },
                  }
                )
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
                  notify("stock added Successfully", true);
                  // alert("stock added Successfully");
                  console.log(state.data);
                })
                .catch((e) => {
                  console.log(e);
                  reject();
                  notify("error saving stock", false);
                  // alert("error saving stock");
                });
            }),

          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              console.log(oldData);
              axios
                .put(
                  process.env.REACT_APP_API_URL + `stock/${oldData._id}`,
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
                  notify("stock updated Successfully", true);

                  // alert("Successfully updated stock");
                })
                .catch((e) => {
                  console.log(e);
                  reject();
                  notify("Error updating stock", false);

                  // alert("Error updating stock");
                });
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              axios
                .delete(
                  process.env.REACT_APP_API_URL + `stock/${oldData._id}`,
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
                  notify("Successfully deleted stock", true);
                  // alert("Successfully deleted stock ");
                })
                .catch((e) => {
                  console.log(e);
                  reject();
                  notify("Error deleting record!", false);
                  // alert("Error deleting record!");
                });
            }),
        }}
      />
    </>
  );
}
