import React from "react";

import { Typography } from "antd";

const HomePage: React.FC = () => {
  return (
    <>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          padding: "15%  10%",
          justifyContent: "space-between",
        }}
      >
        <div
        // style={{ padding: "25% 10%" }}
        >
          <Typography.Title level={5} style={{ padding: 8, color: "blue" }}>
            Hello I am
          </Typography.Title>
          <Typography.Title
            style={{ padding: 8, fontWeight: "bold", fontSize: 40 }}
          >
            Guy Tchoupo
          </Typography.Title>
          <Typography.Title level={4} style={{ padding: 8, color: "GrayText" }}>
            Frontend developer
          </Typography.Title>
        </div>
        <div>
          <img
            src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"
            alt="profile-image"
            style={{ width: 300, height: 300, borderRadius: "50%" }}
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;
