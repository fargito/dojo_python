import styled from 'styled-components';
import { getSpacing } from 'stylesheet';

const innerColor = '#3c9d9b';
const borderColor = '#52de97';

const scale = 1.5;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ActivePoint = styled.div`
  background-color: ${innerColor};
  border: ${scale * 2}px solid ${borderColor};
  width: ${scale * 20}px;
  border-radius: 50%;
  height: ${scale * 20}px;
  content: '';
`;

export const Point = styled.div`
  background-color: ${innerColor};
  border: ${scale * 2}px solid ${borderColor};
  width: ${scale * 10}px;
  border-radius: 50%;
  height: ${scale * 10}px;
  content: '';
`;

export const Bar = styled.div`
  background-color: ${borderColor};
  width: ${scale * 100}px;
  height: ${scale * 3}px;
  content: '';
`;
