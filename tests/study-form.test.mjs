import test from 'node:test';
import assert from 'node:assert/strict';
import { validateStudyPreferences } from '../study-form.js';

test('reports inline errors for missing required values', () => {
  const errors = validateStudyPreferences({
    fullName: '',
    email: '',
    duration: '',
    subjects: []
  });

  assert.equal(errors.fullName, 'Name is required');
  assert.equal(errors.email, 'Email is required');
  assert.equal(errors.duration, 'Please select a study duration');
  assert.equal(errors.subjects, 'Please select at least one subject');
});

test('reports a short name and invalid email format', () => {
  const errors = validateStudyPreferences({
    fullName: 'A',
    email: 'not-an-email',
    duration: '30',
    subjects: ['Math']
  });

  assert.equal(errors.fullName, 'Name must be at least 2 characters');
  assert.equal(errors.email, 'Please enter a valid email');
});

test('accepts a valid form submission', () => {
  const errors = validateStudyPreferences({
    fullName: 'Ada Lovelace',
    email: 'ada@example.com',
    duration: '45',
    subjects: ['Math', 'Physics']
  });

  assert.deepEqual(errors, {});
});
