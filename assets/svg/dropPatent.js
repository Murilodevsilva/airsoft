import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg"
const Patent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M.84 5.88v.84h19.32v-.84H.84Zm0 4.2v.84h19.32v-.84H.84Zm0 4.2v.84h19.32v-.84H.84Zm6.641 2.94a.42.42 0 0 0-.223.722l2.94 2.94a.42.42 0 0 0 .604 0l2.94-2.94a.419.419 0 0 0-.302-.722H7.481Zm1.103.84h3.832L10.5 19.976 8.584 18.06Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Rect width={21} height={21} fill="#fff" rx={7} />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Patent
