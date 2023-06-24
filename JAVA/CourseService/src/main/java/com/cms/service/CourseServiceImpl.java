package com.cms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.exception.CourseInvalidException;
import com.cms.model.Course;
import com.cms.repository.CourseRepository;




@Service   // inorder to make this class as a service we use @Service
public class CourseServiceImpl implements ICourseService {

	@Autowired
	private CourseRepository courseRepository;

	@Override
	public Course addCourse(Course cObj) throws CourseInvalidException {
	 Optional<Course> course = courseRepository.findByCourseId(cObj.getCourseId());
	 if(course.isPresent()) {
		 throw new CourseInvalidException("CourseId already exists");
	 }
		 Course c = courseRepository.save(cObj);
		 return c;
	}
	

	@Override
	public Course updateCourse(String courseId, Integer fees) throws CourseInvalidException {
		Optional<Course> course = courseRepository.findByCourseId(courseId);
		if(course.isPresent()) {
			Course updateCourseFees = course.get();
			updateCourseFees.setFees(fees);
			courseRepository.save(updateCourseFees);
			return updateCourseFees;
		}
		throw new CourseInvalidException("CourseId does not exists");
	}
	

	@Override
	public Course viewByCourseId(String courseId) throws CourseInvalidException {
		Optional<Course> course = courseRepository.findByCourseId(courseId);
		if(course.isPresent()) {
			return course.get();
		}
		throw new CourseInvalidException("Invalid Course Id");
	}
	
	

	@Override
	public Course calculateAverageFeedbackAndUpdate(String courseId, float rating) throws CourseInvalidException {
		return null;
	}

	public float findFeedbackRatingForCourseId(String courseId) throws CourseInvalidException {
		return 0;
	}

	@Override
	public Course deactivateCourse(String courseId) throws CourseInvalidException {
		Optional<Course> course = courseRepository.findByCourseId(courseId);
		if(course.isPresent()) {
			courseRepository.deleteByCourseId(courseId);
		}
		throw new  CourseInvalidException("CourseId does not exists");


	}

	@Override
	public List<Course> viewAll() {
		List<Course> courses = courseRepository.findAll();
		return courses;
	}

}
