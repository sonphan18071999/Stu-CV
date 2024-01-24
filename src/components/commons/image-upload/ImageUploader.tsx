// ImageUploader.tsx
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserInformation, setUserInformation } from '../../../redux/reducer/userInformationSlice';
import { useAppDispatch } from '../../../redux';
import { RootState } from '../../../app/store';
import { ImageUploaderProps } from '../../../models/imageUploaderProps';
import API_CONFIG from '../../../env';
const imagePath = require('../../../core/assets/images/avatar.png');
const { Uploader } = require("uploader");

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {

  const [imageUrl, setImageUrl] = useState<string>(imagePath);
  const userInfo = useSelector(selectUserInformation);
  const dispatch = useAppDispatch();
  const uploader = Uploader({ apiKey: API_CONFIG.development.apiKey });

  useEffect(() => {
    dispatch(setUserInformation({ ...userInfo, avatar: imageUrl }));
  }, [imageUrl])

  const handleUploadImage = async () => {
    uploader.open({ multi: false }).then((files: any[]) => {
      if (files.length) {
        const imageUrl = files[0].fileUrl;
        setImageUrl(imageUrl);
        onImageUpload(imageUrl);
      }
    }).catch((err: any) => {
      console.error(err);
    });
  }

  return (
    <div>
      <img onClick={handleUploadImage} src={imageUrl} alt='Your image upload show as below' className='my-2' width={310} height={50} />
    </div>
  );
};

export default ImageUploader;
