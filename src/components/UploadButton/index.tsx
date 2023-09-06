import React from 'react';
import s from '@/styles/Home.module.scss';
import { Button, Upload, UploadFile, notification } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';

import * as Api from '@/api';

export const UploadButton: React.FC = () => {
  const [fileList, setFileList] = React.useState<UploadFile[]>([]);

  const onUploadSuccess = async (options: any) => {
    try {
      await Api.files.uploadFile(options);

      setFileList([]);

      // window.location.reload();
    } catch (err) {
      notification.error({
        message: 'Error!',
        description: 'Upload file error!',
        duration: 2,
      });
    }
  };

  return (
    <Upload
      customRequest={onUploadSuccess}
      fileList={fileList}
      onChange={({ fileList }) => setFileList(fileList)}
      className={s.upload}
    >
      <Button type="primary" icon={<CloudUploadOutlined />} size="large">
        Upload File
      </Button>
    </Upload>
  );
};
