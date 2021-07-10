const MEDIUM_CONTENT_WIDTH = 320; // pixel
const MEDIUM_CONTENT_HEIGHT = 180; // pixel
const MEDIUM_MARGIN = 80; // pixel

const calcX = (multiplier, variant) => 
  `${multiplier * MEDIUM_CONTENT_WIDTH + MEDIUM_MARGIN + variant}px`; 

const calcY = (multiplier, variant) => 
  `${multiplier * MEDIUM_CONTENT_HEIGHT + MEDIUM_MARGIN + variant}px`; 


export const contentsRow1 = [
  {
    id: '#1',
    x: calcX(0, -30),
    y: calcY(0, -55),
    backgroundColor: '#ffadad',
  },
  {
    id: '#2',
    x: calcX(1.2, 80),
    y: calcY(1.2, 0),
    backgroundColor: '#ffd6a5',
  },
  {
    id: '#3',
    x: calcX(0, -45),
    y: calcY(2.2, 0),
    backgroundColor: '#caffbf',
  },
  {
    id: '#4',
    x: calcX(3, 0),
    y: calcY(0.2, -55),
    backgroundColor: '#9bf6ff',
  },
  {
    id: '#5',
    x: calcX(2.1, 0),
    y: calcY(3.2, -55),
    backgroundColor: '#9bf6ff',
  },
];

export const contentsRow2 = [
  {
    id: '#1',
    x: calcX(0.5, 40),
    y: calcY(0, 0),
    backgroundColor: '#ffadad',
  },
  {
    id: '#2',
    x: calcX(1.2, 80),
    y: calcY(2, 0),
    backgroundColor: '#ffd6a5',
  },
  {
    id: '#3',
    x: calcX(0, -45),
    y: calcY(2.9, 0),
    backgroundColor: '#caffbf',
  },
  {
    id: '#4',
    x: calcX(2.5, -30),
    y: calcY(1.2, -80),
    backgroundColor: '#9bf6ff',
  },
  {
    id: '#5',
    x: calcX(1.8, 0),
    y: calcY(3.8, 55),
    backgroundColor: '#9bf6ff',
  },
];

export const contentsRow3 = [
  {
    id: '#1',
    x: calcX(0, -30),
    y: calcY(-0.5, -55),
    backgroundColor: '#ffadad',
  },
  {
    id: '#2',
    x: calcX(1.2, 80),
    y: calcY(1.2, 0),
    backgroundColor: '#ffd6a5',
  },
  {
    id: '#3',
    x: calcX(0, -45),
    y: calcY(2.2, 0),
    backgroundColor: '#caffbf',
  },
  {
    id: '#4',
    x: calcX(3, 0),
    y: calcY(0.2, -55),
    backgroundColor: '#ffd6a5',
  },
  {
    id: '#5',
    x: calcX(2.1, 0),
    y: calcY(3.2, -55),
    backgroundColor: '#9bf6ff',
  },
];

export const contentsRow4 = [
  {
    id: '#2',
    x: calcX(1.2, 80),
    y: calcY(1.2, 0),
    backgroundColor: '#ffd6a5',
  },
  {
    id: '#3',
    x: calcX(0, -45),
    y: calcY(2.2, 0),
    backgroundColor: '#caffbf',
  },
  {
    id: '#5',
    x: calcX(2.1, 0),
    y: calcY(3.2, -55),
    backgroundColor: '#ffadad',
  },
];
