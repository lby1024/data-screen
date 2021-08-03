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

interface IFlybox {
  className?: string
}

const FlyBox: FC<IFlybox> = ({ children }) => {
  const content = useRef<any>();
  const [size, setSize] = useState({
    width: 0,
    height: 0
  });

  function sizeInit() {
    const { clientHeight, clientWidth } = content.current;
    setSize({
      width: clientWidth,
      height: clientHeight,
    });
  }

  useEffect(() => {
      const timer = setTimeout(() => {
          sizeInit();
          clearTimeout(timer)
      }, 200)
  }, [children]);

  return (
    <Content ref={content}>
      {children}
      <FlyBoder className="border" width={size.width} height={size.height} />
    </Content>
  );
};

export default FlyBox;
