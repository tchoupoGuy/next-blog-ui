import React from "react";
import PageTitle from "@next/components/page-title";
import { Space, Typography } from "antd";

const { Text, Link } = Typography;
const Contacts: React.FC = () => {
  return (
    <section>
      <PageTitle title="Contacts" />
      <p>
        <Text>guytchoupo@gmail.com</Text>
      </p>
      <p>
        <Text>+1 438 580 5709</Text>
      </p>
      <p>
        <Text>Montreal,QC</Text>
      </p>
      <p>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/guy-tchoupo-945560156/"
        >
          linkedin profile
        </Link>
      </p>
    </section>
  );
};

export default Contacts;
