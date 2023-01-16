import {useContext, useState} from "react";
import {StateContext} from "./App";
import {Link} from "react-router-dom";
import {Button, Card, Col, Container, Form, Nav, Navbar, Row} from "react-bootstrap";
import Navigbar from "./components/navbar-search";
import AddButton from "./components/add-button";
import NavigbarBottom from "./components/navbar-bottom";
import clock from "./images/Clock.svg";
import people1 from "./images/People_1.svg"
import people2 from "./images/People_2.svg"
import people3 from "./images/People_3.svg"
import people4 from "./images/People_4.svg"
import people5 from "./images/People_5.svg"
import "./People.css";
import recbut from './images/recommended-button.svg'
import nearme from './images/near-me.svg'
import profile from './images/Profile-unselected.svg'

import events from "./images/Events.svg";
import blogs from "./images/Blogs.svg";
import hashtags from "./images/Hashtags.svg";
import peopleselected from "./images/People-selezionato.svg";
import peopleFrame from "./images/People_frame.svg";

import profile1 from "./images/profile1.svg"
import profile2 from "./images/profile2.svg"
import profile3 from "./images/profile3.svg"
import profile4 from "./images/profile4.svg"
import profile5 from "./images/profile5.svg"
import home from "./images/Home-icon.svg";
import calendar from "./images/Calendar.svg";
import settings from "./images/Settings.svg";


export default function People(){

    const [state,dispatch] = useContext(StateContext)

    return(
        <Container style={{backgroundColor:"#f5f5f5", zIndex:'-1000'}}>

            <Navigbar vevents={events}
                      vblogs={blogs}
                      vpeople={peopleselected}
                      vhashtags={hashtags}
                      value={"none"}
            />
            <NavigbarBottom home={home} calendar={calendar}
                            profile={profile}
                            settings={settings}/>
            <Container style={{paddingTop:'15em'}}>


                <Card className="people" style={{height: '5rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={profile1} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                    <Card.Body>
                        <Card.Text className="name-people" style={{textAlign: 'left'}}>Jane_Austen</Card.Text>
                        <Card.Text className="subtitle-name" style={{textAlign: 'left'}}>
                            Mia Johnson
                        </Card.Text>
                        <Card.Text className="subtitle-connections" style={{textAlign: 'left'}}>
                            Followed by Lame_Jane + 30 more
                        </Card.Text>
                    </Card.Body>
                </Card>


                <Card className="people" style={{height: '5rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={profile2} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                    <Card.Body>
                        <Card.Text className="name-people" style={{textAlign: 'left'}}>Doctor_Sally</Card.Text>
                        <Card.Text className="subtitle-name" style={{textAlign: 'left'}}>
                            Sullivan Jayden
                        </Card.Text>
                        <Card.Text className="subtitle-connections" style={{textAlign: 'left'}}>
                            Followed by Lame_Jane + 40 more
                        </Card.Text>
                    </Card.Body>
                </Card>


                <Card className="people" style={{height: '5rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={profile3} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                    <Card.Body>
                        <Card.Text className="name-people" style={{textAlign: 'left'}}>Gina_Martin</Card.Text>
                        <Card.Text className="subtitle-name" style={{textAlign: 'left'}}>
                            Gina Martin
                        </Card.Text>
                        <Card.Text className="subtitle-connections" style={{textAlign: 'left'}}>
                            Followed by Lame_Jane + 30 more
                        </Card.Text>
                    </Card.Body>
                </Card>


                <Card className="people" style={{height: '5rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={profile4} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                    <Card.Body>
                        <Card.Text className="name-people" style={{textAlign: 'left'}}>Clara_May_92</Card.Text>
                        <Card.Text className="subtitle-name" style={{textAlign: 'left'}}>
                            Clara May
                        </Card.Text>
                        <Card.Text className="subtitle-connections" style={{textAlign: 'left'}}>
                            Followed by Lame_Jane + 30 more
                        </Card.Text>
                    </Card.Body>
                </Card>


                <Card className="people" style={{height: '5rem', marginBottom: '5em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px;'}}>
                    <Card.Img  src={profile5} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                    <Card.Body>
                        <Card.Text className="name-people" style={{textAlign: 'left'}}>Santy_Chanty_Maybe</Card.Text>
                        <Card.Text className="subtitle-name" style={{textAlign: 'left'}}>
                            Chandler Santoro
                        </Card.Text>
                        <Card.Text className="subtitle-connections" style={{textAlign: 'left'}}>
                            Followed by Lame_Jane + 30 more
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>

        </Container>
    )

}