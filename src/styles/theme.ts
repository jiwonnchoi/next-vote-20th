const Theme = {
  color: {
    Main_Blue: "#1B7BE8",
    Dark_Blue: "#0E4E97",
    Sky_Blue: "#5DA9FF",
    Pale_Blue_1: "#AAD2FF",
    Pale_Blue_2: "#EAF4FF",
    Blue_Grey: "#E3E8F5",
    Yellow: "#FFEFB1",
    Red: "#DF4646",
    Grey900: "#191F28",
    Grey800: "#333D4B",
    Grey700: "#4E5968",
    Grey600: "#6B7684",
    Grey500: "#8B95A1",
    Grey400: "#B0B8C1",
    Grey300: "#D1D6DB",
    Grey200: "#E5E8EB",
    Grey100: "#F2F4F6",
    Grey50: "#F9FAFB",
  },
  mobile: `@media (max-width: 768px)`,
  font: {
    Headline_1: `
      font-family: SUITE;
      font-size: 2rem;
      font-style: normal;
      font-weight: 800;
      line-height: 135%; /* 2.7rem */
      letter-spacing: -0.002rem;
    `,
    Headline_2: `
      font-family: SUITE;
      font-size: 1.75rem;
      font-style: normal;
      font-weight: 700;
      line-height: 135%; /* 2.3625rem */
      letter-spacing: -0.00175rem;
    `,
    Headline_3: `
      font-family: SUITE;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 800;
      line-height: 135%; /* 2.025rem */
      letter-spacing: -0.0015rem;
    `,
    Headline_4: `
      font-family: SUITE;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 600;
      line-height: 135%; /* 2.025rem */
      letter-spacing: -0.0015rem;
    `,
    Headline_5: `
      font-family: SUITE;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 800;
      line-height: 135%; /* 1.6875rem */
      letter-spacing: -0.00125rem;
    `,
    Subhead_1_bold: `
      font-family: SUIT;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 600;
      line-height: 135%; /* 1.6875rem */
      letter-spacing: -0.00125rem;
    `,
    Subhead_2_bold: `
      font-family: SUIT;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 700;
      line-height: 135%; /* 1.51875rem */
      letter-spacing: -0.00113rem;
    `,
    Subhead_med: `
      font-family: SUIT;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 500;
      line-height: 135%; /* 1.51875rem */
      letter-spacing: -0.00113rem;
    `,
    Body_1_bold: `
      font-family: SUIT;
      font-size: 1rem;
      font-style: normal;
      font-weight: 700;
      line-height: 140%; /* 1.4rem */
      letter-spacing: -0.001rem;
    `,
    Body_1_med: `
      font-family: SUIT;
      font-size: 1rem;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 1.4rem */
      letter-spacing: -0.001rem;
    `,
    Body_2_bold: `
      font-family: SUIT;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 700;
      line-height: 140%; /* 1.225rem */
      letter-spacing: -0.00088rem;
    `,
    Body_2_med: `
      font-family: SUIT;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 1.225rem */
      letter-spacing: -0.00088rem;
    `,
    Body_2_reg: `
      font-family: SUIT;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 1.225rem */
      letter-spacing: -0.00088rem;
    `,
    Caption_bold: `
      font-family: SUIT;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 700;
      line-height: 135%; /* 1.0125rem */
      letter-spacing: -0.00075rem;
    `,
    Caption_med: `
      font-family: SUIT;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 500;
      line-height: 135%; /* 1.0125rem */
      letter-spacing: -0.00075rem;
    `,
  },
  scroll: {
    none: `
    scrollbar-width: none;  
    -ms-overflow-style: none;  
    &::-webkit-scrollbar {
      display: none;  
    }
    &::-webkit-scrollbar-track {
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      display: none; 
    }
  `,
  },
};
export default Theme;
