import styled from 'styled-components';
import { getSpacing } from 'stylesheet';

const innerColor = '#3c9d9b';
const borderColor = '#52de97';

const scale = 1.5;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Point = styled.div<{ isActive: boolean }>`
  background-color: ${innerColor};
  border: ${scale * 2}px solid ${borderColor};
  width: ${({ isActive }) => (isActive ? scale * 20 : scale * 10)}px;
  border-radius: 50%;
  height: ${({ isActive }) => (isActive ? scale * 20 : scale * 10)}px;
  content: '';
`;

export const Bar = styled.div<{ isActive: boolean }>`
  background-color: ${borderColor};
  width: ${({ isActive }) => (isActive ? scale * 45 : scale * 50)}px;
  height: ${scale * 3}px;
  content: '';
`;
