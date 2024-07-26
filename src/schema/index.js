import * as Yup from "yup";


const LoginSchema = Yup.object().shape({
  email : Yup.string().required('email  is required'),
  password : Yup.string().required('password  is required')
})

const CreateProdSchema = [

  Yup.object().shape({
    productName: Yup.string().required("Product name is required"),
    description: Yup.string().required("Description is required"),
    quantity: Yup.number()
      .required("Quantity is required")
      .positive()
      .integer(),
    color: Yup.string().nullable(true),
    arrivalDate: Yup.date().required("Arrival date is required"),
    expirationDate: Yup.date()
      .required("Expiration date is required")
      .min(
        Yup.ref("arrivalDate"),
        "Expiration date must be after arrival date"
      ),
    lotNo: Yup.string().required("Lot number is required"),
  }),

  Yup.object().shape({
    pricingModel: Yup.string().required('Pricing model is required'),
    price: Yup.number().required('Price is required').positive(),
  }),
  
  Yup.object().shape({
    invoiceNo: Yup.string().required('Invoice number is required'),
    deliveredBy: Yup.string().required('Delivered by is required'),
    doneBy: Yup.string().required('Done by is required'),
    image: Yup.string().nullable(true),
  })

];
export {
	CreateProdSchema,
  LoginSchema
}