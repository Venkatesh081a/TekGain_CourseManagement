import React,{useState} from "react"
const Deactivate=()=>{
    const initialValues={
        courseId:""
    }
    const [courseDeactivate,setCourseDeactivate]=useState(initialValues)

    const handleChange=(e)=>{
        setCourseDeactivate({...courseDeactivate,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
       e.preventDefault();
       console.log(courseDeactivate)
       setCourseDeactivate(initialValues)
    }
    return(
        <div>
        <h3 class="text-light fs-3 ">Course Deactivate</h3>
        <form onSubmit={handleSubmit}>
               <div class="border d-inline-block  bg-white p-2 mb-2">
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label class="form-label">Course Id : </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"  class="" name="courseId" value={courseDeactivate.courseId} onChange={handleChange}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <br/>
                <button class="btn btn-danger">Deactivate Course</button>
        </form>

     </div>
    )
}
export default Deactivate;