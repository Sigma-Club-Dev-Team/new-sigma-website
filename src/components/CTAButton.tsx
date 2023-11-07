import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
import { appColors } from "theme";

const CTAButton = ({
  children,
  bg = appColors.brand.purple,
  textColor = "white",
  height = "60px",
  width = "250px",
  fontSize= "20px",
  lineHeight = "30px",
  fontWeight = 600,
  _hover = {bg: appColors.brand.purple},
  ...props
}: ButtonProps) => {
  return (
    <Button
      bg={bg}
      width={width}
      height={height}
      rounded={"10px"}
      color={textColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      _hover={_hover}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CTAButton;