import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import addicon from "../../images/Add-icon.svg";


const AddButtonForum = () => {


    return <Row className="justify-content-sm-right" style={{zIndex:"1000"}}>
        <Col xs={10} md={1}>
            <Link to={"/addforum"} style={{color: "white", textDecoration: "none"}}><span><img src={addicon} alt="Add"
                                                                                          className="search-icon"/></span></Link>
        </Col>
    </Row>
}
export default AddButtonForum;

