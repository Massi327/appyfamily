import {Button, Col, Container, Form, Nav, Navbar, Row} from "react-bootstrap";
import logo from "../../images/APPy family-logo.png";
import notif from "../../images/notifications-icon.svg";
import message from "../../images/messages-icon.svg";
import help from "../../images/help-icon.svg";
import events from "../../images/Events.svg";
import people from "../../images/People.svg";
import forum from "../../images/Forum-selected.svg";
import hashtags from "../../images/Hashtags.svg";
import recbut from "../../images/recommended-button.svg";
import nearme from "../../images/near-me.svg";
import {Link} from "react-router-dom";
import eventsselected from "../../images/Events-selezionato.svg";
import peopleselected from "../../images/People-selezionato.svg";
import forumselected from "../../images/Forum-selected.svg";
import centersselected from "../../images/centers-selected.svg";
import "./index.css"
import {useLocalStorage} from "../../useLocalStorage";
import {useState} from "react";
import backarrow from "../../images/backarrow.svg";


const Navigbar = ({ vevents, vforum, vpeople, vcenters, vrec, vnearme,value }) => {

    const [cerca, setCerca] = useState(()=>{
        const cerca = JSON.parse(localStorage.getItem('cerca'))
        return cerca
    })

return  <Row className="cont">
    <Container style={{width:"101vw", marginRight:"0em"}}>


        <Navbar  style={{overflow: "hidden", top: "0px"}}>
            <Container>
                <Link to={"/home"}><img src={logo} className="logo" /></Link>
                <Navbar.Brand className="title"  style={{color:"white", marginLeft:"-2em"}} href="/home"> APPy Family</Navbar.Brand>
                <Nav>
                    <Nav.Link className="notifications" style={{textAlign: "right"}} href="/notifications"><img src={notif} alt="Notifications" className="icon"/></Nav.Link>
                    <Nav.Link style={{textAlign: "right"}} href="/messages"><img src={message} alt="Messages" className="icon"/></Nav.Link>
                    <Nav.Link style={{textAlign: "right"}} href="/tutorial"><img src={help} alt="Help" className="icon"/></Nav.Link>
                </Nav>
            </Container>
        </Navbar>

        <Form className="d-flex">
            {localStorage.getItem('freccia') == 'true' ?
                <img src={backarrow} style={{left:"3em", height:'2em', width:'2em'}} onClick={()=> {localStorage.setItem('cs', 'false'); localStorage.setItem('freccia','false'); localStorage.setItem('cerca', null); window.location.reload(true)}}/>
            : null}
            <Form.Control type="search" value={cerca} placeholder="Search" aria-label="Search" onChange={e=> localStorage.setItem('cerca', JSON.stringify(e.target.value))}/>
            <Button className="search-button" variant="outline-light" disabled={bottoneDisabilitato(localStorage.getItem('cerca'))}
            onClick={()=>{

                let cardhome =  JSON.parse(localStorage.getItem('cardhome'))
                let arrayS
                arrayS = cardhome.filter(f=> f.titolo.includes(JSON.parse(localStorage.getItem('cerca'))))
                localStorage.setItem('cs', 'true')
                localStorage.setItem('search', JSON.stringify(arrayS))
                localStorage.setItem('freccia', 'true')
                window.location.reload(true)
            }
            }>Search</Button>
        </Form>


        <Container className="search-icons">
            <Row className="justify-content-sm-center">
                <Col xs={3} sm={12} md={3}>

                    <Link to={"/home"}><span><img src={vevents} alt="Events" className="search-icon"/></span></Link>

                </Col>
                <Col xs={3} sm={12} md={3}>

                    <Link to={"/people"} style={{color: "white", textDecoration: "none"}}><span><img src={vpeople} alt="People" className="search-icon"/></span></Link>

                </Col>
                <Col xs={3} sm={12} md={3}>

                    <Link to={"/blogs"} style={{color: "white", textDecoration: "none"}}><span><img src={vforum} alt="Forum" className="search-icon"/></span></Link>

                </Col>
                <Col xs={3} sm={12} md={3}>

                    <Link to={"/hashtags"} style={{color: "white", textDecoration: "none"}}><span><img src={vcenters} alt="Centers" className="search-icon"/></span></Link>

                </Col>
            </Row>
        </Container>



        <Container className={value} style={{paddingLeft: "3.5em"}} >
            <Row className="menu-rec-nearme">

                <Col>
                    <Link to={"/home"} ><img src={vrec} alt="Recommended" className="icon" style={{marginTop:"5px"}}/></Link>
                </Col>
                <Col>
                    <Link to={"/nearme"}><img src={vnearme} alt="Near me" className="icon" style={{marginTop:"5px"}}/></Link>
                </Col>


            </Row>
        </Container>

    </Container>


</Row>
}

export default Navigbar

function bottoneDisabilitato(cerca) {
    let disabilitato;

        if (cerca!='')
        {
            disabilitato= false;
        }else {
            disabilitato= true;
        }

    return(disabilitato)
}