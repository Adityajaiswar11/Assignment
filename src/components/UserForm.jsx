
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { addUser } from "../features/Users";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const users = useSelector(state=> state.userData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (users.some(user => user.email === email)) {
      setErrorMessage('Email already exists'); //validate email
      return;
    }

    if (password.length > 8) {
     setErrorMessage("Password should not exceed 8 characters"); //validate password
     return ;
    }
    dispatch(addUser({ name, email, password }));

    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="form-container w-full">
      <h1 className="text-2xl font-semibold text-center  py-3">Add user Form</h1>
   
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
            className="block w-full"
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
          />
<p className={`text-red-600 text-[13px] font-medium px-2 w-full ${errorMessage==""?"hidden":"block"}`}>
            {errorMessage}
          </p>
          
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
          />
         
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="input-group"
          >
            Submit
          </Button>
            </form>

    </div>
  );
};

export default UserForm;
