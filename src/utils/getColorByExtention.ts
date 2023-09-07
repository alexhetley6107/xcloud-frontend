const extColor = {
  pdf: 'purple',
  xls: 'green',
  doc: 'blue',
  txt: 'blue',
  svg: 'orange',
  png: 'orange',
  jpg: 'orange',
  jpeg: 'orange',
  zip: 'red',
} as const;

export type Extension = keyof typeof extColor;
export type Color = (typeof extColor)[Extension];

export const getColorByExtension = (ext: keyof typeof extColor): Color => {
  return extColor[ext];
};
