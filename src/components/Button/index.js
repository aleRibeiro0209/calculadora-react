import { ButtonContainer, ButtonOrange, ButtonEsc } from "./styles";

export function Button ({label, onClick})  {
    return (
      <ButtonContainer onClick={onClick} type="button">
        {label}
      </ButtonContainer>
  );
}
  
export function ButtonOr ({label, onClick})  {
  return (
    <ButtonOrange onClick={onClick} type="button">
      {label}
    </ButtonOrange>
);
}

export function ButtonEs ({label, onClick})  {
  return (
    <ButtonEsc onClick={onClick} type="button">
      {label}
    </ButtonEsc>
);
}