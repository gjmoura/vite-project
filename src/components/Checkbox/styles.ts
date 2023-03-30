import styled from 'styled-components';

interface StyledCheckboxProps {
  checked: boolean;
}

export const CheckboxContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  input {
    visibility: hidden;
    overflow: hidden;
    position: absolute;
    z-index: 1;
  }
`;

export const StyledCheckbox =
  styled.div <
  StyledCheckboxProps >
  `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: 1px solid #d7d7d7;
  border-radius: 4px;
  background-color: ${(props) => (props.checked ? 'greenyellow' : 'white')};
  color: ${(props) => (props.checked ? 'white' : 'black')};

  font-weight: 400;
  font-size: 14px;
`;
