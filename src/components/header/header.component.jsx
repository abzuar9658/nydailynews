import {React, Component } from 'react'
import {Navbar, Form,Nav,Button} from 'react-bootstrap'
import {withRouter, Link} from 'react-router-dom'
import Sections from '../sections/sections.component'
import Carousel from '../carousel/carousel.component'
import './header.css'
class Header extends Component{
    state={
        curDate : new Date().toGMTString(),
      }
    render(){
        return (
            <div >
                <div className = 'header'>
                    <Navbar bg="dark" variant="dark" >
                        <Nav.Link><Sections/></Nav.Link>
                            <Nav className="mr-auto ml-auto " variant = 'light' >           
                                <Nav.Link variant = 'light'>NEW YORK</Nav.Link>
                                <Nav.Link >SPORTS</Nav.Link>
                                <Nav.Link >NEWS</Nav.Link>
                                <Nav.Link >SNYDE</Nav.Link>
                                <Nav.Link >OPINION</Nav.Link>
                            </Nav>
                        <Form inline>
                        <Link to = '/sign-in-sign-up' style={{textColor:'black', textDecoration: 'none' }} className = 'ui button'>LOG IN</Link>                        
                        </Form>
                    </Navbar>
                </div>
                <div className = 'news-heading'>
                    <h1 className = 'main-heading'>DAILY <i className = 'newspaper icon h1-icon' ></i> NEWS</h1>
                    <p className = 'h1-date'>{this.state.curDate}</p>
                </div>                
                <hr/>
                <div className = 'ui container'>
                    <p className = 'trending-topics '>
                        <text className = 'trending-text'>TRENDING TOPICS:</text> 
                        <Button variant = 'dark'> CUOMO</Button> 
                        <Button variant = 'dark'> COVID CLUSTERS</Button>
                        <Button variant = 'dark' className = ''> LINCOLN PROJECT</Button>
                        <Button variant = 'dark'> STORMY DANIELS</Button>
                        <Button variant = 'dark'> ZION PARK</Button>
                        <Button variant = 'dark'> MITCH MCCONNELL</Button>
                        <Button variant = 'dark'> MORE</Button>
                    </p>
                </div>
                <hr/>
                <Carousel/>
            </div>
        )
    }
}
export default withRouter(Header)