// ImageUploader.tsx
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserInformation, setUserInformation } from '../../../redux/reducer/userInformationSlice';
import { useAppDispatch } from '../../../redux';
import { RootState } from '../../../app/store';
import { ImageUploaderProps } from '../../../models/imageUploaderProps';
const imagePath = require('../../../core/assets/images/avatar.png');
const { Uploader } = require("uploader");

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const userInformation = useSelector(
    (state: RootState) => state.userInformation
  );

  const [imageUrl, setImageUrl] = useState<string>(imagePath);
  const userInfo = useSelector(selectUserInformation);
  const dispatch = useAppDispatch();
  const uploader = Uploader({
    apiKey: "public_FW25brmCEYoHd9m4mUuRvU9Uffmb"
  });

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
