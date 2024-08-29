import { CloseRounded, KeyboardArrowRightRounded } from '@mui/icons-material';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Filter = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className='px-20 my-6 flex py-5 bg-red-700'>
        <Link to='/' className='text-red-200'>
          Trang chủ
        </Link>
        <KeyboardArrowRightRounded className='text-red-200' />
        <p className='text-white'>Nam</p>
      </div>
      <div className='flex justify-between mx-20 items-end'>
        <div className='flex w-5/6'>
          <div className='w-1/8 mr-5'>
            <FormControl fullWidth>
              <InputLabel>Danh mục</InputLabel>
              <Select onChange={() => setShow(true)} label='Danh mục'>
                <MenuItem value='1'>1</MenuItem>
                <MenuItem value='2'>2</MenuItem>
                <MenuItem value='3'>3</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='w-1/8 mr-5'>
            <FormControl onChange={() => setShow(true)} fullWidth>
              <InputLabel>Giá</InputLabel>
              <Select label='Giá'>
                <MenuItem value='1'>1</MenuItem>
                <MenuItem value='2'>2</MenuItem>
                <MenuItem value='3'>3</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='w-1/8'>
            <FormControl onChange={() => setShow(true)} fullWidth>
              <InputLabel>Hàng mới nhất</InputLabel>
              <Select label='Hàng mới nhất'>
                <MenuItem value='1'>1</MenuItem>
                <MenuItem value='2'>2</MenuItem>
                <MenuItem value='3'>3</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div>
          <p className='text-neutral-400 text-sm'>388 sản phẩm</p>
        </div>
      </div>
      {show && (
        <div className='mx-20 mt-5'>
          <div className='flex justify-between'>
            <p>Bạn đã chọn</p>
            <p className='font-semibold text-red-700'>Xóa tất cả</p>
          </div>
          <div
            className='w-1/12 border py-1 px-5 rounded-full bg-neutral-100
           text-sm mt-3 flex items-center'
          >
            <p className='mr-2'>Quần</p>
            <CloseRounded
              className='hover:text-red-700'
              onClick={() => setShow(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
