import { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import * as S from './styles';

type CheckboxProps = {
  label: string,
  id: string,
  checked?: boolean,
  defaultChecked?: boolean,
  onChange?: () => void,
  disabled?: boolean,
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  defaultChecked,
  disabled,
  onChange,
}: CheckboxProps) => {
  const [inputChecked, setInputChecked] = useState(checked ?? defaultChecked);

  const handleClick = () => {
    console.log(checked);
    if (checked === undefined) {
      setInputChecked(!inputChecked);
    }
  };
  return (
    <S.CheckboxContainer>
      <S.StyledCheckbox onClick={handleClick} checked={inputChecked}>
        {inputChecked && <AiOutlineCheck />}
        <input
          type='checkbox'
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          disabled={disabled}
        />
      </S.StyledCheckbox>
      <label htmlFor={id}>{label}</label>
    </S.CheckboxContainer>
  );
};
