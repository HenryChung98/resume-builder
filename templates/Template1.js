import styled from "styled-components";

const Temp = styled.div`
  font-size: 10px;
`;

const Header = styled.div`
  background-color: #000000;
  color: white;
  font-size: 10px;
  text-align: center;
`;

const ProExp = styled.div``;

const Education = styled.div``;

const KeySkills = styled.div``;

const Additional = styled.div``;

const Summary = styled.div``;

export default function Template1(props) {
  return (
    <>
      <Temp>
        <Header style={{backgroundColor:props.backColor}}>
          <h3>{props.firstName} {props.lastName}</h3>
          <p>{props.jobTitle}</p>
          <p>
            {props.address}, {props.city}, {props.state}, {props.country},{" "}
            {props.zipCode} | {props.phoneNumber} | {props.email}
          </p>
        </Header>

        <ProExp>
          <h4>Professional Experience</h4>
          {props.companyName} {props.workStart} - {props.workEnd}
          <br />
          {props.positionTitle}
          <br />
          {props.workSummary}
        </ProExp>

        <Education>
          <h4>Education</h4>
          {props.degree} in {props.major} {props.eduStart} - {props.eduEnd}
          <br />
          {props.schoolName}, {props.schoolLoc}
          <br />
          {props.description}
        </Education>

        <KeySkills>
          <h4>Key Skills</h4>
          {props.skill}
        </KeySkills>

        <Additional>
          <h4>Additional</h4>
          {props.addContent}
        </Additional>
        <Summary>
          <h4>Summary</h4>
          {props.sumContent}
        </Summary>
      </Temp>
    </>
  );
}
