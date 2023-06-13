import react ,{useState} from 'react';
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
     <div class="">
        <h1>Update Course Fee</h1>
        <form onSubmit={handleSubmit}>
           
            <div class="border d-inline-block  bg-white p-2 mb-2">
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label class="form-label">Course Id : </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"  class="" name="courseId" value={updateCourse.courseId} onChange={handleChange}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <br/>
                <div class="border d-inline-block bg-white p-2 mb-2">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label class="form-label">Update Fee:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"  name="updateFee" value={updateCourse.updateFee} onChange={handleChange}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <br/>
            <button class="btn btn-danger">Update Course</button>
        </form>

     </div>
    )
}
export default UpdateCourse;