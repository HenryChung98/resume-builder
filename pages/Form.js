import { useRouter } from "next/router";
import styled from "styled-components";
import styles from "@/styles/Form.module.css";
import PersonalDetail from "@/forms/PersonalDetail";
import Template1 from "@/templates/Template1";
import { useState } from "react";

const FormBox = styled.div`
  border: solid;
`;
const PreviewBox = styled.div`
  border: solid;
  width: 595px;
  text-align: center;
`;

export default function FormPage() {
  const router = useRouter();
  const { color, template } = router.query;

  function nextForm() {}

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    phoneNumber: "",
    email: "",
  });



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className={styles.container}>
        <FormBox>
          <button onClick={nextForm}>NEXT</button>
          <PersonalDetail onChange={handleInputChange}></PersonalDetail>
        </FormBox>
        <PreviewBox>
          <Template1
            backColor={color}
            {...formData}
          />
        </PreviewBox>
      </div>
    </>
  );
}
