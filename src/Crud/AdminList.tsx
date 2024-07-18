import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link, useLoaderData } from "react-router-dom";
import { Product } from "src/type/interface";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import HeaderAdmin from "./HeaderAdmin";

export default function List() {
  const products = useLoaderData() as Product[];
  const Delete = (id: string | number) => {
    try {
      if (confirm("Bạn chắc chắn muốn xoá?")) {
        axios
          .delete(`http://localhost:3000/products/${id}`)
          .then((response) => {
            alert("Xoá thành công");
          });
      }
    } catch (error) {
      console.error("Lỗi khi xoá này:", error);
    }
  };
  return (
  <>
  <HeaderAdmin/>
  <Link to='/add'><Button sx={{ bgcolor: "green", color: "white" }}>Add</Button></Link>
      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Stt</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Brand</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">{item.title}</TableCell>
                <TableCell align="center">{item.price}</TableCell>
                {/* <TableCell align="center">{item.quantity}</TableCell> */}
                <TableCell align="center">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={70}
                    height={70}
                  />
                </TableCell>
                <TableCell align="center">{item.brand}</TableCell>
                <TableCell align="center">
                  <Button
                    onClick={() => Delete(item.id)}
                    sx={{
                      color: "red",
                      textAlign: "center",
                      bgcolor: "",
                      marginRight: 1,
                    }}
                    startIcon={<DeleteIcon />}
                  ></Button>
                  <Link to={`/edit/${item.id}`}>
                    <Button sx={{ bgcolor: "yellow", color: "black" }}>
                      Edit
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  </>
  
  );
}
