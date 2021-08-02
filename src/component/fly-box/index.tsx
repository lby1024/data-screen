import { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import FlyBoder from "./fly-border";

const Content = styled.div`
  position: relative;
  .border {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const FlyBox: FC = ({ children }) => {
  const content = useRef<any>();
  const [size, setSize] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    const { clientHeight, clientWidth } = content.current;
    setSize({
      width: clientWidth,
      height: clientHeight
    });
  }, []);

  return (
    <Content ref={content}>
      {children}
      <FlyBoder className="border" width={size.width} height={size.height} />
    </Content>
  );
};

export default FlyBox;
