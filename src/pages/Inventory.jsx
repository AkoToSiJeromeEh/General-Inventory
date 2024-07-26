import { useState } from "react";
import { Tab, OrderInfo, PriceInfo, ProductInfo, Review } from "../components";
import { UseToggle } from "../hooks";
import { CreateProdSchema } from "../schema";
import { initialCreateProdValues } from "../data";
import { Formik, Form } from "formik";
import { FaCheck } from "react-icons/fa6";

const steps = [
  {
    name: "Product Information",
  },
  {
    name: "Price Information",
  },
  {
    name: "Order Information",
  },
  {
    name: "Review",
  },
];

function renderStepContent(step, formValues) {
  switch (step) {
    case 0:
      return <OrderInfo />;
    case 1:
      return <PriceInfo />;
    case 2:
      return <ProductInfo />;
    case 3:
      return (
        <Review
          productName={formValues.productName}
          description={formValues.description}
          quantity={formValues.quantity}
          type={formValues.type}
          color={formValues.color}
          category={formValues.category}
          arrivalDate={formValues.arrivalDate}
          expirationDate={formValues.expirationDate}
          lotNo={formValues.lotNo}
          pricingModel={formValues.pricingModel}
          price={formValues.price}
          currency={formValues.currency}
          invoiceNo={formValues.invoiceNo}
          deliveredBy={formValues.deliveredBy}
          doneBy={formValues.doneBy}
        />
      );
    default:
      return <div>Not Found</div>;
  }
}

export const Inventory = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isOpenModal, setOpenModal] = UseToggle(false);
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = CreateProdSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const openModal = () => setOpenModal(true);

  const handleTabClick = (index) => setActiveTab(index);

  const handleBack = () => {
    setActiveStep((step) => step - 1);
  };

  function handleSubmit(values, actions) {
    if (isLastStep) {
      alert(
        `Dear ${values.firstName}, Your account has been created successfully`
      );
    } else {
      setActiveStep((prev) => prev + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  const tabsData = [
    { name: "Incoming" },
    { name: "Outcoming" },
    { name: "Balance" },
  ];

  return (
    <main className="grid grid-rows-[auto_1fr] grid-cols-[auto_1fr] text-black relative">
      <aside className="row-span-full border-[0.2px] border-gray-400 p-5 w-[15rem] max-w-full"></aside>
      <section className="border-[0.2px] border-gray-400 p-5 h-[5rem] max-h-full">
        <h1 className="text-2xl font-medium">General Inventory</h1>
      </section>
      <section className="border-[0.2px] border-gray-400 p-5 bg-white">
        <div className="flex flex-row justify-between gap-2">
          <div className="flex flex-row gap-10 flex-1 flex-wrap font-medium relative isolate">
            {tabsData.map((tab, index) => (
              <Tab
                key={index}
                index={index}
                name={tab.name}
                activeTab={activeTab}
                handleTabClick={handleTabClick}
              />
            ))}
            <div className="border-b-[0.2rem] border-gray-white w-full absolute top-0 bottom-0 -z-10"></div>
          </div>

          
        </div>
        <div className="tab-content">
          {tabsData[activeTab].name === "Incoming" ? (
            <>
              {isOpenModal && (
                <div className="absolute left-0 right-0 top-0 bg-white p-5 bottom-0  ">
                  <h2 className="text-2xl font-medium w-full">
                    Create Product
                  </h2>
                  <div className="p-5 mt-10  flex-1 flex flex-row gap-10 w-full md:w-[90%]">
                    <ul className="p-5 list-none flex flex-col gap-3 mt-20">
                      {steps.map((data, index) => (
                        <li
                          key={index}
                          className={`flex flex-row gap-2 items-center ${
                            index === activeStep
                              ? "font-semibold text-[1.08rem]"
                              : "text-gray-400 font-medium"
                          }`}
                        >
                          {index < activeStep ? (
                            <FaCheck className="text-accent-dark text-lg" />
                          ) : (
                            <span
                              className={`${
                                index === activeStep
                                  ? "bg-accent-dark w-6 h-1"
                                  : "w-5 h-1 bg-accent"
                              }`}
                            ></span>
                          )}
                          {data.name}
                        </li>
                      ))}
                    </ul>
                    <div className="p-5 flex-1 ">
                      <h3 className={`text-3xl font-medium ${activeStep === 3 ? ' w-full md:w-[90%] m-auto' : ''}`}>
                        {activeStep === 0
                          ? "Product Information"
                          : activeStep === 1
                          ? "Pricing Information"
                          : activeStep === 2
                          ? "Order Information"
                          : activeStep === 3
                          ? "Review Information"
                          : "Not Found"}
                      </h3>
                      {activeStep !== 3 && (
                        <div className="border-[2px] border-[#AAAA] mt-3 "></div>
                      )}
                      <Formik
                        onSubmit={handleSubmit}
                        initialValues={initialCreateProdValues}
                        validationSchema={currentValidationSchema}
                        validateOnChange={true}
                        validateOnBlur={true}
                      >
                        {(formik) => {
                          const formValues = formik.values;
                          return (
                            <Form >
                              {renderStepContent(activeStep, formValues)}
                              <div className="flex flex-row justify-between font-bold mb-6 mt-5">
                                {activeStep !== 0 ? (
                                  <>
                                    <button
                                      onClick={handleBack}
                                      type="button"
                                      className="border-b-2 border-black"
                                    >
                                      Previous
                                    </button>
                                    <button
                                      type="submit"
                                      className="bg-green-700 p-2 rounded-md text-white"
                                    >
                                      {isLastStep
                                        ? "Create Product"
                                        : "Continue"}
                                    </button>
                                  </>
                                ) : (
                                  <>
                                    <button
                                      onClick={() => setOpenModal(false)}
                                      type="button"
                                      className="border-b-2 border-black"
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      type="submit"
                                      className="bg-green-700 p-2 rounded-md text-white"
                                    >
                                      Continue
                                    </button>
                                  </>
                                )}
                              </div>
                            </Form>
                          );
                        }}
                      </Formik>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            ""
          )}
        </div>
      </section>
    </main>
  );
};
