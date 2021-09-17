import * as yup from 'yup';

let formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Full Name is required!')
        .min(2, 'name must be at least 2 characters'),

    email: yup
        .string()
        .email('Must be a valid email address!')
        .required('Email is required!'),

    size: yup
        .string()
        .oneOf(['Extra-large', 'Large', 'Medium', 'Small'], 'Please select a size!'),

    topping1: yup
        .boolean(),

    topping2: yup
        .boolean(),

    topping3: yup
        .boolean(),

    topping4: yup
        .boolean(),

    topping5: yup
        .boolean(),

    special: yup
        .string()
        .trim()
})

formSchema = formSchema.test( // this test is added additional to any other (build-in) tests
  'chooseTopping',
  null, // we'll return error message ourself if needed
  (obj) => {
    // only testing the checkboxes here
    if ( obj.topping1 || obj.topping2 || obj.topping3 ||  obj.topping4 || obj.topping5 ) {
      return true; // everything is fine
    }

    return new yup.ValidationError(
      '❗ Choose at least one topping',
        null,
        'chooseTopping'
      );
    }
);

export default formSchema;