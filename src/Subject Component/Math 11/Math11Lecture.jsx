import React , {useState}  from "react";
import "./Math11Lecture.css";
import { Collapse} from "react-bootstrap";
import img1 from "../../Image/BG1.jpg"
const Math11Lecture = ()=>{
  const [state, setstate] = useState({id: "0",
  topic:'Introduction of sets',
  ytvideo: <iframe  className="ccvideo" src="https://www.youtube.com/embed/bOFtltNj0ZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
  notes: 'Set theory is the mathematical theory of well-determined collections, called sets, of objects that are called members, or elements, of the set. ... The axioms of set theory imply the existence of a set-theoretic universe so rich that all mathematical objects can be construed as sets',
  question : <p>Question 1 : what is set theory ? <br/>Question 2 : what is null set ?'</p>

  });
  const updatedata = (data)=>
   {
     if(data === '0')
     {
        setstate({id: "0",
        topic:'Introduction of sets',
        ytvideo: <iframe className="ccvideo"  src="https://www.youtube.com/embed/bOFtltNj0ZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        notes: 'Set theory is the mathematical theory of well-determined collections, called sets, of objects that are called members, or elements, of the set. ... The axioms of set theory imply the existence of a set-theoretic universe so rich that all mathematical objects can be construed as sets',
        question : 'Question 1 : what is set theory ? <br/> Question 2 : what is null set ?'
      
        })
     }
     else if(data === '1'){
      setstate({id: "1",
      topic:'Finite ',
      ytvideo: <iframe className="ccvideo"  src="https://www.youtube.com/embed/qkxuFKqJXWY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      notes: 'Set theory is the mathematical theory of well-determined collections, called sets, of objects that are called members, or elements, of the set. ... The axioms of set theory imply the existence of a set-theoretic universe so rich that all mathematical objects can be construed as sets',
        question : 'Question 1 : what is set theory ? <br/> Question 2 : what is null set ?'
      
      })
     }
     else if(data === '2'){
      setstate({id: "2",
      topic:'Infinite set',
      ytvideo: <iframe className="ccvideo" src="https://www.youtube.com/embed/bOFtltNj0ZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      notes: 'Set theory is the mathematical theory of well-determined collections, called sets, of objects that are called members, or elements, of the set. ... The axioms of set theory imply the existence of a set-theoretic universe so rich that all mathematical objects can be construed as sets',
      question : <p>Question 1 : what is set theory ? <br/>Question 2 : what is null set ?'</p>
    
      })
     }
     else if(data === '3'){
      setstate({id: "3",
      topic:'operations on set',
      ytvideo: <iframe className="ccvideo" src="https://www.youtube.com/embed/fEaF31ojyjQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      notes: 'Set theory is the mathematical theory of well-determined collections, called sets, of objects that are called members, or elements, of the set. ... The axioms of set theory imply the existence of a set-theoretic universe so rich that all mathematical objects can be construed as sets',
      question : 'Question 1 : what is set theory ? <br/> Question 2 : what is null set ?'
    
      })
     }
    }

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
    /*function showHide() {
    let x = document.getElementById("msb");
    let y = document.getElementById("subjectbody");
    if (x.className === 'msb')
    {
        x.className = ' responsive';
    }
    else {
      x.className = " msb"
    }
    
  }*/
    return(
        <>
        <div style={{marginTop:'90px'}}></div>
        <div className="container-fluid cf">
          
          <div id="msb" className="msb">
          
            <ul>
            <li><h3 style={{color:'white' , textAlign:'center'}}><u>Class 11 Mathmatics</u></h3></li>
              <li><a href="#topic1" onClick={() => updatedata('0')}>Set Theory</a></li>
              <li><a href="#topic1" onClick={() => updatedata('1')}>Finite Set</a></li>
              <li><a href="#topic1" onClick={() => updatedata('2')}>Infinte Set</a></li>
              <li><button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}><b>Properties of set <i className="fas fa-caret-down m-2"></i></b></button></li>
              <Collapse in={open}>
                <div id="example-collapse-text">
                <li><a href="#topic1" onClick={() => updatedata('3')}>- hello1</a></li>
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
          <button className="collapse-botton" style={{border:'none' , zIndex:'2'}} onClick={showHide}  ><i className="fas fa-bars fa-2x p-2 collapse-botton1"></i></button>
            <div className="m-4">

              <h1 className="text-left" style={{fontSize:'36px' , marginLeft:'2%'}}>Topic : {state.topic}</h1>
              <br/>
              <div className="row">
                  <div className="col-lg-8 col-md-12 col-sm-12">
                    {state.ytvideo}
                 </div>

                {/* Start PlayList */}

                <div className="col-lg-4 col-md-12 col-sm-12 " >
                  <div className="row ">   
                    {/*<h1 className="ccheading text-center p-3">Recommended video</h1>*/}
                  </div>
                <div style={{overflowY: "auto" , height:'450px' , overflowX:'hidden' , boxShadow:'0px -15px 10px -15px #111'}}>
                  
                  <div className="row rvideo">
                    <div className="col-lg-4 col-md-2 col-sm-3">
                    <a href="#cc" onClick={() => updatedata('0')}><img src={img1} alt="" ></img></a>
                    </div>
                    <div className="col-lg-8 col-md-10 col-sm-9">
                      <a href="#cc" onClick={() => updatedata('0')}><h4 className="m-lg-4 m-md-5 text-left">Introduction of Set</h4></a>
                    </div>
                  </div>
                  <div className="row rvideo">
                    <div className="col-lg-4 col-md-2 col-sm-4 mt-2">
                    <a href="#cc" onClick={() => updatedata('1')}><img src={img1} alt="" ></img></a>
                    </div>
                    <div className="col-lg-8 col-md-10 col-sm-8">
                    <a href="#cc" onClick={() => updatedata('1')}> <h4 className="m-lg-4 m-md-5">Finite set </h4></a>
                    </div>
                  </div>
                  <div className="row rvideo">
                    <div className="col-lg-4 col-md-2 col-sm-4 mt-2">
                    <a href="#cc" onClick={() => updatedata('2')}><img src={img1} alt="" ></img></a>
                    </div>
                    <div className="col-lg-8 col-md-10 col-sm-8">
                    <a href="#cc" onClick={() => updatedata('2')}><h4 className="m-lg-4 m-md-5">Infinite  set </h4></a>
                    </div>
                  </div>
                  <div className="row rvideo">
                    <div className="col-lg-4 col-md-2 col-sm-4 mt-2">
                    <a href="#cc" onClick={() => updatedata('3')}><img src={img1} alt="" ></img></a>
                    </div>
                    <div className="col-lg-8 col-md-10 col-sm-8">
                    <a href="#cc" onClick={() => updatedata('3')}><h4 className="m-lg-4 m-md-5">Opertion On set</h4></a>
                    </div>
                  </div>
                  <div className="row rvideo">
                    <div className="col-lg-4 col-md-2 col-sm-4 mt-2">
                      <img src={img1} alt="" ></img>
                    </div>
                    <div className="col-lg-8 col-md-10 col-sm-8">
                      <h4 className="m-lg-4 m-md-5">Finite set js ckcbas cnsa cjas hx</h4>
                    </div>
                  </div>
                  <div className="row rvideo">
                    <div className="col-lg-4 col-md-2 col-sm-4 mt-2">
                      <img src={img1} alt="" ></img>
                    </div>
                    <div className="col-lg-8 col-md-10 col-sm-8">
                      <h4 className="m-lg-4 m-md-5">Finite set js ckcbas cnsa cjas hx</h4>
                    </div>
                  </div>
                  <div className="row rvideo">
                    <div className="col-lg-4 col-md-2 col-sm-4 mt-2">
                      <img src={img1} alt="" ></img>
                    </div>
                    <div className="col-lg-8 col-md-10 col-sm-8">
                      <h4 className="m-lg-4 m-md-5">Finite set js ckcbas cnsa cjas hx</h4>
                    </div>
                  </div>
                  
                </div>
                </div>
              </div>
                {/* End PlayList */}

                {/* 
                <div className="ccnotes col-lg-4 col-md-12 col-sm-12 mt-lg-0 mt-md-5">
                  <h1 className="text-center p-3" style={{backgroundColor:'#1F60ab' , color:'white' , height :'50px'}}>Playlist</h1>
                  <p className="paratext p-3">
                    Sunlight reaches Earth's atmosphere and is scattered in all directions by all the gases and particles in the air.<br/> Blue light is scattered more than the other colors because it travels as shorter, smaller waves. This is why we see a blue sky most of the time.
                    <br/>Sunlight reaches Earth's atmosphere and is scattered in all directions by all the gases and particles in the air. Blue light is scattered more than the other colors because it travels as shorter, smaller waves. This is why we see a blue sky most of the time.
                    Sunlight reaches Earth's atmosphere and is scattered in all directions by all the gases and particles in the air. Blue light is scattered more than the other colors because it travels as shorter, smaller waves. This is why we see a blue sky most of the time.
                    Sunlight reaches Earth's atmosphere and is scattered in <br/>all directions by all the gases and particles in the air. Blue light is scattered more than the other colors because it travels as shorter, smaller waves. This is why we see a blue sky most of the time.
                  </p>
                </div>
                    */}
              
              <br/>

              <div className="row">
                <h1 className="ccheading text-center p-3">Short Notes</h1>
                <div className="container">
                  <p className="paratext1 p-3">
                    {state.notes}
                  </p>
                </div>
              </div>
              <br/>

              <div className="row">
                <h1 className="ccheading text-center p-3">Important Question</h1>
                <div className="container">
                  <p className="paratext1 p-3">
                    {state.question} 
                  </p>
                </div>
              </div>

            </div>
          </div>
        </>
  )
}
export default Math11Lecture;


