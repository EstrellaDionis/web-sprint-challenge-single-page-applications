import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('Name is required')
    .min(1, 'Minimum of 2 characters for your name'),

    size: yup
    .string()
    .oneOf(['10 inch', '12 inch', '14 inch', 'Choose a size']),

    topping1: yup
    .boolean(),

    topping2: yup
    .boolean(),

    special: yup
    .string()
    .trim()
})

export default formSchema;