import react,{useState} from 'react';
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
     
        <div>
        <h3 class="text-light fs-3">Course FeedBack Rating</h3>
        <form onSubmit={handleSubmit}>
               <div class="border d-inline-block  bg-white p-2 mb-2">
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label class="form-label">Course Id : </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"  class="" name="courseId" value={viewFeedBack.courseId} onChange={handleChange}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <br/>
                <button class="btn btn-danger">Submit</button>
        </form>

     </div>
    )
}
export default ViewFedbacktracking;