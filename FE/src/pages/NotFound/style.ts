import styled from "styled-components";

import { COLOR, FONTSIZE } from "@/styles/constTheme";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 30rem;
  padding: 50rem;
  width: 400rem;
  span {
    color: ${COLOR["black-400"]};
    font-size: ${FONTSIZE.XXL}rem;
  }
`;

export const HomeButton = styled.button`
  width: 120px;
  height: 80px;
  margin-top: 30rem;
  background-color: ${COLOR["blue-400"]};
  color: ${COLOR["white-400"]};
  border-radius: 30rem;
  font-size: ${FONTSIZE.XL}rem;
`;
