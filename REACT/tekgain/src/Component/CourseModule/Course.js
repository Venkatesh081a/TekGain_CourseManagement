import react,{useState} from 'react';
import Addcourse from './Addcourse';
import UpdateCourse from './UpdateCourse';
import ViewCourse from './Viewcourse';
import ViewFedbacktracking from './ViewFeedbacktracking';
import Deactivate from './Deactivate';
const Course=(data)=>{
    
    const [addCoursebtn,setaddCoursebtn]=useState(false);
    const [updateCoursebtn,setUpdateCoursebtn]=useState(false);
    const [viewCoursebtn,setViewCoursebtn]=useState(false);
    const [viewFeedBackbtn,setViewFeedbackbtn]=useState(false);
    const [deactivatebtn,setDeactivatebtn]=useState(false)
    console.log(data)
    const handleAddcourse=()=>{
        
        setaddCoursebtn(!addCoursebtn)
        setUpdateCoursebtn(false)
        setViewCoursebtn(false)
        setViewFeedbackbtn(false)
       
       
    }
    const handleUpdatecourse=()=>{
       
        setUpdateCoursebtn(!updateCoursebtn)
        setaddCoursebtn(false)
        setViewCoursebtn(false)
        setDeactivatebtn(false)
        setViewFeedbackbtn(false)
        
    }

    const handleViewcourse=()=>{
      setViewCoursebtn(!viewCoursebtn)
      setaddCoursebtn(false)
      setUpdateCoursebtn(false)
      setViewFeedbackbtn(false)
      setDeactivatebtn(false)
    }
    const handleViewFeedBack=()=>{
        setViewFeedbackbtn(!viewFeedBackbtn)
        setViewCoursebtn(false)
        setaddCoursebtn(false)
        setUpdateCoursebtn(false)
        setDeactivatebtn(false)
  
      }
      const handleDeactivateCourse=()=>{
        setDeactivatebtn(!deactivatebtn)
        setViewFeedbackbtn(false)
        setViewCoursebtn(false)
        setaddCoursebtn(false)
        setUpdateCoursebtn(false)
      }
    return(
    
    
    <div class="bg-secondary">
     <h2 class="text-info fs-3 p-2">COURSE INFORMATION</h2>
     <button class="btn btn-warning text-light" onClick={handleAddcourse}>Addcourse</button>
     
     &nbsp;
     <button class="btn btn-warning text-light" onClick={handleUpdatecourse}>UpdateCourse</button>
     &nbsp;
     <button class="btn btn-warning text-light" onClick={handleViewcourse}>ViewCourse</button>
     &nbsp;
     <button class="btn btn-warning text-light" onClick={handleViewFeedBack}>ViewFedback Rating</button>
     &nbsp;
     <button class="btn btn-warning text-light" onClick={handleDeactivateCourse}>Course Deactivate</button>

     {addCoursebtn?<><Addcourse/></>:<></>}
     {updateCoursebtn?<><UpdateCourse/></>:<></>}
     {viewCoursebtn?<><ViewCourse/></>:<></>}
     {viewFeedBackbtn?<><ViewFedbacktracking/></>:<></>}
     {deactivatebtn?<><Deactivate/></>:<></>}
    </div>
    
    
        )

}
export default Course;
 