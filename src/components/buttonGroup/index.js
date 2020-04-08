import React from 'react';
import {Row} from '../grid'
import { Link } from "react-router-dom"

function buttonGroup() {
    return (
        <Row>
            <div className='col-sm-8 offset-sm-2 button-col'>
                <Link to = "/">
                <button type="button" id="about-me-btn" onClick="window.location.href='/contact'">About Me</button>
                </Link>
                <Link to = "/portfolio">
                <button type="button" id="prt-btn" onClick="window.location.href='/contact'">Portfolio</button>
                </Link>
                <Link to = "/contact">
                <button type="button" id="cont-btn" onClick="window.location.href='/contact'">Contact</button>
                </Link>
            </div>
        </Row>
    )
}
export default buttonGroup;