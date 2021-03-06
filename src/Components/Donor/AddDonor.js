import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";

import {createDonor} from '../../actions'

const AddDonor = ({ touched, errors }) => {
  return (
    <Form>
      <Field type="text" name="name" placeholder="name" />
      {touched.name && errors.name && <p className="UN">{errors.name}</p>}
      <Field type="text" name="phone" placeholder="phone" />
      {touched.phone && errors.phone && <p className="PW">{errors.phone}</p>}
      <Field type="email" name="email" placeholder="email" />
      {touched.email && errors.email && <p className="EM">{errors.email}</p>}
      <Field type="date" name="contacted_on" placeholder="contacted_on" />
      {touched.contacted_on && errors.contacted_on && (
        <p className="CO">{errors.contacted_on}</p>
      )}
      <label>Preferred Contact Method</label>
      <Field as="select" name="method">
        <option value="phone">Phone</option>
        <option value="email">Email</option>
      </Field>
      {touched.method && errors.method && <p className="MD">{errors.method}</p>}
      <button type="submit">Create New Donor</button>
    </Form>
  );
};

const FormikAddDonor = withFormik({
  mapPropsToValues({ name, phone, email, contacted_on, method }) {
    return {
      name: name || "",
      phone: phone || "",
      email: email || "",
      contacted_on: contacted_on || "",
      method: method || "phone" 
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    phone: Yup.string().required(),
    email: Yup.string().required(),
    contacted_on: Yup.string().required()
  }),
  handleSubmit(values, { props }) {
    props.createDonor(values)
    setTimeout(()=> {props.toggleUpdateAllDonors()}, 1000)
  }
})(AddDonor);

export default connect(null, {createDonor})(FormikAddDonor);
