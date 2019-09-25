import styled from 'styled-components';

const innerColor = '#3c9d9b';
const borderColor = '#52de97';

const scale = 1;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Point = styled.div<{ isActive: boolean }>`
  position: relative;
  background-color: ${innerColor};
  border: ${scale * 2}px solid ${borderColor};
  width: ${({ isActive }) => (isActive ? scale * 30 : scale * 16)}px;
  border-radius: 50%;
  height: ${({ isActive }) => (isActive ? scale * 30 : scale * 16)}px;
  content: '';
`;

export const Bar = styled.div<{ isActive: boolean }>`
  background-color: ${borderColor};
  width: ${({ isActive }) => (isActive ? scale * 70 : scale * 75)}px;
  height: ${scale * 3}px;
  content: '';
`;

export const Level = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: -${scale * 20}px;
  left: ${({ isActive }) => (isActive ? scale * 12 : scale * 5)}px;
`;
