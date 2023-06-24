package com.cms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cms.exception.CourseInvalidException;
import com.cms.model.Course;
import com.cms.service.ICourseService;

@RestController  //It indicates that the class will handle the Restful web services
@RequestMapping("/courses")
public class CourseController {
		
	@Autowired  
	private final ICourseService courseService;
	
	public CourseController(ICourseService courseService) { 
		this.courseService = courseService;
	}
	
	
	@PostMapping("/course/addCourse")   //ResponseEntity - (Http response. we can set HTTP status code,header & body of the response
	public ResponseEntity<Course> addCourse(@RequestBody Course course) throws CourseInvalidException{
		                                //Requestbody - which is used to bind the request body to a method parameter		

		Course addedCourse = courseService.addCourse(course);
		return ResponseEntity.ok(addedCourse);	
	}
	
	
	@PutMapping("/course/update/{courseId}/{courseFees}")
	public ResponseEntity<Course> updateCourse(@PathVariable String  courseId,@PathVariable(name = "courseFees") Integer fees) throws CourseInvalidException{
		Course updateCourse = courseService.updateCourse(courseId,fees);
		return ResponseEntity.ok(updateCourse);
	}
	
	
	@GetMapping("/course/viewAll")
	public ResponseEntity<List<Course>> viewAll(){
		try {
			List<Course> viewAllCourses =  courseService.viewAll();
			return ResponseEntity.ok(viewAllCourses);
		}
		catch(Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	
	
	@GetMapping("/course/viewByCourseId/{courseId}")
	public ResponseEntity<Course> viewByCourseId(@PathVariable String courseId) throws CourseInvalidException{
		Course viewByCourseId =  courseService.viewByCourseId(courseId);
		return ResponseEntity.ok(viewByCourseId);
	}
	
	@GetMapping("viewFeedback/{courseId}")
	public ResponseEntity<?> viewFeedback(@PathVariable String courseId){
		try {
			float feedbacks = courseService.findFeedbackRatingForCourseId(courseId);
			return ResponseEntity.ok(feedbacks);
		}
		catch(Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	
	
	 
	@PutMapping("/calculateAverageFeedback/{courseId}/{rating}")
	public ResponseEntity<Course> calculateAverageFeedbackAndUpdate(@PathVariable String courseId, @PathVariable float rating){
		try {
			Course averageFeedback = courseService.calculateAverageFeedbackAndUpdate(courseId,rating);
			return ResponseEntity.ok(averageFeedback);
			}
		catch(Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
		
		
	@DeleteMapping("/course/deactivate/{courseId}")
	public ResponseEntity<Course> deactivateCourse(@PathVariable String courseId) throws CourseInvalidException{
		Course deactivateCourse = courseService.deactivateCourse(courseId);
		return ResponseEntity.ok(deactivateCourse);
		}
	}
	
	
}
