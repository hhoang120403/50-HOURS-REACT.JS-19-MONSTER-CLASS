import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState(
    'https://cdn.oneesports.gg/cdn-data/2025/01/Gachiakuta_Volume1ColoredRudo.jpg'
  );

  const [profileUrl, setProfileUrl] = useState(
    'https://pbs.twimg.com/profile_images/1212849138796240922/w0tsPxjo_400x400.jpg'
  );

  const handleBannerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];

    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];

    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className='relative w-[94%] ml-[5rem]'>
      <div className='relative'>
        <img
          src={bannerUrl}
          alt='Background image'
          className='w-full h-60 object-cover'
        />

        <button className='absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600'>
          <label htmlFor='banner-upload' className='cursor-pointer'>
            <FaCamera size={24} />
          </label>

          <input
            type='file'
            id='banner-upload'
            accept='image/*'
            className='hidden'
            onChange={handleBannerChange}
          />
        </button>
      </div>

      <div className='flex items-center ml-4 mt-[2rem]'>
        <img
          src={profileUrl}
          alt='Channel Logo'
          className='w-40 h-40 object-cover rounded-full border-white relative'
        />
        <button className='absolute ml-[3.8rem] z-10 mt-[9rem] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600'>
          <label htmlFor='profile-upload' className='cursor-pointer'>
            <FaCamera size={24} />
          </label>

          <input
            type='file'
            id='profile-upload'
            accept='image/*'
            className='hidden'
            onChange={handleProfileChange}
          />
        </button>

        {/* Channel Details */}
        <div className='ml-4 mt-4'>
          <h1 className='text-2xl font-bold'>Huy Hoang</h1>
          <p>1M views</p>
          <p className='mt-2'>
            This is a short description of Youtube channel. It gives an overview
            of the content and what viewers can expect.
          </p>
          <button className='mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
export default Profile;
