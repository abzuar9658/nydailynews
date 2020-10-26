import {Dropdown} from 'react-bootstrap'
import './sections.css'
const Sections = ()=>{
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="" className = 'ui button'>
                <i className = 'align justify icon'></i> SECTIONS
                </Dropdown.Toggle>

                <Dropdown.Menu id = 'nav-dropdown'>
                    <Dropdown.Item href="#/action-1">ADVERTISE WITH US</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">E-NEWSPAPER</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">NEWSLETTERS</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">SUBCRIBER SERVICES</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">---------------</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">ABOUT US</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">BRANDED CONTENT</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">CORONAVIRUS</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">ELECTION 2020</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">FUN AND GAMES</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">----------------</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">MORE</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>            
        </div>        
    )
}
export default Sections