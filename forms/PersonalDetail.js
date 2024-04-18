import styles from "@/styles/Form.module.css";


export default function PersonalDetail({onChange}) {
    
  return (
    <>
      <form>
        <table className={styles.personalDetail}>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
          </tr>
          <tr>
            <td>
              <input name="firstName" onChange={onChange} />
            </td>
            <td>
              <input name="lastName" onChange={onChange}/>
            </td>
          </tr>
          <tr>
            <br />
          </tr>
          <tr>
            <td>Job Title</td>
            <td>Address</td>
          </tr>
          <tr>
            <td>
              <input name="jobTitle" onChange={onChange}/>
            </td>
            <td>
              <input name="address" onChange={onChange}/>
            </td>
          </tr>
          <tr>
            <br />
          </tr>
          <tr>
            <td>City</td>
            <td>State</td>
          </tr>
          <tr>
            <td>
              <input name="city" onChange={onChange}/>
            </td>
            <td>
              <input name="state" onChange={onChange}/>
            </td>
          </tr>
          <tr>
            <br />
          </tr>
          <tr>
            <br />
          </tr>
          <tr>
            <td>Country</td>
            <td>Zip Code</td>
          </tr>
          <tr>
            <td>
              <input name="country" onChange={onChange}/>
            </td>
            <td>
              <input name="zipCode" onChange={onChange}/>
            </td>
          </tr>
          <tr>
            <br />
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>Email Address</td>
          </tr>
          <tr>
            <td>
              <input name="phoneNumber" onChange={onChange}/>
            </td>
            <td>
              <input name="email" onChange={onChange}/>
            </td>
          </tr>
        </table>
      </form>
    </>
  );
}
