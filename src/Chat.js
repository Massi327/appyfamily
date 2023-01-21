import {useContext, useState} from "react";
import {StateContext} from "./App";
import {Link, useNavigate} from "react-router-dom";
import {Button, Card, Col, Container, FormControl, FormGroup, Row} from "react-bootstrap";
import profile1 from "./images/profile1.svg";
import profile2 from "./images/profile2.svg";
import profile3 from "./images/profile3.svg";
import profile4 from "./images/profile4.svg";
import profile5 from "./images/profile5.svg";
import profile6 from "./images/profile6.png";
import follow from "./images/follow.svg";
import NavigbarP from "./components/navbar-profile";
import NavigbarBottom from "./components/navbar-bottom";
import "./Notifiche.css";
import profileunselected from "./images/Profile-unselected.svg";
import calendarunselected from "./images/Calendar.svg";
import settingsunselected from "./images/Settings.svg";
import homeunselected from "./images/home-unselected.svg"
import notif from "./images/notifications-icon.svg";
import message from "./images/messages-icon.svg";
import help from "./images/help-icon.svg";
import backarrow from "./images/backarrow.svg";
import send3 from "./images/send3.svg";
import sophia_piccola from "./images/sophia_piccola.svg";
import {useLocalStorage} from "./useLocalStorage";
export default function Chat(){

    const [state,dispatch] = useContext(StateContext)
    const navigate = useNavigate();

    const text= [
        {
            key: Math.random(),
            text: "Hi Sophia! We met at your picnic on May 6, we talked so much about our children! I hope they’re fine. What about you??",
            img: profile1
        },
        {
            key: Math.random(),
            text: "Hi Mia! I’m so glad to hear from you! We’re fine, how are you and Peter?",
            img: sophia_piccola
        },
        {
            key: Math.random(),
            text: "My son just started kindergarten and he seems to like it",
            img: profile1
        },
    ]

    const [messaggio, setMessaggio] = useLocalStorage('messaggio', text)
    const [reply, setReply] = useState('')

    return(
        <Container style={{backgroundColor:"#f5f5f5", zIndex:'-1000', minHeight:'100vh', top:'5em'}}>
            <NavigbarP vnotifications={notif} vmessages={message} vtutorial={help}/>
            <Container className="bg2" style={{paddingTop:"6.5em", borderRadius:'1em'}}>
                <Row>
                    <Col xs={1}>
                        <img src={backarrow} style={{left:"3em"}} onClick={()=> navigate(-1)}/>
                    </Col>
                    <Col></Col>
                </Row>

                <Card className="people" style={{height: '4rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={profile1} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                    <Card.Body>
                        <Card.Text className="name-people" style={{textAlign: 'left'}}>Jane_Austen</Card.Text>
                        <Card.Text className="subtitle-name" style={{textAlign: 'left'}}>
                            Mia Johnson
                        </Card.Text>

                    </Card.Body>
                </Card>

            </Container>

            <Container style={{paddingTop:'1em'}}>
                <Card style={{ minHeight: '22.5rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                <Card.Body >

                    {messaggio.map(r=>
                        <Card className="people" key={r.key} style={{marginBottom: '0.4em' , borderRadius: '10px',borderWidth: '0px', margin:"-0.5em", marginTop:"-0.5em", flexDirection: 'row'}}>

                            {r.img== profile1 ?
                            <Row>
                                <Col xs={1}>
                                    <Card.Img  src={r.img} style={{height: '2em', width: '2rem', marginLeft:'1em', marginRight:'1em', marginTop:'1em'}} />
                                </Col>
                                <Col xs={11}>
                                    <Card.Body>
                                        <Card.Text className="blog-title" style={{textAlign: 'left',  marginLeft:'1em',}}>{r.text}</Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                                    :
                                <Row>
                                    <Col xs={10}>
                                        <Card.Body>
                                            <Card.Text className="blog-title" style={{textAlign: 'right',}}>{r.text}</Card.Text>
                                        </Card.Body>
                                    </Col>
                                    <Col xs={2} style={{textAlign:'end'}}>
                                        <Card.Img  src={r.img} style={{height: '2em', width: '2rem', marginTop:'1em',marginRight:'1em',}} />
                                    </Col>
                                </Row>
                            }
                        </Card>
                    )}
                </Card.Body>
                </Card>

                <Card style={{ Height: '2rem', marginBottom: '2em' , borderRadius: '10px',borderWidth: '0'}}>
                <FormGroup style={{marginBottom: "10px", marginTop: "10px", textAlign:'center'}}>
                    <Row>
                        <Col xs={10}>
                            <FormControl type='text' value={reply} style={{textAlign:"left", backgroundColor:"#f5f5f5", borderTop:"0px", borderRight:"0px", borderLeft:"0px", borderColor:"#a7a7a7", borderRadius:"5px"}} placeholder='Messagge...' onChange={e=> setReply(e.target.value)}/>
                        </Col>
                        <Col xs={2}>
                            <img src={send3} onClick={()=>{
                                let scan = JSON.parse(localStorage.getItem('messaggio'))
                                let tutto = {key: Math.random(), text: reply, img: sophia_piccola}
                                let arrayN = [...scan, tutto]
                                setMessaggio(arrayN)
                                setReply('')
                                console.log()
                            }
                            }/>
                        </Col>
                    </Row>
                </FormGroup>
                </Card>
            </Container>
            <NavigbarBottom home={homeunselected} calendar={calendarunselected} profile={profileunselected} settings={settingsunselected}/>
        </Container>
    )

}