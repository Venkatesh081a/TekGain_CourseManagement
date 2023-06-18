import react,{useState} from 'react';

import './Addcourse.modules.css';

const Addcourse=()=>{
    const initialValues={
        courseId:"",
        courseName:"",
        fees:"",
        durationInMonths:"",
        courseType:""
}

    const [addUser,setAddUser]=useState(initialValues)
    const handleChange=(e)=>{
       setAddUser({...addUser,[e.target.name]:e.target.value});
    }

    
    const handleSubmit=(e)=>{
       e.preventDefault();
       if(!addUser.courseId&&!addUser.courseName&&!addUser.fees&&!addUser.durationInMonths&&!addUser.courseType) return ;
       console.log(addUser)
       setAddUser(initialValues)
    }
    return(
        <div className="main">
            <h3 class="text-light fs-3 p-3">Addcourse</h3>
            <form onSubmit={handleSubmit}>
            
            <div className="div">
              <label className="label">Course Id : </label>             
              <input type="text"  name="courseId" value={addUser.courseId} onChange={handleChange}/> 
              
             
             </div>
                <br/>
                
                <div className="div">
                <label class="label">Course Name : </label>
                <input type="text"  name="courseName" value={addUser.courseName} onChange={handleChange}/> 
                
                
                </div>
                <br/>
               
               
                <div class="div">
                <label class="label">Fees:</label>
                <input type="text"  name="fees"value={addUser.fees} onChange={handleChange}/>
                </div>
                
                <br/>
                
                <div className="div">
               <label class="label">Duration In Months:</label>
                <input type="text"   name="durationInMonths" value={addUser.durationInMonths} onChange={handleChange}/>
               
                </div>
                <br/>
                
                
                <div className="div">
               <label class="label">Course Type:</label>
                <input type="text"  name="courseType" value={addUser.courseType} onChange={handleChange}/>
                
                </div>
              
                <br/>
                <button class="btn btn-danger m-2">Add course</button>
            </form>
        </div>
        

    )

}
export default Addcourse;