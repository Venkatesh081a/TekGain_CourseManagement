import React,{useState} from "react"
import "./deactive.module.css";
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
        <div class="App">
        <h3 class="text-light fs-3 m-2 ">Course Deactivate</h3>
        <form onSubmit={handleSubmit}>
               <div className="divtag">
                <div className="div">
               <label className="label">Course Id : </label>
               <input type="text"  class="" name="courseId" value={courseDeactivate.courseId} onChange={handleChange}/> 
                </div>
                </div>
                <br/>
                <button class="btn btn-danger m-2">Deactivate Course</button>
        </form>

     </div>
    )
}
export default Deactivate;