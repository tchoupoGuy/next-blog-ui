import PageTitle from "@next/components/page-title";
import React from "react";

const Contacts: React.FC = () => {
  return (
    <section>
      <PageTitle title="Contacts" />
      <p>guytchoupo@gmail.com</p>
      <p>+1 438 580 5709</p>
      <p>Montreal,QC</p>
      <p>https://www.linkedin.com/in/guy-tchoupo</p>
    </section>
  );
};

export default Contacts;
