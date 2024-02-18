
import './App.css'
import {Options,PersonalDetails, ProfessionalDetails} from "./components/sidebar.jsx"
import { ResumeTop,ResumeInfo } from './components/Resume.jsx'
import {useState} from "react"
 


function App() {

   const[personalInfo,setPersonalInfo]=useState({name:"Pritesh",email:"Jogdhankar",address:"Bangalore",phoneNumber:"56891164485"})  
   const [EducationList,setEducationList]=useState([
    {
      startDate: "08/2020",
      endDate: "present",
      location: "New York City, US",
      schoolName: "London City University",
      degree: "Bachelors in Economics",
      visibilty:true
    },
    
   ])
   const [ExperienceList,setExperienceList]=useState([{
    startDate: "08/2020",
    endDate: "present",
    location: "New York City, US",
    companyName: "Umbrella Inc.",
    positionTitle: "UX & UI Designer",
    description: "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
    visibilty:true

  },])

   return (
    <>
     <div id="Sidebar">
      <Options/>
      <PersonalDetails personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}/>
      <ProfessionalDetails EducationList={EducationList} ExperienceList={ExperienceList} setEducationList={setEducationList} setExperienceList={setExperienceList}/> 

     </div>
     <div id='resume'>
     <div class="resume-container">
     <ResumeTop personalInfo={personalInfo} />
     <ResumeInfo ExperienceList={ExperienceList} EducationList={EducationList}/>
     </div>
     </div>
    </>
  )
}

export default App