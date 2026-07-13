export function validateStudyPreferences(values) {
  const errors = {};

  if (!values.fullName || values.fullName.trim().length === 0) {
    errors.fullName = 'Name is required';
  } else if (values.fullName.trim().length < 2) {
    errors.fullName = 'Name must be at least 2 characters';
  }

  if (!values.email || values.email.trim().length === 0) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email';
  }

  if (!values.duration) {
    errors.duration = 'Please select a study duration';
  }

  if (!Array.isArray(values.subjects) || values.subjects.length === 0) {
    errors.subjects = 'Please select at least one subject';
  }

  return errors;
}
