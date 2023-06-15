import react,{useState} from 'react';
import './viewcourse.module.css'
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
     <div className='main'>
        <h3 class="text-light fs-3 m-2">View Course By Id</h3>
        <form onSubmit={handleSubmit}>
            <div className='divtag'>
               <div className="div">
               <label class="label">Course Id : </label>
               
                <input type="text"  class="" name="courseId" value={ViewCourse.courseId} 
                onChange={handleChange}/> 
                </div>
                </div>
                <br/>
                <button class="btn btn-danger m-2">View Course</button>
        </form>

     </div>
    )
}
export default ViewCourse;