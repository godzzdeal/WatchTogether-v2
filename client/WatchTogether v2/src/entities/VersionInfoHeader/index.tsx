import React, { ReactNode } from "react";
import { Badge } from "react-bootstrap";

import './index.css';

interface Props {
    version: string | undefined
    // any props that come into the component
}

export const VersionHeader = ({ ...props }: Props) => {
    console.log(props.version);
    
    return (
        <>
            <div className="bg-white tp-05 d-flex justify-content-center align-items-center header-top " >
                <h6 className="version"> Бета версия  <Badge bg="secondary">{props.version}</Badge></h6>
                <a href="https://github.com/godzzdeal/WatchTogether-v2" className='git-url link-secondary'> <i className="bi bi-github"></i>GitHub</a>
            </div>
        </>
    )
}

export default VersionHeader;