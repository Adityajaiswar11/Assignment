import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function BasicTable() {
  const [localUsers, setLocalUsers] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("users"); // fetching users from local storage
    if (storedData) {
      setLocalUsers(JSON.parse(storedData));
    }
  }, []);

  // Update localStorage whenever users data changes
  const users = useSelector((state) => state.userData);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users)); //  store user data locally in localStorage
    setLocalUsers(users);
  }, [users]);

  return (
    <>
      <h1 className="text-2xl font-semibold text-center  py-3">Users List</h1>
      <div className="md:px-5">
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 400 }}
            md={{ minWidth: 600 }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Password</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {localUsers?.map((user) => (
                <TableRow
                  key={user?.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user?.id}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {user?.name}
                  </TableCell>
                  <TableCell align="right">{user?.email}</TableCell>
                  <TableCell align="right">{user?.password}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
