import styled from "styled-components";
import Link from "next/link";
import Template1 from "@/templates/Template1";
import { useState } from "react";
import { useRouter } from "next/router";

// ------------------------------------------
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

// ------------------------------------------

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Template = styled.div`
  background-color: white;
  width: 280px;
  height: 420px;
  border-radius: 10px;
  color: black;
`;

export default function SelectPage() {
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState("#000000");

  function handleSubmit(template, color) {
    router.push(`/Form?template=${template}&color=${encodeURIComponent(color)}`);
  }

  return (
    <>
      <h1>Select a Template</h1>

      <ColorUl>
        <RedBtn onClick={() => setSelectedColor("#e46f7f")} />
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

      <br />
      <Container>
        <Template>
          <button onClick={() => handleSubmit(1, selectedColor)}>
            <Template1
              backColor={selectedColor}
              firstName="Henry"
              lastName="Chung"
              jobTitle="Job Title"
              address="771 Rochester Ave"
              city="Coquitlam"
              state="BC"
              country="Canada"
              zipCode="V3K 2W1"
              phoneNumber="7783223951"
              email="tongsik98@gmail.com"
              companyName="Company Name"
              workStart="Mar 1st, 1998"
              workEnd="Mar 1st, 2024"
              positionTitle="Position Title"
              workSummary="Summary"
              degree="Degree"
              major="Field of Study"
              eduStart="Mar 1st, 1998"
              eduEnd="Mar 1st, 2024"
              schoolName="Douglas College"
              schoolLoc="New West Minster"
              description="Description"
              skill="Skill"
              addContent="Content"
              sumContent="Content"
            ></Template1>
          </button>
        </Template>

        <Template>
          <button onClick={() => handleSubmit(2, selectedColor)}>hi</button>
        </Template>

        <Template>
          <button onClick={() => handleSubmit(3, selectedColor)}>hi</button>
        </Template>

        <Template>
          <button onClick={() => handleSubmit(4, selectedColor)}>hi</button>
        </Template>

        <Template>
          <button onClick={() => handleSubmit(5, selectedColor)}>hi</button>
        </Template>

        <Link href="/FormPage" style={{ margin: "70px" }}>
          <Template></Template>
        </Link>
      </Container>
    </>
  );
}
