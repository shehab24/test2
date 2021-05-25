import React from 'react'

function Rightsec() {

  const first_btn = () => {
    let divone=document.querySelector(".div_one");
    let divtwo=document.querySelector(".div_two");
    let divthree=document.querySelector(".div_three");
    let divfour=document.querySelector(".div_four");
    const subMenu=document.querySelector(".subMenu");  
    const round2=document.querySelector(".round_2");  
    const round=document.querySelector(".round");  
    if(divone.classList.contains("active")){
      divtwo.classList.add("active");
      divone.classList.remove("active"); 
      round2.classList.add("active");
      round.classList.remove("active");  
      
      const html="<li>Career pathway</li>";
        subMenu.innerHTML=html;
    }else if(divtwo.classList.contains("active")){
      divthree.classList.add("active");
      divtwo.classList.remove("active");
      const html="<li>Career pathway</li><li>Career pathway</li>";
        subMenu.innerHTML=html;
    }else if(divthree.classList.contains("active")){
      divfour.classList.add("active");
      divthree.classList.remove("active");
      const html="<li>Career pathway</li><li>Career pathway</li><li> Dream Job</li>";
        subMenu.innerHTML=html;
    }else if(divfour.classList.contains("active")){
      divone.classList.add("active");
      divfour.classList.remove("active");
      subMenu.innerHTML="";
      round.classList.add("active");
      round2.classList.remove("active");  
    }
   
  }
  
  const previous = () => {
    let divone=document.querySelector(".div_one");
    let divtwo=document.querySelector(".div_two");
    let divthree=document.querySelector(".div_three");
    let divfour=document.querySelector(".div_four");
    const subMenu=document.querySelector(".subMenu");  
    const round2=document.querySelector(".round_2");  
    const round=document.querySelector(".round");  
    if(divfour.classList.contains("active")){
      divthree.classList.add("active");
      divfour.classList.remove("active"); 
      round2.classList.add("active");
      round.classList.remove("active");  
      const html="<li>Career pathway</li><li>Career pathway</li>";
        subMenu.innerHTML=html;
    }else if(divthree.classList.contains("active")){
      divtwo.classList.add("active");
      divthree.classList.remove("active");
      const html="<li>Career pathway</li>";
        subMenu.innerHTML=html;
    }else if(divtwo.classList.contains("active")){
      divone.classList.add("active");
      divtwo.classList.remove("active");
       const html="";
        subMenu.innerHTML=html;
        round2.classList.remove("active");
      round.classList.add("active");  
    }
  }
   
 
    return (
        <>
         <div className="rightsec">
             <div className="div  div_one active">
                 <div className="rightsec_one">
                    <h1>Step  one </h1>
                    <h2>Front page </h2>
                  </div>
                 <div className="button_box">
                 <div className="btn_all">                  
                    <button onClick={first_btn}   className="first_btn">Continue</button>
                 </div>
                </div> 
            </div>
             <div className="div div_two">
                 <div className="rightsec_one">
                    <h1>Profile page </h1>
                    <h2>First page </h2>
                  </div>
                 <div className="button_box">
                 <div className="btn_all">
                 
                    <button onClick={previous}  className="second_btn">Previous</button>
                    <button onClick={first_btn}  className="second_btn">Continue</button>
                 </div>
                </div> 
            </div>
             <div className="div div_three">
                 <div className="rightsec_one">
                    <h1>Profile page</h1>
                    <h2>Second page </h2>
                  </div>
                 <div className="button_box">
                 <div className="btn_all">
                 
                    <button onClick={previous}   className="second_btn">Previous</button>
                    <button onClick={first_btn}  className="second_btn">Continue</button>
                 </div>
                </div> 
            </div>
             <div className="div div_four">
                 <div className="rightsec_one">
                    <h1>Submit page</h1>
                    <h2>Third page </h2>
                  </div>
                 <div className="button_box">
                 <div className="btn_all">
                 
                    <button onClick={previous}   className="second_btn">Previous</button>
                    <button  onClick={first_btn} className="second_btn">Submit</button>
                 </div>
                </div> 
            </div>
        </div>
        </>
    )
}

export default Rightsec
