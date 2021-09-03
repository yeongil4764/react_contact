import styled from "styled-components";
import ContactContents from "./ContactContents"
const Box = styled.div`
    flex: 1;
    justify-content: center;
    flex-direction: column;
`;

const RightBox = () => {
    return (
        <Box>
            <ContactContents />
        </Box>
    )
}

export default RightBox;