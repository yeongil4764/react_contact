import styled from "styled-components";
import SearchBox from "./SearchBox";
import Contacts from "./ContactList"

const Box = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #9b9b9b;
`;

const LeftBox = () => {
    return (
        <Box>
            <SearchBox/>
            <Contacts />
        </Box>
    )
}

export default LeftBox;