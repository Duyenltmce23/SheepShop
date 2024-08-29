import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import React from 'react';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import {
  LocationOnOutlined,
  MailLockOutlined,
  MailOutlineOutlined,
  MailOutlineRounded,
  MailRounded,
  MailTwoTone,
  TextsmsRounded,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <div>
      <div className=' border-t rounded-t-3xl shadow-md-top'>
        <div className='mx-36 mt-5'>
          <div className='flex justify-between items-center '>
            <div className='flex w-2/12'>
              <img
                src='src/assets/images/logo/vecteezy_facebook-png-icon_16716447.png'
                alt='facebook-png-icon'
                className='w-10 h-10 mr-4'
              />
              <img
                src='src/assets/images/logo/vecteezy_instagram-icon-png_16716469.png'
                alt='instagram-icon-png'
                className='w-10 h-10 mr-4'
              />
              <img
                src='src/assets/images/logo/vecteezy_tiktok-png-icon_16716450.png'
                alt='tiktok-png-icon'
                className='w-10 h-10'
              />
            </div>
            <div>
              <img
                src='src/assets/images/logo/sheepLogo.jfif'
                alt='sheepLogo'
                className='w-16'
              />
              <img
                src='src/assets/images/logo/sheepTitle.png'
                alt='sheepTitle'
                className='w-16'
              />
            </div>
            <div>
              <div className='flex '>
                <img
                  src='src/assets/images/logo/MoMo_Logo.png'
                  alt='MoMo_Logo'
                  className='w-10 h-10 mr-4'
                />
                <img
                  src='src/assets/images/logo/Logo-GHN-Text.webp'
                  alt='Logo-GHN'
                  className='w-10 h-10 mr-4'
                />
                <img
                  src='src/assets/images/logo/SENDO.png'
                  alt='SENDO'
                  className='w-10 h-10'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-between px-36 border-t pt-5 '>
          <div className='w-1/9'>
            <p className='font-semibold mb-3'>Liên hệ</p>
            <div className='flex mb-2'>
              <PhoneInTalkRoundedIcon sx={{ color: 'green' }} />
              <p className='ml-2'>0702813601</p>
            </div>
            <div className='flex mb-2'>
              <LocationOnOutlined sx={{ color: 'red' }} />
              <p className='ml-1'>
                Ấp Trường Thọ 1, xã Trường Long, huyện Phong Điền, thành phố Cần
                Thơ
              </p>
            </div>
            <div className='flex mb-2'>
              <TextsmsRounded sx={{ color: 'blue' }} />
              <p className='ml-2'>0702813601 (Zalo)</p>
            </div>
            <div className='flex mb-2'>
              <MailRounded sx={{ color: 'orange' }} />
              <p className='ml-2'>ltmduyen2k3@gmail.com</p>
            </div>
          </div>
          <div className=''>
            <p className='font-semibold mb-3'>Công ty</p>
            <a className='hover:text-red-600' href='#'>
              Về chúng tôi
            </a>
            <br />
            <a className='hover:text-red-600' href='#'>
              Tin tức
            </a>
          </div>

          <div>
            <p className='font-semibold mb-3'>Chính sách</p>
            <a className='hover:text-red-600' href='#'>
              Chính sách thanh toán
            </a>
            <br />
            <a className='hover:text-red-600' href='#'>
              Chính sách bảo hành, đổi trả
            </a>
            <br />
            <a className='hover:text-red-600' href='#'>
              Chính sách mua hàng
            </a>
            <br />
          </div>
        </div>
      </div>
      <p className='text-center p-4 text-gray-500 text-xs'>Bản quyền thuộc về công ty TNHH SheepShop</p>
    </div>
  );
};

export default Footer;
