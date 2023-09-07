import { Extension } from './getColorByExtention';

export const getExtensionFromFileName = (filename: string) => {
  return filename.split('.').pop() as Extension;
};
