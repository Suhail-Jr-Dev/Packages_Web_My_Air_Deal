import React from "react";

function FAQSection({ props }) {
  const faqs = [
    {
      question: "How Long is this site live?",
      answer:
        "Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit nostrud pariatur culpa magna in aute.",
    },
    {
      question: "Can I install/upload anything I want on there?",
      answer:
        "Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit nostrud pariatur culpa magna in aute.",
    },
    {
      question: "How can I migrate to another site?",
      answer:
        "Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit nostrud pariatur culpa magna in aute.",
    },
    {
      question: "Can I change the domain you give me?",
      answer:
        "Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit nostrud pariatur culpa magna in aute.",
    },
    {
      question: "How many sites can I create at once?",
      answer:
        "Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit nostrud pariatur culpa magna in aute.",
    },
    {
      question: "How can I communicate with you?",
      answer:
        "Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit nostrud pariatur culpa magna in aute.",
    },
  ];

  return (
    <div className="bg-white">
      <section className="text-gray-700">
        <div className="container px-5 py-10 mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              The most common questions about how our business works and what we
              can do for you.
            </p>
          </div>

          {/* FAQ Items Section */}
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {props[0]?.faq?.map((faq, index) => (
              <div className="w-full lg:w-1/2 px-4 py-2" key={index}>
                <details className="mb-4" open={index == 0 || index == 1 }>
                  <summary className="font-semibold cursor-pointer bg-gray-200 rounded-md py-2 px-4">
                    {faq.question}
                  </summary>
                  <span className="px-4 py-2">{faq.answer}</span>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQSection;
