import styled from "styled-components";

const Text = styled.div`
  padding: 5px;
`;

const Card = styled.li`
  display: flex;
  background-color: ${(props) => (props.isSelect ? "#28adfa" : "inherit")};
`;

const Button = styled.button`
  flex: 1;
  height: 80px;
  border: 0;
  border-bottom: 1px solid #d4d3d3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
  z-index: 0;
  background-color: inherit;
  color: ${(props) => (props.isSelect ? "white" : "inherit")};
`;

const ListBox = styled.ul`
  flex: 1;
  overflow-y: scroll;
`;

const ContactListPresenter = (props) => {
  const {
    contactList,
    searchKeyword,
    handleChangeFocusContact,
    selectedcontact,
  } = props;

  const containKeyword = (searchKeyword, contactList) => {
    if (!searchKeyword) {
      return true;
    }

    for (const value of Object.values(contactList)) {
      if (value.toString().includes(searchKeyword)) {
        return true;
      }
    }

    return false;
  };

  return (
    <ListBox>
      {contactList
        .filter((contact) => containKeyword(searchKeyword, contact))
        .map((contact) => (
          <Card key={contact.email} isSelect={selectedcontact === contact}>
            <Button
              isSelect={selectedcontact === contact}
              onFocus={() => handleChangeFocusContact(contact)}
            >
              <Text>{contact.name}</Text>
              <Text>{contact.phoneNumber}</Text>
            </Button>
          </Card>
        ))}
    </ListBox>
  );
};
export default ContactListPresenter;
