import React from 'react'


function Navbar() {
    
    return (
        <>
            <div className="main_nav_box">
                <div className="logo_box">
                    <div className="logo"></div>
                </div>
                <div className="menu_box">
                    <div className="menu_item">
                    <div className="round active "></div>
                   <div className="item_text"> <p>Step 1</p>
                    <small>District Profile</small></div>
                    </div>
                </div>
                <div className="menu_box_2">
                    <div className="menu_item_2">
                    <div className="round_2"></div>
                   <div className="item_text"> <p>Complete Profile</p>
                    <small>Personal Details</small></div>
                 
                    </div>
                    <div className="sub_item">
                        <ul className="subMenu">
                            
                           
                        </ul>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Navbar
