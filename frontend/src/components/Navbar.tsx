import React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const textFieldStyles = {
  borderRadius: '9999px', // Round corners
  width: '100%', // Full width of the container
  '& .MuiOutlinedInput-root': {
    borderRadius: '9999px', // Round corners
    '& fieldset': {
      borderColor: 'white', // Border color
    },
    '&:hover fieldset': {
      borderColor: 'white', // Border color on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white', // Border color when focused
    },
    '& input': {
      padding: '8px 12px', // Adjust padding to control height
      fontSize: '0.875rem', // Adjust font size to control height
      height: '1.5rem', // Explicitly set input height
    },
  },
  '& .MuiInputBase-input': {
    color: 'white', // Input text color
  },
  '& .MuiFormLabel-root': {
    color: 'white', // Label color
  },
};

const Navbar: React.FC<{ toggleSidebar: () => void }> = ({ toggleSidebar }) => {
  return (
    <header className={`bg-blue-500 text-white w-full p-2 flex items-center ${window.innerWidth > 768 ? 'justify-between': 'justify-end'} shadow-md`}>
      {window.innerWidth > 768 && (
        <IconButton color="inherit" onClick={toggleSidebar}>
          <MenuOutlinedIcon />
        </IconButton>
      )}

      <div className="flex items-center space-x-2">
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
              style: {
                color: 'white', // Text color
              },
            }}
            InputLabelProps={{ 
              style: { color: 'white' }, 
            }}
            sx={textFieldStyles}
            className="w-64"
          />
        </div>
        <IconButton color="inherit">
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </div>
    </header>
  );
};

export default Navbar;
