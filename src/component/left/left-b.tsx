import styled from "styled-components"
import {FC} from "react"

const button = styled.button`
  border:0;
  width:100px;
  height:40px;
  text-align:center;
  color:#000;      
`

const StyledButton = styled(button)`
  color:#fff;  
`

const XLeftB:FC = () => {
    return <StyledButton/>
}

export default XLeftB