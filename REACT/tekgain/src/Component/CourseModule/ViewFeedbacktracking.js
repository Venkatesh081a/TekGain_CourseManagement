import react,{useState} from 'react';
import './viewFeedbacktracking.module.css'
const ViewFedbacktracking=()=>{
    const initialValues={
        courseId:""
    }
    const [viewFeedBack,setViewFeedback]=useState(initialValues);
    const handleChange=(e)=>{
        setViewFeedback({...viewFeedBack,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
       e.preventDefault();
       console.log(viewFeedBack)
       setViewFeedback(initialValues)
    }
    return(
     
        <div className="main">
        <h3 class="text-light fs-3 m-2">Course FeedBack Rating</h3>
        <form onSubmit={handleSubmit}>
               <div class="divtag">
               <div class="div">
              <label class="label">Course Id : </label>
                <input type="text"  class="" name="courseId" value={viewFeedBack.courseId} onChange={handleChange}/> 
                </div>
                </div>
                <br/>
                <button class="btn btn-danger m-2">Submit</button>
        </form>

     </div>
    )
}
export default ViewFedbacktracking;