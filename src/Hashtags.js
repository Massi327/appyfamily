import {useContext, useState} from "react";
import {StateContext} from "./App";
import {Link} from "react-router-dom";
import {Button, Card, Col, Container, Form, Nav, Navbar, Row} from "react-bootstrap";
import Navigbar from "./components/navbar-search";
import AddButton from "./components/add-button";
import NavigbarBottom from "./components/navbar-bottom";
import events from "./images/Events.svg";
import blogs from "./images/Blogs.svg";
import people from "./images/People.svg";
import hashtagsselected from "./images/Hashtags-selezionato.svg";
import profile4 from "./images/profile4.svg";
import hashtag from "./images/hashtag.svg"
import home from "./images/Home-icon.svg";
import calendar from "./images/Calendar.svg";
import profile from "./images/Profile-unselected.svg";
import settings from "./images/Settings.svg";

export default function Hashtags(){

    const [state,dispatch] = useContext(StateContext)

    return(
        <Container style={{backgroundColor:"#f5f5f5", zIndex:'-1000', minHeight:'70vh'}}>
            <Navigbar vevents={events}
                      vblogs={blogs}
                      vpeople={people}
                      vhashtags={hashtagsselected}
                      value={"none"}
            />

            <AddButton/>
            <NavigbarBottom home={home} calendar={calendar} profile={profile} settings={settings}/>

            <Container style={{paddingTop:'13em'}}>
                <Card className="people" style={{height: '5rem', top: '2em', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={hashtag} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                    <Card.Body>
                        <Card.Text className="name-people" style={{textAlign: 'left'}}>#crying_baby</Card.Text>
                        <Card.Text className="subtitle-connections" style={{textAlign: 'left'}}>
                            7.5K posts
                        </Card.Text>
                    </Card.Body>
                </Card>


                <Link to={"/centerevents"}>
                    <Card className="people" style={{height: '5rem', top: '2em', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={hashtag} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                    <Card.Body>
                        <Card.Text className="name-people" style={{textAlign: 'left'}}>#crying_baby</Card.Text>
                        <Card.Text className="subtitle-connections" style={{textAlign: 'left'}}>
                            7.5K posts
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Link>







                <Card className="people" style={{height: '5rem', top: '2em', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={hashtag} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                    <Card.Body>
                        <Card.Text className="name-people" style={{textAlign: 'left'}}>#jumpingontrampoline</Card.Text>
                        <Card.Text className="subtitle-connections" style={{textAlign: 'left'}}>
                            45.7K posts
                        </Card.Text>
                    </Card.Body>
                </Card>


                <Card className="people" style={{height: '5rem', top: '2em', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={hashtag} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                    <Card.Body>
                        <Card.Text className="name-people" style={{textAlign: 'left'}}>#babies_at_weddings</Card.Text>
                        <Card.Text className="subtitle-connections" style={{textAlign: 'left'}}>
                            1.5K posts
                        </Card.Text>
                    </Card.Body>
                </Card>


                <Card className="people" style={{height: '5rem', top: '2em', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={hashtag} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                    <Card.Body>
                        <Card.Text className="name-people" style={{textAlign: 'left'}}>#happy_baby</Card.Text>
                        <Card.Text className="subtitle-connections" style={{textAlign: 'left'}}>
                            20K posts
                        </Card.Text>
                    </Card.Body>
                </Card>



                <Card className="people" style={{height: '5rem', top: '2em', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={hashtag} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                    <Card.Body>
                        <Card.Text className="name-people" style={{textAlign: 'left'}}>#kids_safety</Card.Text>
                        <Card.Text className="subtitle-connections" style={{textAlign: 'left'}}>
                            2K posts
                        </Card.Text>
                    </Card.Body>
                </Card>



                <Card className="people" style={{height: '5rem', top: '2em', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={hashtag} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                    <Card.Body>
                        <Card.Text className="name-people" style={{textAlign: 'left'}}>#breastfeeding</Card.Text>
                        <Card.Text className="subtitle-connections" style={{textAlign: 'left'}}>
                            7.8K posts
                        </Card.Text>
                    </Card.Body>
                </Card>



                <Card className="people" style={{height: '5rem', top: '2em', marginBottom: '5em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={hashtag} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                    <Card.Body>
                        <Card.Text className="name-people" style={{textAlign: 'left'}}>#sleepless_nights</Card.Text>
                        <Card.Text className="subtitle-connections" style={{textAlign: 'left'}}>
                            0.7K posts
                        </Card.Text>
                    </Card.Body>
                </Card>


            </Container>


        </Container>
    )

}