import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useProducts } from "../App";
import { ToastContainer, toast } from "react-toastify";
import { Box, Typography } from "@mui/material";

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
    <Box
      sx={{
        width: "100%",
        overflowX: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: 2, md: 4 }, // Mobil cihazlarda 2, diğerlerinde 4 iç boşluk
      }}
    >
      <Typography
        variant="h6"
        component="h3"
        sx={{
          textAlign: "center",
          mt: { xs: 6, md: 12 }, // Mobil cihazlarda 6, diğerlerinde 12 marjı
          mb: 5,
        }}
      >
        Product Manager
      </Typography>
      <div className="max-w-screen-lg mx-auto">
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
          stickyHeader
        />
      </div>
      <ToastContainer />
    </Box>
  );
};

export default ProductList;
