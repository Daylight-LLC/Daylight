import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Navbar: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white p-2 flex items-center justify-between shadow-md">
      <div className="text-xl font-bold">
        <Link to="/" className="hover:text-blue-400 pl-6">ProjectPulse</Link>
      </div>
      <div className="flex flex-2 mx-2">
        <TextField
          variant="outlined"
          placeholder="Search..."
          InputProps={{
            endAdornment: (
              <IconButton edge="end" color="inherit">
                <SearchIcon />
              </IconButton>
            ),
          }}
          className="w-80"
          InputLabelProps={{ style: { color: 'white' } }}
        />
      </div>
      <div className="flex items-center space-x-4">
        <IconButton color="inherit">
          <AddIcon />
        </IconButton>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </div>
    </header>
  );
};

export default Navbar;
