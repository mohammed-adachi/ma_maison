import styled from "styled-components";

const headre=styled.header`
min-height: calc(100vh - 66px);
background: url(${props=>props.img}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;
`
export default headre;