
package com.cms.model;

import javax.persistence.GeneratedValue;

import javax.persistence.GenerationType;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//lombok annotation helps reduce boilerplate code by automatically generating common methods and constructors.
@Document(collection = "courses") //The instances of the class will be stored in a mongodb collection named users
@Getter
@Setter// generates getter and setter methods
@NoArgsConstructor  //Initializes the object with default values.
@AllArgsConstructor //Initializes the constructor by taking all the fields of that class
public class Course { 
	
	@Id  // generatedValue - is used to specify how the primary key values should be generated for an entity.
	@GeneratedValue(strategy = GenerationType.AUTO)
	private String courseId;  // strategy - it specifies that the strategy to be used for generating the primary key values.
	
	private String courseName;
	private Integer fees;
	private Integer duration;
//	public Course(String courseId, String courseName, Integer fees, Integer duration, String courseType, float rating) {
//		super();
//		this.courseId = courseId;
//		this.courseName = courseName;
//		this.fees = fees;
//		this.duration = duration;
//		this.courseType = courseType;
//		this.rating = rating;
//	}
	
	private String courseType;
	private float rating;

	
}
