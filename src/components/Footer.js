import React from 'react'

export default function Footer() {
    return (
        <p style={{ paddingTop: "10px" , textAlign:"center" }}>
        {'Copyright © '}
        
          LDC SHUTDOWN ATOMATION
        {'  '}
        {new Date().getFullYear()}
        {'.'}
        </p>
    )
}
