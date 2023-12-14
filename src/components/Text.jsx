import { memo } from "react";
import styled from "styled-components";

import Theme from "core/Theme";

const Template = styled.div`
  ${({
    fontSize,
    fontWeight,
    color,
    textAlign,
    isEllipsis,
    lineHeight,
    lineClamp,
  }) => `
			font-size: ${Theme.fontSize[fontSize]};
			font-weight: ${fontWeight};
			color: ${Theme.colors[color]};
			text-align: ${textAlign};
			line-height: ${
        lineHeight ? lineHeight : `calc(${Theme.fontSize[fontSize]} + 6px)`
      };
			overflow: ${isEllipsis ? "hidden" : "unset"};
			text-overflow: ${isEllipsis ? "ellipsis" : "unset"};
      -webkit-line-clamp: ${lineClamp};
      ${
        isEllipsis
          ? `
            display: block;
            display: -webkit-box;
            -webkit-box-orient: vertical;
          `
          : ""
      }
		`}
`;

const Text = ({
  fontSize = "from20to14",
  fontWeight = 300,
  color = "white",
  textAlign = "left",
  isEllipsis = false,
  lineHeight,
  style,
  children,
  lineClamp = 1,
  ...props
}) => {
  return (
    <Template
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      textAlign={textAlign}
      isEllipsis={isEllipsis}
      lineHeight={lineHeight}
      lineClamp={lineClamp}
      style={style}
      {...props}
    >
      {children}
    </Template>
  );
};

export default memo(Text);
