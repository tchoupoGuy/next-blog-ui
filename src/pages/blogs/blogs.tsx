import styles from "@next/components/layout/app-layout.module.scss";

import PageTitle from "@next/components/page-title";
import React from "react";

const Item = ({ index, color }: { index: number; color: string }) => {
  return (
    <div
      style={{
        // width: 100,
        // height: 100,
        background: color,
        border: "1px solid #000",
        padding: 16,
        textAlign: "center",
      }}
      className={`${styles.gridItem}${index}`}
    >{`Grid item-${index}`}</div>
  );
};

export enum Color {
  TRANSPARENT = "transparent",
  WHITE = "#fff",
  BLACK = "#000",
  RED = "#ff0000",
  WHITE_GREY = "#fcfcfc",
  CHARCOAL_GREY = "#3a3d4a",
  MEDIUM_GREY = "#abafb3",
  COOL_GREY = "#a7a9ac",
  FORD_GREY = "#979797",
  GOOGLE_GREY = "#626262",
  CORN_FLOWER = "#6774ff",
  MEDIUM_BLUE = "#3d48e9",
  DARK_SKY_BLUE = "#3aa8dd",
  SKY_BLUE = "#3aa8dd",
  DEEP_BLUE = "#01008a",
  TANGERINE = "#ff9400",
  STRONG_YELLOW = "#f6a601",
  UGLY_YELLOW = "#e3d200",
  TEAL_BLUE = "#0078b6",
  ERROR = "#ff3b5f",
  DARK_PINK = "#e52f63",
  ERROR_LIGHT = "#ffdede",
  WARNING_YELLOW = "#fff0d4",
  WARNING_TEXT = "#b89c2c",
  FACEBOOK_BLUE = "#1976d2",
  PALANQUIN_BOLD = "#707070",
  GREY_WHITE = "#dddddd",
  GREY_BLACK = "#979797",
  ORANGE = "#f6a601",
  BLACK_TITLE = "#2c2f45",
}

const Blogs: React.FC = () => {
  return (
    <section className={styles.gridContainer}>
      {/* <PageTitle title="Blogs" /> */}
      {[
        { id: 1, color: "red" },
        { id: 2, color: Color.ERROR_LIGHT },
        { id: 3, color: "green" },
        { id: 4, color: "gray" },
        { id: 5, color: Color.CHARCOAL_GREY },
        { id: 6, color: Color.DEEP_BLUE },
        { id: 7, color: Color.TANGERINE },
        { id: 8, color: "" },
        { id: 9, color: Color.CORN_FLOWER },
      ].map(({ color, id }) => {
        return <Item index={id} color={color} />;
      })}
    </section>
  );
};

export default Blogs;
