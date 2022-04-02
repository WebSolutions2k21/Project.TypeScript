import styled from 'styled-components'

export const Button = styled.button`
background-color: #D9248F;
    color: #FFFFFF;
    border: 2px solid #D9248F;
    border-radius: 5px;
    height: 40px;
    width: 200px;
    font-size: 20px;
  color: ${({ color }) => color || '#FFFFFF'};
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
  `