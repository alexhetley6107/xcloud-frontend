import React from 'react';
import s from './FileList.module.scss';
import { FileItem } from '@/api/dto/files.dto';
import { FileCard } from '@/components/FileCard';

export type FileSelectType = 'select' | 'unselect';

interface FileListProps {
  items: FileItem[];
}

export const FileList: React.FC<FileListProps> = ({ items }) => {
  console.log('items', items);

  return (
    <div className={s.root}>
      {items.map((item) => (
        <div data-id={item.id} key={item.id} className="file">
          <FileCard filename={item.filename} originalName={item.originalName} />
        </div>
      ))}
    </div>
  );
};
