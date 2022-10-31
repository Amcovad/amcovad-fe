import { FEEDBACK } from "./constant";

export const showError = (hasErrors: boolean, feedBack: string) =>
  hasErrors && (feedBack === FEEDBACK.ALL || feedBack === FEEDBACK.ERROR);

export const showSuccess = (isValid: boolean, feedBack: string) =>
  isValid && (feedBack === FEEDBACK.ALL || feedBack === FEEDBACK.SUCCESS);
