import { body } from 'express-validator';

function emptyToNull(v) {
  const trimmed = v?.trim();
  return trimmed === '' ? null : trimmed;
}

export const validateCreateMessage = [
  body('author').trim().customSanitizer(emptyToNull),
  body('content')
    .trim()
    .customSanitizer(emptyToNull)
    .notEmpty()
    .withMessage('Message is required.'),
];
