import { type FC } from "react";
import { StyledSvg } from "../../styled/UI/StyledSvg";


interface StyledSvgProps {
  // layout props
  marginTop?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;

  // action props
  name: string;
  color?: string;
  size?: number | string;
}

const Icon: FC<StyledSvgProps> = ({
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  name,
  size,
  color = "#ccc",
}) => {
  return (
    <StyledSvg
      fill={color}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      size={size}
    >
      <use href={`../../../public/assets/svg/icons.svg#${name}`} />
    </StyledSvg>
  );
};

export default Icon;
