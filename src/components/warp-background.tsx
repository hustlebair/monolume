import React from "react";
import { Warp, type WarpProps } from "@paper-design/shaders-react";

export default function WarpBackground(props: WarpProps) {
  const defaultProps: WarpProps = {
    speed: 2.6,
    rotation: 0.9,
    style: { width: "100%", height: "100%" },
  };

  return (
    <Warp
      {...defaultProps}
      {...props}
      style={{ ...(defaultProps.style as React.CSSProperties), ...(props.style as React.CSSProperties) }}
    />
  );
}


