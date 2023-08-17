import'./pageheader.scss'
import React from "react"

const PageHeaderContent=(props)=>{
    return(
        <div className="wrapper">
            <h2>{props.HeaderText}</h2>
            <span>{props.icon}</span>
        </div>
    )
}
export default PageHeaderContent;