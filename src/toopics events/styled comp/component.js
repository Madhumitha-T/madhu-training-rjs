import { styled } from "styled-components";




  export const Heading = styled.h5`
color:${(props)=>props.theme.bgcolor[props.color]};
font-size:${(props)=>[props.size || '48px']};
padding:${(props)=>[props.padding || '1rem']} 
`;

function CustomStyling(){
return(
    <div>
        <Heading  color='secondary' className="card p-5" >its styled by me</Heading>
        <Heading size='30px'color='primary'>its is a example</Heading>
        <Heading padding='20px' color='primary'>welcome</Heading>
    </div>
);
}
 export default CustomStyling;

