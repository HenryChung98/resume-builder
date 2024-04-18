import styled from "styled-components";
import { useState } from "react";

const ColorUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: center;
`;

const ColorBtn = styled.li`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  border: none;
  display: inline-block;
  margin-right: 50px;
  cursor: pointer;
`;

const RedBtn = styled(ColorBtn)`
  background-color: #e46f7f;
`;
const YellowBtn = styled(ColorBtn)`
  background-color: #fccc00;
`;
const GreenBtn = styled(ColorBtn)`
  background-color: #33a194;
`;
const BlueBtn = styled(ColorBtn)`
  background-color: #2999ff;
`;
const PurpleBtn = styled(ColorBtn)`
  background-color: #6b5de1;
`;
const GrayBtn = styled(ColorBtn)`
  background-color: #8c95a8;
`;
const NavyBtn = styled(ColorBtn)`
  background-color: #060b3d;
`;
const BlackBtn = styled(ColorBtn)`
  background-color: #1e1e1e;
`;

const ColorSelect = styled.input.attrs({ type: "color" })`
  border: none;
  position: relative;
  bottom: 5px;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
`;
export default function ColorContainer() {
  const [selectedColor, setSelectedColor] = useState("#000000");

  return (
    <>
      <ColorUl>
        <RedBtn
          onClick={() => {
            setSelectedColor("#e46f7f");
            console.log(selectedColor);
          }}
        />
        <YellowBtn onClick={() => setSelectedColor("#fccc00")} />
        <GreenBtn onClick={() => setSelectedColor("#33a194")} />
        <BlueBtn onClick={() => setSelectedColor("#2999ff")} />
        <PurpleBtn onClick={() => setSelectedColor("#6b5de1")} />
        <GrayBtn onClick={() => setSelectedColor("#8c95a8")} />
        <NavyBtn onClick={() => setSelectedColor("#060b3d")} />
        <BlackBtn onClick={() => setSelectedColor("#1e1e1e")} />
        <ColorSelect
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        />
      </ColorUl>
    </>
  );
}
