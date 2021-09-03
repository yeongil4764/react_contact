import { connect } from "react-redux";
import ContactContentsContainer from "./ContactContentsContainer";

const mapStateToProps = (state) => {
    const {contact : {selectedcontact}} = state;
    
    return {
        selectedcontact,
    }
}

const mapDispatchToProps = () => {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ContactContentsContainer);