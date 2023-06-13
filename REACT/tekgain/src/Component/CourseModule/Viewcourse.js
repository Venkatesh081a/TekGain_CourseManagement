import react,{useState} from 'react';
const ViewCourse=()=>{
    const initialValues={
        courseId:""
    }
    const [ViewCourse,setViewCourse]=useState(initialValues)

    const handleChange=(e)=>{
        setViewCourse({...ViewCourse,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
       e.preventDefault();
       setViewCourse(initialValues)
    }
    return(
     <div>
        <h3 class="text-light fs-3">View Course By Id</h3>
        <form onSubmit={handleSubmit}>
               <div class="border d-inline-block  bg-white p-2 mb-2">
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label class="form-label">Course Id : </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"  class="" name="courseId" value={ViewCourse.courseId} onChange={handleChange}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <br/>
                <button class="btn btn-danger">View Course</button>
        </form>

     </div>
    )
}
export default ViewCourse;