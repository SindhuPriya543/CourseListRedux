import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses, addEnquiry } from '../actions/courseActions';

const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.courses);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [enquiry, setEnquiry] = useState('');

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const handleEnquire = (course) => {
    setSelectedCourse(course);
  };

  const handleSubmit = () => {
    if (enquiry && selectedCourse) {
      dispatch(addEnquiry({ courseId: selectedCourse.id, text: enquiry }));
      setEnquiry('');
      setSelectedCourse(null);
    }
  };

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.name}
            <button onClick={() => handleEnquire(course)}>Enquire</button>
          </li>
        ))}
      </ul>
      {selectedCourse && (
        <div>
          <h3>Enquire about {selectedCourse.name}</h3>
          <textarea
            value={enquiry}
            onChange={(e) => setEnquiry(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default CourseList;