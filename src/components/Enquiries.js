import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEnquiries } from '../actions/courseActions';

const Enquiries = () => {
  const dispatch = useDispatch();
  const enquiries = useSelector(state => state.enquiries.enquiries);

  useEffect(() => {
    dispatch(fetchEnquiries());
  }, [dispatch]);

  return (
    <div>
      <h2>Enquiries</h2>
      <ul>
        {enquiries.map(enquiry => (
          <li key={enquiry.id}>
            Course ID: {enquiry.courseId} - {enquiry.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Enquiries;