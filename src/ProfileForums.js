import {useContext, useEffect, useState} from "react";
import {StateContext} from "./App";
import {Link} from "react-router-dom";
import {
    Button,
    Col,
    Container,
    Nav,
    Navbar,
    Row,
    Card,
    Modal,
    CardGroup,
    Accordion,
    FormGroup,
    FormControl
} from "react-bootstrap";
import NavigbarBottom from "./components/navbar-bottom";
import NavigbarP from "./components/navbar-profile";
import eventsselected from "./images/Events-selezionato.svg";
import blogs from "./images/Blogs.svg";
import people from "./images/People.svg";
import hashtags from "./images/Hashtags.svg";
import "./Profile.css";
import imgcard1 from "./images/Image-event-1.svg";
import clock from "./images/Clock.svg";
import map from "./images/Map.svg";
import profile from "./images/Profile-unselected.svg";
import ribbon from './images/ribbon_icon.png'
import profileSofia from './images/sophia+ribbon.png'
import NavbarProfile from "./components/navbar-profile";
import eventsp from "./images/Profile_events.svg";
import blogsp from './images/Profile_blogs.svg'
import profileselected from './images/Profile-selected.svg'
import home from "./images/Home-icon.svg";
import calendar from "./images/Calendar.svg";
import settings from "./images/Settings.svg";
import homeunselected from "./images/home-unselected.svg"
import {selected} from "./Action";
import imgcard4 from "./images/Image-event-4.svg";
import moment from "moment";
import popupsport from "./images/image 1.svg";
import interested from "./images/ic_round-star-border.svg";
import participate from "./images/ic_round-check-circle-outline.svg";
import whosgoing from "./images/material-symbols_emoji-people-rounded.svg";
import dropdown from "./images/gridicons_dropdown.svg";
import ProfileO from "./components/profile-options";
import centerprofileimage from "./images/cus_torino.svg";
import CardHeader from "react-bootstrap/CardHeader";
import centerevents from "./images/Profile_events.svg";
import centerblogs from "./images/Profile_blogs.svg";
import centercalendar from "./images/Profile_calendar.svg";
import threedots from "./images/ph_dots-three-vertical-bold.svg";
import addicon from "./images/Add-icon.svg";
import centerforums from "./images/Profile_Forums_unselected.svg";
import centerforumsselected from "./images/Profile_Forums.svg";
import notif from "./images/notifications-icon.svg";
import message from "./images/messages-icon.svg";
import help from "./images/help-icon.svg";
import profile2 from "./images/profile2.svg";
import profile1 from "./images/profile1.svg";
import profile4 from "./images/profile4.svg";
import {useAccordionButton} from "react-bootstrap/AccordionButton";
import send3 from "./images/send3.svg";
import sophia_piccola from "./images/sophia_piccola.svg";
import {useLocalStorage} from "./useLocalStorage";
import AddButtonForum from "./components/add-button-forum";

export default function ProfileForums(){

    const [state,dispatch] = useContext(StateContext)

    const [forum, setForum] = useState(() => {
        const forum = JSON.parse(localStorage.getItem('forums'));
        return forum || state.forums; } )

    const rispo = [
        {
            key: Math.random(),
            testo: "Use a hot water bottle",
            about: "3 weeks ago • Sullivan Jayden",
            img: profile2,
            kf: 100
        },
        {
            key: Math.random(),
            testo: "Have you tried medicines?",
            about: "2 weeks ago • Mia Johnson",
            img: profile1,
            kf: 100
        },
        {
            key: Math.random(),
            testo: "Are you feeding him/her?",
            about: "4 days ago • Clara May",
            img: profile4,
            kf: 101
        },
        {
            key: Math.random(),
            testo: "Shut the blinds. Darkness helps the baby rest",
            about: "4 days ago • Sophia Wilkinson",
            img: sophia_piccola,
            kf: 101
        },
        {
            key: Math.random(),
            testo: "Give him a pacifier and/or put some music on",
            about: "4 days ago • Sophia Wilkinson",
            img: sophia_piccola,
            kf: 100
        },
        {
            key: Math.random(),
            testo: "It's used to prevent your baby's teeth from getting damaged",
            about: "3 weeks ago • Sullivan Jayden",
            img: profile2,
            kf: 102
        },
        {
            key: Math.random(),
            testo: "You should absolutely use it!",
            about: "2 weeks ago • Sophia Wilkinson",
            img: sophia_piccola,
            kf: 102
        },
        {
            key: Math.random(),
            testo: "My baby hates it",
            about: "4 days ago • Clara May",
            img: profile4,
            kf: 102
        },
    ]

    const [risposte, setRisposte] = useLocalStorage('risposte', rispo)

    const [reply, setReply] = useState('')

    return(
        <Container style={{backgroundColor:"#f5f5f5", zIndex:'-1000', minHeight:'100vh', top:'5em'}}>

            <NavigbarP vnotifications={notif} vmessages={message} vtutorial={help}/>
            <AddButtonForum/>

            <NavigbarBottom home={homeunselected} calendar={calendar} profile={profileselected} settings={settings}/>

            <Container className="bg2" style={{paddingTop:"7em"}}>


                <Card className="post1" style={{ width: '100%', height: '8rem',  marginTop: '0em', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={profileSofia} style={{height: '8em', width: '8rem'}} />
                    {/*<Card.Img  src={ribbon} className="ribbon" />*/}
                    <Card.Body>
                        <Card.Title className="name" style={{textAlign: 'left'}}>Sophia_Wilkinson</Card.Title>
                        <Card.Text className="connections" style={{textAlign: 'left'}}>
                            Silver, 356 connections
                        </Card.Text>
                    </Card.Body>
                </Card>


            </Container>
            <Card>
                <CardHeader>
                    <Container className="search">
                        <Row className='row'>
                            <Col>
                                <Link to={"/profile"}><span><img src={centerevents} alt="Events" className="search"/></span></Link>
                            </Col>

                            <Col>
                                <Link to={"/profileforums"}><span><img src={centerforumsselected} alt="Events" className="search"/></span></Link>
                            </Col>
                        </Row>
                    </Container>
                </CardHeader>
            </Card>

            <Container style={{paddingTop:'0.1em', paddingBottom:'6em'}}>
            {forum.slice(0).reverse().map( f =>

                <Card style={{paddingBottom:"0.5em", paddingTop:"0.5em", backgroundColor: "#f5f5f5", borderStyle: "hidden"}}>
                <Accordion>
                    <Card>
                        <Card.Header style={{minHeight:"4.5em"}}>
                            <Card.Text className="blog-title" style={{textAlign: 'left'}}>{f.titolo}</Card.Text>

                            <Card.Text>
                                <Row style={{height:"1em"}}>
                                    <Col  className="subtitle-connections" style={{textAlign:"left"}}>{f.about}
                                    </Col>
                                </Row >
                                <Row style={{height:"1em"}}>
                                    <Col xs={4}>

                                    </Col>
                                    <Col xs={3}>

                                    </Col>
                                    <Col xs={5}>
                                        <CustomToggle eventKey="1">View Replies</CustomToggle>
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                {risposte.filter(g=> g.kf == f.key).map(r=>
                                    <Card className="people" key={r.key} style={{marginBottom: '0.4em' , borderRadius: '10px',borderWidth: '0px', margin:"-0.5em", marginTop:"-0.5em", flexDirection: 'row'}}>
                                        <Card.Img  src={r.img} style={{height: '3em', width: '3rem', marginLeft:'1em', marginTop:'0.2em'}} />

                                        <Card.Body>
                                            <Card.Text className="blog-title" style={{textAlign: 'left'}}>{r.testo}</Card.Text>

                                            <Card.Text>
                                                <Row style={{height:"1em"}}>
                                                    <Col  className="subtitle-connections" style={{textAlign:"left"}}>
                                                        {r.about}
                                                    </Col>
                                                </Row>
                                                <Row style={{height:"1em", marginTop:"-0.1em"}}>
                                                    <Col xs={7}>

                                                    </Col>
                                                    <Col xs={3}>

                                                    </Col>
                                                </Row>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                )}
                                <FormGroup style={{marginBottom: "10px", marginTop: "10px", textAlign: "left"}}>
                                    <Row>
                                        <Col xs={10}>
                                            <FormControl type='text' value={reply} style={{textAlign:"left", backgroundColor:"#f5f5f5", borderTop:"0px", borderRight:"0px", borderLeft:"0px", borderColor:"#a7a7a7", borderRadius:"5px"}} placeholder='Add a reply as Mia Johnson' onChange={e=> setReply(e.target.value)}/>
                                        </Col>
                                        <Col xs={2}>
                                            <img src={send3}  onClick={()=>{
                                                let scan = JSON.parse(localStorage.getItem('risposte'))
                                                let tutto = {key: Math.random(), testo: reply, about: "Now • Sophia Wilkinson", img: sophia_piccola, kf: f.key}
                                                let arrayN = [...scan, tutto]
                                                setRisposte(arrayN)
                                                setReply('')
                                            }
                                            }/>
                                        </Col>
                                    </Row>
                                </FormGroup>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                </Accordion>
                </Card>
            )}
            </Container>

        </Container>
    )

}

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <button
            type="button"
            className="reply"
            style={{borderWidth:"0px", backgroundColor: "#f7f7f7"}}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}