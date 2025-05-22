import React from "react";

const Data = () => {
  const data = [
    {
      id: "1",
      question: "What is an accordion component?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ullam et fugiat corrupti repudiandae ducimus quod omnis error ipsam modi maxime, facilis soluta illo tempore voluptates dignissimos est corporis ea.",
    },
    {
      id: "2",
      question: "What are they used for?",
      answer:
        "Similique, sint temporibus consequatur fuga optio soluta debitis voluptates accusantium beatae, inventore ipsam dolor nobis velit provident incidunt illo mollitia voluptas id quaerat sunt porro ratione ullam vero expedita! Tempora.",
    },
    {
      id: "3",
      question: "Accordion as a musical instrument",
      answer:
        "Dolorem sint necessitatibus nesciunt vitae quisquam ullam facilis nobis nihil expedita unde eligendi modi aliquid quod iusto sunt mollitia quidem aut, obcaecati delectus minima soluta. Ipsum consequatur dignissimos quia soluta.",
    },
    {
      id: "4",
      question: "Accordion in general",
      answer:
        "Dolorem sint necessitatibus nesciunt vitae quisquam ullam facilis nobis nihil expedita unde eligendi modi aliquid quod iusto sunt mollitia quidem aut, obcaecati delectus minima soluta. Ipsum consequatur dignissimos quia soluta.",
    },
  ];

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Data;
