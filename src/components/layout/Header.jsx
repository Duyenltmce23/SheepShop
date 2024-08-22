import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { Modal, Paper } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Header = () => {
      const [search,setSearch]=useState(false)

  return (
    <div>
        <div className='flex justify-between mx-32 h-16'>
          <div className='flex items-center w-1/5 justify-center'>
              <img className='w-1/6 h-12'
              src="src/assets/images/commons/sheepLogo.jfif" alt="sheepLogo" />
              <img className='w-1/4'
               src="src/assets/images/commons/sheepTitle.png" alt="sheepTitle" />
          </div>
            <ul className='flex w-1/3 items-center'>
              <li className='pr-20 hover:text-red-600 font-semibold'>
                <a href="#">TRANG CHỦ</a>
              </li>
              <li className='pr-20 hover:text-red-600 font-semibold'>
                <a href="#">NỮ</a>
              </li>
              <li className='pr-20 hover:text-red-600 font-semibold'>
                <a href="#">NAM</a>
              </li>
             
            </ul>
          <div className='w-1/3 flex items-center'>
            <div className='border-b  border-neutral-950 w-3/4'
            onClick={()=>setSearch(!search)}>
              <input type="text" placeholder='Tìm kiếm'
              className='w-5/6' />
              <SearchIcon />
            </div>
            <div className='flex justify-between'>
                <PermIdentityIcon className='ml-5'/>
                <LocalGroceryStoreOutlinedIcon className='ml-5'/>
            </div>
          </div>
        </div>

        
          <Modal open={search}>
          <Paper className='h-28'>
            <div className='flex justify-center '>
               <div className='border-b mt-10  border-neutral-950 w-1/2 '>
                <SearchIcon />
                  <input type="text" placeholder='Tìm kiếm'
                  className='w-5/6' />
                  <CloseRoundedIcon onClick={()=>setSearch(!search)}/>
               </div>
              </div>
          </Paper>
        </Modal>
       
    </div>
  )
}

export default Header