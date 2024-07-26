import PropTypes from "prop-types";
import moment from 'moment'
export const ReviewList = ({ title, reviews }) => {
  return (
    <div className=" flex flex-col gap-5  mt-5 w-[90%] m-auto">
      <h4 className="text-[1.20rem] font-bold">{title}</h4>
      <ul className=" flex flex-col gap-3 capitalize">
        {reviews.map((review, index) => (
          <li
            key={index}
            className={`text-gray-400 font-semibold flex justify-between items-center `}
          >
            {review.name}{" "}
            <span className=" font-medium text-black">
              {review.value}
            </span>
          </li>
        ))}
      </ul>
      {!title.includes("Order") && (
        <div className="border-b-2 border-gray-400 pb-5 w-[90%] m-auto"></div>
      )}
    </div>
  );
};

ReviewList.propTypes = {
  title: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export const Review = ({
  productName,
  description,
  quantity,
  category,
  color,
  type,
  arrivalDate,
  expirationDate,
  lotNo,
  pricingModel,
  price,
  currency,
  invoiceNo,
  deliveredBy,
  doneBy,
}) => {

  const OrderInformationData = [
    {
      name: "Invoice No.",
      value: invoiceNo,
    },
    {
      name: "Delivered By",
      value: deliveredBy,
    },
    {
      name: "Done By",
      value: doneBy,
    },
  ];
  const PricingInformationData = [
    {
      name: "Pricing Model",
      value: pricingModel,
    },
    {
      name: "Price",
      value: price,
    },
    {
      name: "Currency",
      value: currency,
    },
  ];
  const ProductInformationData = [
    {
      name: "Product Name",
      value: productName,
    },
    {
      name: "Description",
      value: description,
    },
    {
      name: "Quantity",
      value: quantity,
    },
    {
      name: "Category",
      value: category,
    },
    {
      name: "Type",
      value: type,
    },
    {
      name: "Color",
      value: color,
    },
    {
      name: "Arrival Date",
      value: moment(arrivalDate).format('ddd MMM DD YYYY'),
    },
    {
      name: "Expiration Date",
      value:  `${moment(expirationDate).format('ddd MMM DD YYYY')} - ${moment(expirationDate).fromNow()}`,
    },
    {
      name: "Lot No.",
      value: lotNo,
    },
  ];

  return (
    <div className=" flex flex-col gap-8 mt-5">
      <ReviewList
        title="Product Information"
        reviews={ProductInformationData}
      />
      <ReviewList
        title="Pricing Information"
        reviews={PricingInformationData}
      />
      <ReviewList 
        title="Order Information" 
        reviews={OrderInformationData} 
      />
    </div>
  );
};

Review.propTypes = {
  productName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  arrivalDate: PropTypes.string.isRequired,
  expirationDate: PropTypes.string.isRequired,
  lotNo: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  pricingModel: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  invoiceNo: PropTypes.string.isRequired,
  deliveredBy: PropTypes.string.isRequired,
  doneBy: PropTypes.string.isRequired,
};
