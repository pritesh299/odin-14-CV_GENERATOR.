import { CiRead } from "react-icons/ci";
import { CiUnread } from "react-icons/ci";
import { useState } from 'react';
import { FaDeleteLeft } from "react-icons/fa6";
import { ResumeInfo } from "./Resume";

export  function Preform({title,remove,visibility,changeVisibility}) {
  
    return (
        <div className="preform" >
            <h3>{title}</h3>
            <div>
            { visibility ? <button  onClick={()=>{changeVisibility()}}><CiRead></CiRead></button> :<button  onClick={()=>{changeVisibility()}}><CiUnread></CiUnread></button>}
            <button onClick={remove}><FaDeleteLeft /></button>
            </div>
        </div>
    );
}


export function ExperienceForm({ save, Cancel }) {
    return (
      <form id="ExperienceForm">
        <label>Company Name<input type="text" id="experienceCompanyName" required /></label>
        <label>Position Details<input type="text" id="experiencePositionTitle" required /></label>
        <label>Start Date<input type="date" id="experienceStartDate" required /></label>
        <label>End Date<input type="date" id="experienceEndDate" required /></label>
        <label>Description<input type="text" id="experienceDescription" required /></label>
        <button type="submit" id="saveExperience" onClick={save}>Save</button>
        <button type="button" id="CancelExperience" onClick={Cancel}>Cancel</button>
      </form>
    );
  }
  
  export function EducationForm({ save, Cancel }) {
    return (
      <form id="EducationForm">
        <label>School Name<input type="text" id="EducationSchoolName" required /></label>
        <label>Degree<input type="text" id="EducationDegree" required /></label>
        <label>Start Date<input type="date" id="EducationStartDate" required /></label>
        <label>End Date<input type="date" id="EducationEndDate" required /></label>
        <label>Location<input type="text" id="EducationLocation" required /></label>
        <button type="submit" id="saveEducation" onClick={save}>Save</button>
        <button type="button" id="CancelEducation" onClick={Cancel}>Cancel</button>
      </form>
    );
  }
  