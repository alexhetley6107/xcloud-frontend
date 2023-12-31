import React from 'react';
import s from './FileCard.module.scss';
import { FileTextOutlined } from '@ant-design/icons';
import { getExtensionFromFileName } from '@/utils/getExtentionFromFileName';
import { isImage } from '@/utils/isImage';
import { getColorByExtension } from '@/utils/getColorByExtention';

interface FileCardProps {
  filename: string;
  originalName: string;
}

export const FileCard: React.FC<FileCardProps> = ({
  originalName,
  filename,
}) => {
  const ext = getExtensionFromFileName(filename);
  const imageUrl =
    ext && isImage(ext) ? 'http://localhost:7777/uploads/' + filename : '';

  const color = getColorByExtension(ext);
  const classColor = s[color];

  return (
    <div className={s.root}>
      <div className={s.icon}>
        <i className={classColor}>{ext}</i>
        {isImage(ext) ? (
          <img className={s.image} src={imageUrl} alt="File" />
        ) : (
          <FileTextOutlined />
        )}
      </div>
      <span>{originalName}</span>
    </div>
  );
};
