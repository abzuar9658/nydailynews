import {Dropdown} from 'react-bootstrap'
import './header.css'
const Menu = ()=>{
    return (
        <Dropdown className = 'dropdown'>
            <Dropdown.Toggle id="dropdown-basic">
                <i class="align justify icon"></i>
                SECTIONS
            </Dropdown.Toggle>

            <Dropdown.Menu className = ''>
                <Dropdown.Item href="#/action-1">ADVETISE WITH US</Dropdown.Item>
                <Dropdown.Item href="#/action-2">E-NEWSPAPER</Dropdown.Item>
                <Dropdown.Item href="#/action-2">NEWSLETTERS</Dropdown.Item>
                <Dropdown.Item href="#/action-3">SUBSCRIBERS SERICES</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
export default Menu