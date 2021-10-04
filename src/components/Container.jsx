import React from 'react'
import PrincipalSection from "./PrincipalSection"
import LateralBar from "./LateralBar"
const Container = () => {
    return (
        
        <div className="container">
            <div className="container-fluid">
                <div className="row">
                    <PrincipalSection/>
                    <LateralBar></LateralBar>
                </div>
            </div>
        </div>
    )
}

export default Container
