import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
    .string()
    .require('Name is required')
    .min(2, 'Minimum of 2 characters for your name'),

    size: yup
    .string()
    .require('Model is required')
    .max(1, 'Please select a size'),

    topping1: yup.boolean(),

    topping2: yup.boolean(),

    special: yup.string()
})

export default formSchema;