import React ,{useState} from "react";
import { Link } from "react-router-dom";
import Footer1 from "../../Component/Footer1";
import "./Math11.css";
const Math11 = ()=>{
  const [state, setstate] = useState({id: '1',
   heading: 'Overview',
   Detail1 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh",
   Detail2 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh"
 
  });
   const updatedata = (data)=>
   {
     if(data === 'Chapter1')
     {
        setstate({id: '2',
        heading: 'Chapter 1',
        Detail1 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh",
        Detail2 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh"

        })
     }
     else if(data === 'Chapter2'){
      setstate({id: '3',
      heading: 'Chapter 2',
      Detail1 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh",
      Detail2 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh"

      })
     }
     else if(data === 'Chapter3'){
      setstate({id: '3',
      heading: 'Chapter 3',
      Detail1 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh",
      Detail2 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh"

      })
     }
     else if(data === 'Chapter4'){
      setstate({id: '3',
      heading: 'Chapter 4',
      Detail1 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh",
      Detail2 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh"

      })
     }
     else if(data === 'Chapter5'){
      setstate({id: '3',
      heading: 'Chapter 5',
      Detail1 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh",
      Detail2 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh"

      })
     }
     else if(data === 'Chapter6'){
      setstate({id: '3',
      heading: 'Chapter 6',
      Detail1 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh",
      Detail2 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh"

      })
     }
     else if(data === 'Chapter7'){
      setstate({id: '3',
      heading: 'Chapter 7',
      Detail1 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh",
      Detail2 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh"

      })
     }
     else if(data === 'Chapter8'){
      setstate({id: '3',
      heading: 'Chapter 8',
      Detail1 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh",
      Detail2 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh"

      })
     }
     else if(data === 'Chapter9'){
      setstate({id: '3',
      heading: 'Chapter 9',
      Detail1 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh",
      Detail2 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh"

      })
     }
     
     else if(data === 'Chapter10'){
      setstate({id: '3',
      heading: 'Chapter 10',
      Detail1 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh",
      Detail2 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh"

      })
     }
     else if(data === 'Chapter11'){
      setstate({id: '3',
      heading: 'Chapter 11',
      Detail1 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh",
      Detail2 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh"

      })
     }
     else if(data === 'Chapter12'){
      setstate({id: '3',
      heading: 'Chapter 12',
      Detail1 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh",
      Detail2 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh"

      })
     }
     else if(data === 'Chapter13'){
      setstate({id: '3',
      heading: 'Chapter 13',
      Detail1 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh",
      Detail2 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh"

      })
     }
     else if(data === 'Chapter14'){
      setstate({id: '3',
      heading: 'Chapter 14',
      Detail1 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh",
      Detail2 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh"

      })
     }
     
     else if(data === 'Chapter15'){
      setstate({id: '3',
      heading: 'Chapter 15',
      Detail1 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh",
      Detail2 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh"

      })
     }
     
     else if(data === 'Chapter16'){
      setstate({id: '3',
      heading: 'Chapter 16',
      Detail1 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh",
      Detail2 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh"

      })
     }
     else if(data === 'Overview'){
      setstate({id: '3',
      heading: 'Overview',
      Detail1 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh",
      Detail2 : "asdfg aasdfg tf,g h,jbhb, h,jjhjgh ihigig hiuh jbjhsdhgffhfg ggaf dqgdudqwiuh uiqwhdqwhiuqhihqw iuqwh iheqhweiwwqgqwei iuhq hiuqwer qrg qwgrugwurg qywgywguywgfwkeh fiuwehfuweh fuhwei fhwiegfewbiubebiuwefewhiuf iehi wefhiuewhfowe ewhfhefhweufhiuwhefiu hfiuewhifhweihfihewfuwhefihweufbiewuhf iwehfiewhfeh iewh"

      })
     }
   }
    return(
        <>
        <div style={{marginTop:'90px'}}></div>
        <div className="container-fluid cf">
          <header>
          <div className="header-content">
              <div className="navbar">
                  <a href="#side"><span className="material-icons-sharp menu-icon"><i className="fas fa-bars"></i></span></a>
              </div>    
          </div>
          </header>
          <span id="pop"></span>
          <div id="side">
          <a href="#pop"><span className="material-icons-sharp menu-icon"><i className="fas fa-bars mt-5"></i></span></a>
          <div className="side-content">
              <nav>
                  <h1 id="nav-header" style={{color:'white'}}><a href="#overview" onClick={() => updatedata('Overview')} style={{color:'white'}}> Overview </a></h1>
                  <ul className="ulofsidebar">
                      <li className="list-of-sidebar"><a href="#chapter1" onClick={() => updatedata('Chapter1')} className="nav-link" style={{color:'white' , marginTop:'20px'}}  >Chapter 1</a></li>
                      <li className="list-of-sidebar"><a href="#chapter2"  onClick={() => updatedata('Chapter2')} className="nav-link" style={{color:'white'}}>Chapter 2</a></li>
                      <li className="list-of-sidebar"><a href="#chapter3" onClick={() => updatedata('Chapter3')} className="nav-link" style={{color:'white'}}>Chapter 3</a></li>
                      <li className="list-of-sidebar"><a href="#chapter4" onClick={() => updatedata('Chapter4')} className="nav-link" style={{color:'white'}}>Chapter 4</a></li>
                      <li className="list-of-sidebar"><a href="#chapter5" onClick={() => updatedata('Chapter5')} className="nav-link" style={{color:'white'}}>Chapter 5</a></li>
                      <li className="list-of-sidebar"><a href="#chapter6" onClick={() => updatedata('Chapter6')} className="nav-link" style={{color:'white'}}>Chapter 6</a></li>
                      <li className="list-of-sidebar"><a href="#chapter7" onClick={() => updatedata('Chapter7')} className="nav-link" style={{color:'white'}}>Chapter 7</a></li>
                      <li className="list-of-sidebar"><a href="#chapter8" onClick={() => updatedata('Chapter8')} className="nav-link" style={{color:'white'}}>Chapter 8</a></li>
                      <li className="list-of-sidebar"><a href="#chapter9" onClick={() => updatedata('Chapter9')} className="nav-link" style={{color:'white'}}>Chapter 9</a></li>
                      <li className="list-of-sidebar"><a href="#chapter10" onClick={() => updatedata('Chapter10')} className="nav-link" style={{color:'white'}}>Chapter 10</a></li>
                      <li className="list-of-sidebar"><a href="#chapter11" onClick={() => updatedata('Chapter11')} className="nav-link" style={{color:'white'}}>Chapter 11</a></li>
                      <li className="list-of-sidebar"><a href="#chapter12" onClick={() => updatedata('Chapter12')} className="nav-link" style={{color:'white'}}>Chapter 12</a></li>
                      <li className="list-of-sidebar"><a href="#chapter13" onClick={() => updatedata('Chapter13')} className="nav-link" style={{color:'white'}}>Chapter 13</a></li>
                      <li className="list-of-sidebar"><a href="#chapter14" onClick={() => updatedata('Chapter14')} className="nav-link" style={{color:'white'}}>Chapter 14</a></li>
                      <li className="list-of-sidebar"><a href="#chapter15" onClick={() => updatedata('Chapter15')} className="nav-link" style={{color:'white'}}>Chapter 15</a></li>
                      <li className="list-of-sidebar"><a href="#chapter16" onClick={() => updatedata('Chapter16')} className="nav-link" style={{color:'white'}}>Chapter 16</a></li>
                  </ul>
              </nav>
          </div>
          </div>
          <main id="main-doc" style={{height:'900px',backgroundColor:'white' , overflowY:'auto'}}>
          <div className="container-fluid mathcontent m-auto">
              <div>
                <h1 className="text-center h1overviwe" style={{fontSize:'36px'}}>{state.heading} </h1>
                <p className="overp m-5" style={{fontSize:'18px'}}>{state.Detail1}
                </p>
                <p className="overp m-5" style={{fontSize:'18px'}}>{state.Detail2}
                </p>
                <p className="overp m-5" style={{fontSize:'18px'}}>{state.Detail2}
                </p>
                <p className="overp m-5" style={{fontSize:'18px'}}>{state.Detail2}
                </p>
                
                
            <br/><br/>
              <div className="row">
                <div>
                  <p className="text-right"style={{marginRight:'40px'}}>
                    <Link to="/studymaterial/math11/chapter1"><a href="/#" className="btn btn-primary m-3 p-2" style={{fontSize:'16px'}} > Start Learning</a></Link>
                    <Link to="/studymaterial/math11/math11video"><a href="/#" className="btn btn-success m-3 p-2" style={{fontSize:'16px'}}>Start Learning With Video</a></Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          </main>
        </div>
        <Footer1/>
        </>
  )
}
export default Math11;