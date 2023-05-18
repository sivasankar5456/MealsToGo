import styled from "styled-components/native";
import { Text } from "react-native";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
    color:#4B0150;
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
    font-size: ${theme.fontSizes.caption};

`;


const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;



const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

export const MyText = styled(Text)`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

MyText.defaultProps = {
  variant: "body",
};








// const firebaseConfig = {
//   apiKey: "AIzaSyB95hhu-_Jv9wn8HFfITNY2_wnA8C7mq9I",
//   authDomain: "mealstogo-721b9.firebaseapp.com",
//   projectId: "mealstogo-721b9",
//   storageBucket: "mealstogo-721b9.appspot.com",
//   messagingSenderId: "267490516243",
//   appId: "1:267490516243:web:9dba1ac4bba671d3f78ee6"
// };


