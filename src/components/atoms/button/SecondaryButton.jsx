import React from "react";
import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = props => {
  const { children } = props;
  return <Sbutton>{children}</Sbutton>;
};

const Sbutton = styled(BaseButton)`
  background-color: #11999e;
`;
