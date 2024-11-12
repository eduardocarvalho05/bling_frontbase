import React, { useState } from 'react';
import Link from 'next/link';
import { StyledButton, StyledMenu, StyledMenuItem } from '../menuDropDown/style';


const DropdownMenu = ({ buttonTitle, menuList }) => {
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <StyledButton
        aria-controls={open ? 'dropdown-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseEnter={handleMouseEnter}
        sx={{
          color: 'white',
          backgroundColor: '#2ecc71',
          borderRadius: '8px',
          padding: '8px 16px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            backgroundColor: '#27ae60',
            boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        {buttonTitle}
      </StyledButton>
      <StyledMenu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ 'aria-labelledby': 'dropdown-button' }}
        PaperProps={{ onMouseLeave: handleClose }}
      >
        {menuList.map((menuItem, index) => (
          <StyledMenuItem
            key={index}
            component={Link}
            href={menuItem.href}
            onClick={handleClose}
          >
            {menuItem.value}
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </>
  );
};

export default DropdownMenu;
