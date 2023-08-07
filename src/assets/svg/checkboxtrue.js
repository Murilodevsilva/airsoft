import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
const CheckBoxIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#2374E1"
        d="M17.417 2.75H4.583A1.833 1.833 0 0 0 2.75 4.583v12.834c0 1.008.816 1.833 1.833 1.833h12.834a1.833 1.833 0 0 0 1.833-1.833V4.583a1.833 1.833 0 0 0-1.833-1.833Zm-8.25 12.833L4.583 11l1.293-1.293 3.29 3.282 6.958-6.957 1.293 1.301-8.25 8.25Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h22v22H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default CheckBoxIcon;
