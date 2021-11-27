import React , {useState} from "react";
import { Collapse} from "react-bootstrap";
import "./Math11Chp1.css";
const Math11Chp1 =()=>{
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  // const [open4, setOpen4] = useState(false);
  // const [open5, setOpen5] = useState(false);
  //const [open6, setOpen6] = useState(false);
  //const [open7, setOpen7] = useState(false);
  //const [open8, setOpen8] = useState(false);
  //const [open9, setOpen9] = useState(false);
  function showHide() {
    let x = document.getElementById("msb");
    let y = document.getElementById("subjectbody");
    if (x.style.display === "none") {
      x.style.display = "block";
      x.style.width = "220px"
      y.style.width = "";
      y.style.marginLeft ="220px";
    } else {
      x.style.display = "none";
      x.style.width = "0px"
      y.style.marginLeft="0px";
      y.style.marginLeft ="0%";
    }
  }

    return(
        <>
          <div style={{marginTop:'90px'}}></div>
          <div className="container-fluid cf">
          
            <div id="msb">
            
              <ul>
              <li><h3 style={{color:'white' , textAlign:'center'}}><u>Class 11 Mathmatics</u></h3></li>
                <li><a href="/#" onCli>Set Theory</a></li>
                <li><a href="/#">Finite Set</a></li>
                <li><a href="/#">Infinte Set</a></li>
                <li><button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}><b>Properties of set <i className="fas fa-caret-down m-2"></i></b></button></li>
                <Collapse in={open}>
                  <div id="example-collapse-text" style={{marginLeft:'20px'}}>
                  <li><a href="/#">- hello1</a></li>
                  <li><a href="/#">- hello2</a></li>
                  <li><a href="/#">- hello2</a></li>
                  </div>
                </Collapse>
              

                <li><button onClick={() => setOpen1(!open1)} aria-controls="example-collapse-text1" aria-expanded={open1}>Opertions on set <i className="fas fa-caret-down m-2"></i></button></li>
                <Collapse in={open1}>
                  <div id="example-collapse-text1">
                  <li><a href="/#">- hello1</a></li>
                  <li><a href="/#">- hello2</a></li>
                  
                  <li><a href="/#">- hello2</a></li>
                  </div>
                </Collapse>


                <li><button onClick={() => setOpen2(!open2)} aria-controls="example-collapse-text2" aria-expanded={open1}>Opertions on set <i className="fas fa-caret-down m-2"></i></button></li>
                <Collapse in={open2}>
                  <div id="example-collapse-text2">
                  <li><a href="/#">- hello1</a></li>
                  <li><a href="/#">- hello2</a></li>
                  
                  <li><a href="/#">- hello2</a></li>
                  </div>
                </Collapse>
                <li><a href="/#">Set Theory</a></li>
                <li><a href="/#">Finite Set</a></li>
                <li><a href="/#">Infinte Set</a></li>
                <li><button onClick={() => setOpen3(!open3)} aria-controls="example-collapse-text3" aria-expanded={open1}>Opertions on set <i className="fas fa-caret-down m-2"></i></button></li>
                <Collapse in={open3}>
                  <div id="example-collapse-text3">
                  <li><a href="/#">- hello1</a></li>
                  <li><a href="/#">- hello2</a></li>
                  
                  <li><a href="/#">- hello2</a></li>
                  </div>
                </Collapse>
              
              </ul>
            </div>
            </div>

            <div className="subjectbody" id="subjectbody">
            <button className="collapse-botton" style={{border:'none' , zIndex:'2'}} onClick={showHide}  ><i className="fas fa-bars fa-2x p-2"></i></button>
              <div className="m-4">
                <h1>Hello world i am Deepak  Hello world i am Deepak Hello world i am DeepakHello world i am Deepak Hello world i am Deepak Hello world i am Deepak Hello world i am Deepak Hello world i am Deepak Hello world i am Deepak Hello world i am Deepak Hello world i am Deepak Hello world i am Deepak</h1> 
              </div>
            </div>
        
        </>
    )
}
export default Math11Chp1;