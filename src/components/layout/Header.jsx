import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { Modal, Paper } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link } from 'react-router-dom';

const Header = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <div>
      <div className='flex justify-between mx-32 h-16'>
        <div className='flex items-center w-1/5 justify-center'>
          <img
            className='w-1/6 h-12'
            src='src/assets/images/logo/sheepLogo.jfif'
            alt='sheepLogo'
          />
          <img
            className='w-1/4'
            src='src/assets/images/logo/sheepTitle.png'
            alt='sheepTitle'
          />
        </div>
        <ul className='flex w-1/3 items-center'>
          <li className='pr-10 hover:text-red-600 font-semibold'>
            <li className=' hover:text-red-600 font-semibold'>
              <Link to='/' className=' hover:border-b-2 hover:border-red-600'>
                TRANG CHỦ
              </Link>
            </li>
          </li>
          <li className='pr-10 hover:text-red-600 font-semibold'>
            <Link to='/nu' className=' hover:border-b-2 hover:border-red-600'>
              NỮ
            </Link>
          </li>
          <li className='pr-10 hover:text-red-600 font-semibold'>
            <Link to='/nam' className=' hover:border-b-2 hover:border-red-600'>
              NAM
            </Link>
          </li>
        </ul>
        <div className='w-1/3 flex items-center'>
          <div
            className='border-b  border-neutral-950 w-3/4'
            onClick={() => setOpenSearch(!openSearch)}
          >
            <input type='text' placeholder='Tìm kiếm' className='w-5/6' />
            <SearchIcon />
          </div>
          <div className='flex justify-between'>
            <PermIdentityIcon className='ml-5' />
            <LocalGroceryStoreOutlinedIcon className='ml-5' />
          </div>
        </div>
      </div>

      <Modal open={openSearch}>
        <Paper className='h-28'>
          <div className='flex justify-center '>
            <div className='border-b mt-10  border-neutral-950 w-1/2 '>
              <SearchIcon />
              <input
                type='text'
                placeholder='Tìm kiếm sản phẩm'
                className='w-5/6'
                onChange={(e) => setSearch(e.target.value)}
              />
              <CloseRoundedIcon onClick={() => setOpenSearch(!openSearch)} />
            </div>
          </div>
        </Paper>
      </Modal>
    </div>
  );
};

export default Header;
