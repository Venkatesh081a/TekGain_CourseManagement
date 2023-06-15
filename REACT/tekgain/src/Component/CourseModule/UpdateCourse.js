import react ,{useState} from 'react';
import './update.module.css';
const UpdateCourse=()=>{
    const initialValues={
        courseId:"",
        updateFee:""

    }
    const [updateCourse,setUpdateCourse]=useState(initialValues);
    const handleChange=(e)=>{
        setUpdateCourse({...updateCourse,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(updateCourse)
    setUpdateCourse(initialValues)
    }
    
    return(
     <div className="main">
        <h3 class="text-light fs-3 p-2 m-2">Update Course Fee</h3>
        <form onSubmit={handleSubmit}>
           <div className='divtag'>
            <div className="div">
             <label class="label">Course Id : </label>
                <input type="text"  class="" name="courseId" value={updateCourse.courseId} 
                onChange={handleChange}/>
                </div>
                </div>
                <br/>
                <div className='divtag'>
            <div className="div">
             <label class="label">Update Fee:</label>
                <input type="text"  name="updateFee" value={updateCourse.updateFee} onChange={handleChange}/> 
                </div>
                </div>
                <br/>
            <button class="btn btn-danger m-2">Update Course</button>
        </form>

     </div>
    )
}
export default UpdateCourse;