import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const Calendar = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={26}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M6 .472c-.547 0-1 .453-1 1v1H2c-.262 0-.527.095-.715.285-.19.187-.285.453-.285.715v20c0 .261.096.527.285.716.188.188.453.284.715.284h21c.262 0 .527-.096.717-.284.187-.189.283-.455.283-.716v-20c0-.262-.096-.528-.283-.715A1.017 1.017 0 0 0 23 2.472h-3v-1c0-.547-.453-1-1-1h-1c-.547 0-1 .453-1 1v1H8v-1c0-.547-.453-1-1-1H6Zm0 1h1v3H6v-3Zm12 0h1v3h-1v-3Zm-16 2h3v1c0 .547.453 1 1 1h1c.547 0 1-.453 1-1v-1h9v1c0 .547.453 1 1 1h1c.547 0 1-.453 1-1v-1h3v3.5H2v-3.5Zm0 4.5h21v15.5H2v-15.5Zm3 2v11.5h15v-11.5H5Zm1 1h2.5v2.5H6v-2.5Zm3.5 0H12v2.5H9.5v-2.5Zm3.5 0h2.5v2.5H13v-2.5Zm3.5 0H19v2.5h-2.5v-2.5ZM6 14.472h2.5v2.5H6v-2.5Zm3.5 0H12v2.5H9.5v-2.5Zm3.5 0h2.5v2.5H13v-2.5Zm3.5 0H19v2.5h-2.5v-2.5ZM6 17.972h2.5v2.5H6v-2.5Zm3.5 0H12v2.5H9.5v-2.5Zm3.5 0h2.5v2.5H13v-2.5Zm3.5 0H19v2.5h-2.5v-2.5Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 .472h25v25H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Calendar
