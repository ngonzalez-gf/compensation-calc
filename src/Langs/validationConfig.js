import messagesEn from 'vee-validate/dist/locale/en';
import messagesES from 'vee-validate/dist/locale/es';

export const validationConfig = {
  errorBagName: 'errors', // change if property conflicts.
  fieldsBagName: 'fields',
  delay: 0,
  locale: 'es',
  dictionary: {
    en: {
      messages: messagesEn 
    },
    es: {
      messages: messagesES 
    }
  },
  strict: true,
  classes: false,
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  },
  events: 'input|blur',
  inject: true,
  validity: false,
  aria: true
};


