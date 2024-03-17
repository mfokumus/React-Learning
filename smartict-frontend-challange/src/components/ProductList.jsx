import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useProducts } from "../App";
import { ToastContainer, toast } from "react-toastify";

const ProductList = () => {
  const { products, removeProduct } = useProducts();
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 250,
      editable: true,
      headerAlign: "left",
    },
    {
      field: "author",
      headerName: "Author",
      width: 190,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price (TL)",
      type: "number",
      width: 160,
      align: "center",
      headerAlign: "center",
      editable: true,
    },
    {
      field: "actions",
      headerName: "İşlem",
      width: 150,
      sortable: false,
      headerAlign: "center",
      align: "center",
      headerClassName: "bold-header",
      renderCell: (params) => {
        const handleDelete = () => {
          if (window.confirm("Bu ürünü silmek istediğinize emin misiniz?")) {
            // Ürünü silme işlemi
            removeProduct(params.id);
            toast.success("Ürün başarıyla silindi!", {
              autoClose: 2000,
            });
          }
        };

        return (
          <div className="flex justify-end">
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-5 rounded mx-2"
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-4xl">
        <DataGrid
          rows={products}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
        <ToastContainer />
      </div>
    </div>
  );
};

export default ProductList;
