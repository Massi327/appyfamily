import {useContext, useEffect, useState} from "react";
import {StateContext} from "./App";
import {Link} from "react-router-dom";
import {
    Accordion,
    Button,
    Card,
    Col,
    Collapse,
    Container,
    Form,
    FormControl, FormGroup,
    FormLabel,
    Nav,
    Navbar,
    Row
} from "react-bootstrap";
import Navigbar from "./components/navbar-search";
import NavigbarBottom from "./components/navbar-bottom";
import AddButton from "./components/add-button";
import events from "./images/Events.svg";
import "./Blogs.css"
import forumsselected from "./images/Forums_selected.svg";

import people from "./images/People.svg";
import centers from "./images/centers-unselected.svg";


import imgcard1 from "./images/Image-event-1.svg";
import clock from "./images/Clock.svg";
import map from "./images/Map.svg";
import imgcard2 from "./images/Image-event-2.svg";
import profile1 from "./images/profile1.svg";
import profile2 from "./images/profile2.svg";
import profile4 from "./images/profile4.svg";
import sophia_piccola from "./images/sophia_piccola.svg";
import send3 from "./images/send3.svg";
import recbut from './images/recommended-button.svg'
import nearme from './images/near-me.svg'
import home from "./images/Home-icon.svg";
import calendar from "./images/Calendar.svg";
import profile from "./images/Profile-unselected.svg";
import settings from "./images/Settings.svg";
import AddButtonForum from "./components/add-button-forum";


import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import {useLocalStorage} from "./useLocalStorage";

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey);

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



export default function Blogs(){

    const [state,dispatch] = useContext(StateContext)

    const rispo = [
        {
            key: Math.random(),
            testo: "Use a hot water bottle",
            about: "3 weeks ago • Sullivan Jayden",
            img: profile2
        },
        {
            key: Math.random(),
            testo: "Have you tried medicines?",
            about: "2 weeks ago • Mia Johnson",
            img: profile1
        },
        {
            key: Math.random(),
            testo: "Are you feeding him/her?",
            about: "4 days ago • Clara May",
            img: profile4
        },
    ]

    const [risposte, setRisposte] = useLocalStorage('risposte', rispo)

    const [forum, setForum] = useState(() => {
        const forum = JSON.parse(localStorage.getItem('forums'));
        return forum || state.forums; } )

    const [reply, setReply] = useState('')

    return(

        <Container style={{backgroundColor:"#f5f5f5", zIndex:'-1000', minHeight:'70vh'}}>
            <Navigbar vevents={events}
                      vforum={forumsselected}
                      vpeople={people}
                      vcenters={centers}
                      value={"none"}
            />
            <AddButtonForum/>
            <NavigbarBottom home={home} calendar={calendar} profile={profile} settings={settings}/>

            <Container style={{paddingTop:'15em', minHeight:"100vh"}}>



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
                                            <CustomToggle eventKey="1">Reply</CustomToggle>
                                        </Col>
                                        <Col xs={5}>
                                            <CustomToggle eventKey="0">View Replies</CustomToggle>
                                        </Col>
                                    </Row>
                                </Card.Text>
                            </Card.Header>

                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                {risposte.map(r=>
                                    <Card className="people" key={r.key} style={{marginBottom: '0.4em' , borderRadius: '10px',borderWidth: '0px', margin:"-0.5em", marginTop:"-0.5em", flexDirection: 'row'}}>
                                            <Card.Img  src={r.img} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />

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
                                </Card.Body>
                            </Accordion.Collapse>

                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    {risposte.map(r=>
                                        <Card className="people" key={r.key} style={{marginBottom: '0.4em' , borderRadius: '10px',borderWidth: '0px', margin:"-0.5em", marginTop:"-0.5em", flexDirection: 'row'}}>
                                            <Card.Img  src={r.img} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.2em'}} />

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
                                                    let tutto = {key: Math.random(), testo: reply, about: "Now • Sophia Wilkinson", img: sophia_piccola}
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


                {/*
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="people" key={f.key} style={{ top:"2em", marginBottom: '0.3em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                                <Card className="people" key={f.key} style={{ height: '4rem', borderRadius: '10px', width:"23em",borderWidth: '0', flexDirection: 'row'}}>
                                    <Card.Body>
                                        <Card.Text className="blog-title" style={{textAlign: 'left'}}>{f.titolo}</Card.Text>

                                        <Card.Text>
                                            <Row style={{height:"1em"}}>
                                                <Col  className="subtitle-connections" style={{textAlign:"left"}}>Now • You
                                                </Col>
                                            </Row >
                                            <Row style={{height:"1em"}}>
                                                <Col xs={4}>

                                                </Col>
                                                <Col xs={3}>
                                                    <Link className="reply">Reply</Link>
                                                </Col>
                                                <Col xs={5}>
                                                    <Link className="reply">View 7 replies</Link>
                                                </Col>
                                            </Row>
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                                </Accordion.Header>
                            <Accordion.Body>
                                <Card className="people" style={{marginBottom: '0.3em' , borderRadius: '10px',borderWidth: '0px', margin:"-0.5em", marginTop:"-1em", flexDirection: 'row'}}>
                                    <Card.Img  src={profile2} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />

                                    <Card.Body>
                                        <Card.Text className="blog-title" style={{textAlign: 'left'}}>Use a hot water bottle</Card.Text>

                                        <Card.Text>
                                            <Row style={{height:"1em"}}>
                                                <Col  className="subtitle-connections" style={{textAlign:"left"}}>
                                                    3 weeks ago • Sullivan Jayden
                                                </Col>
                                            </Row>
                                            <Row style={{height:"1em", marginTop:"-0.1em"}}>
                                                <Col xs={7}>

                                                </Col>
                                                <Col xs={3}>
                                                    <Link className="reply">Reply</Link>
                                                </Col>
                                            </Row>
                                        </Card.Text>

                                    </Card.Body>
                                </Card>




                                <Card className="people" style={{marginBottom: '0.3em' , borderRadius: '10px',borderWidth: '0px', margin:"-0.5em", marginTop:"0.5em", flexDirection: 'row'}}>
                                    <Card.Img  src={profile1} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />

                                    <Card.Body>
                                        <Card.Text className="blog-title" style={{textAlign: 'left'}}>Have you tried medicines?</Card.Text>

                                        <Card.Text>
                                            <Row style={{height:"1em"}}>
                                                <Col  className="subtitle-connections" style={{textAlign:"left"}}>
                                                    2 weeks ago • Mia Johnson
                                                </Col>
                                            </Row>
                                            <Row style={{height:"1em", marginTop:"-0.1em"}}>
                                                <Col xs={7}>

                                                </Col>
                                                <Col xs={3}>
                                                    <Link className="reply">Reply</Link>
                                                </Col>
                                            </Row>
                                        </Card.Text>

                                    </Card.Body>
                                </Card>



                                <Card className="people" style={{marginBottom: '0.3em' , borderRadius: '10px',borderWidth: '0px', margin:"-0.5em", marginTop:"0.5em", flexDirection: 'row'}}>
                                    <Card.Img  src={profile4} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />

                                    <Card.Body>

                                        <Card.Text className="blog-title" style={{textAlign: 'left'}}>Are you feeding him/her?</Card.Text>

                                        <Card.Text>
                                            <Row style={{height:"1em"}}>
                                                <Col  className="subtitle-connections" style={{textAlign:"left"}}>
                                                    4 days ago • Clara May
                                                </Col>
                                            </Row>
                                            <Row style={{height:"1em", marginTop:"-0.1em"}}>
                                                <Col xs={7}>

                                                </Col>
                                                <Col xs={3}>
                                                    <Link className="reply">Reply</Link>
                                                </Col>
                                            </Row>
                                        </Card.Text>

                                    </Card.Body>
                                </Card>


                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>)}*/}

                {/*
                    <Card className="people" key={f.key} style={{ top:"2em", height: '6.5rem', marginBottom: '0.3em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                        <Card.Body>
                            <Card.Text className="blog-title" style={{textAlign: 'left'}}>{f.titolo}</Card.Text>

                            <Card.Text>
                                <Row style={{height:"1em"}}>
                                    <Col  xs={9} className="subtitle-connections" style={{textAlign:"left"}}>
                                        Now • You
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={4}>

                                    </Col>
                                    <Col xs={3}>
                                        <Link className="reply">Reply</Link>
                                    </Col>
                                    <Col xs={5}>
                                        <Link className="reply">View 7 replies</Link>
                                    </Col>
                                </Row>
                            </Card.Text>

                        </Card.Body>
                    </Card>)
                }*/}

                {/* <Card className="people" style={{ top:"2em", height: '6.5rem', marginBottom: '0.3em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Body>
                        <Card.Text className="blog-title" style={{textAlign: 'left'}}>Activity ideas for my 6 months old child during long car trips?</Card.Text>

                        <Card.Text>
                            <Row style={{height:"1em"}}>
                                <Col  xs={9} className="subtitle-connections" style={{textAlign:"left"}}>
                                    2 weeks ago • Sophia Wilkinson
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={4}>

                                </Col>
                                <Col xs={3}>
                                    <Link className="reply">Reply</Link>
                                </Col>
                                <Col xs={5}>
                                    <Link className="reply" aria-controls="example-collapse-text"
                                          aria-expanded={open} onClick={() => setOpen(!open)}>View 7 replies</Link>
                                </Col>
                            </Row>
                        </Card.Text>

                    </Card.Body>
                </Card>


                <Card className="people" style={{ top:"2em", height: '6.5rem', marginBottom: '0.3em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Body>
                        <Card.Text className="blog-title" style={{textAlign: 'left'}}>Activity ideas for my 6 months old child during long car trips?</Card.Text>

                        <Card.Text>
                            <Row style={{height:"1em"}}>
                                <Col  xs={9} className="subtitle-connections" style={{textAlign:"left"}}>
                                    3 weeks ago • Mia Johnson
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={4}>

                                </Col>
                                <Col xs={3}>
                                    <Link className="reply">Reply</Link>
                                </Col>
                                <Col xs={5}>
                                    <Link className="reply">View 7 replies</Link>
                                </Col>
                            </Row>
                        </Card.Text>

                    </Card.Body>
                </Card>


                <Card className="people" style={{ top:"2em", height: '6.5rem', marginBottom: '0.3em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Body>
                        <Card.Text className="blog-title" style={{textAlign: 'left'}}>Activity ideas for my 6 months old child during long car trips?</Card.Text>

                        <Card.Text>
                            <Row style={{height:"1em"}}>
                                <Col  xs={9} className="subtitle-connections" style={{textAlign:"left"}}>
                                    2 weeks ago • Sophia Wilkinson
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={4}>

                                </Col>
                                <Col xs={3}>
                                    <Link className="reply">Reply</Link>
                                </Col>
                                <Col xs={5}>
                                    <Link className="reply">View 7 replies</Link>
                                </Col>
                            </Row>
                        </Card.Text>

                    </Card.Body>
                </Card>


                <Card className="people" style={{ top:"2em", height: '6.5rem', marginBottom: '0.3em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Body>
                        <Card.Text className="blog-title" style={{textAlign: 'left'}}>Activity ideas for my 6 months old child during long car trips?</Card.Text>

                        <Card.Text>
                            <Row style={{height:"1em"}}>
                                <Col  xs={9} className="subtitle-connections" style={{textAlign:"left"}}>
                                    2 weeks ago • Sophia Wilkinson
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={4}>

                                </Col>
                                <Col xs={3}>
                                    <Link className="reply">Reply</Link>
                                </Col>
                                <Col xs={5}>
                                    <Link className="reply">View 7 replies</Link>
                                </Col>
                            </Row>
                        </Card.Text>

                    </Card.Body>
                </Card>


                <Card className="people" style={{ top:"2em", height: '6.5rem', marginBottom: '0.3em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Body>
                        <Card.Text className="blog-title" style={{textAlign: 'left'}}>Activity ideas for my 6 months old child during long car trips?</Card.Text>

                        <Card.Text>
                            <Row style={{height:"1em"}}>
                                <Col  xs={9} className="subtitle-connections" style={{textAlign:"left"}}>
                                    2 weeks ago • Sophia Wilkinson
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={4}>

                                </Col>
                                <Col xs={3}>
                                    <Link className="reply">Reply</Link>
                                </Col>
                                <Col xs={5}>
                                    <Link className="reply">View 7 replies</Link>
                                </Col>
                            </Row>
                        </Card.Text>

                    </Card.Body>
                </Card>


                <Card className="people" style={{ top:"2em", height: '6.5rem', marginBottom: '0.3em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Body>
                        <Card.Text className="blog-title" style={{textAlign: 'left'}}>Activity ideas for my 6 months old child during long car trips?</Card.Text>

                        <Card.Text>
                            <Row style={{height:"1em"}}>
                                <Col  xs={9} className="subtitle-connections" style={{textAlign:"left"}}>
                                    2 weeks ago • Sophia Wilkinson
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={4}>

                                </Col>
                                <Col xs={3}>
                                    <Link className="reply">Reply</Link>
                                </Col>
                                <Col xs={5}>
                                    <Link className="reply">View 7 replies</Link>
                                </Col>
                            </Row>
                        </Card.Text>

                    </Card.Body>
                </Card>


                <Card className="people" style={{ top:"2em", height: '6.5rem', marginBottom: '0.3em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Body>
                        <Card.Text className="blog-title" style={{textAlign: 'left'}}>Activity ideas for my 6 months old child during long car trips?</Card.Text>

                        <Card.Text>
                            <Row style={{height:"1em"}}>
                                <Col  xs={9} className="subtitle-connections" style={{textAlign:"left"}}>
                                    2 weeks ago • Sophia Wilkinson
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={4}>

                                </Col>
                                <Col xs={3}>
                                    <Link className="reply">Reply</Link>
                                </Col>
                                <Col xs={5}>
                                    <Link className="reply">View 7 replies</Link>
                                </Col>
                            </Row>
                        </Card.Text>

                    </Card.Body>
                </Card>



                    <Card className="people" style={{ width: '21rem', height: '5rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                        <Card.Body>
                            <Card.Text className="blog-title" style={{textAlign: 'left'}}>Activity ideas for my 6 months old child during long car trips?</Card.Text>

                            <Card.Text>
                                <Row>
                                    <Col  xs={9} className="subtitle-connections" style={{textAlign:"left"}}>
                                        2 weeks ago • Sophia Wilkinson
                                    </Col>
                                    <Col>
                                        <Link className="reply"> Reply</Link>
                                    </Col>
                                </Row>
                            </Card.Text>

                        </Card.Body>
                    </Card>*/}


            </Container>

        </Container>
    )

}