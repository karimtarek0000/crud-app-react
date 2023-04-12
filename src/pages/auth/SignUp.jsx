import { useFormik } from "formik";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import SubmitBtn from "../../components/buttons/SubmitBtn";
import { signUp } from "../../store/auth";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Please enter name"),
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/i,
      "Please enter a valid email address"
    )
    .required("Please enter email"),
  password: Yup.string()
    .matches(
      /(?=.*[a-z]{2,})(?=.*[A-Z]{2,})(?=.*[0-9]{3,})(?=.*[@$%#]{1,})[a-zA-Z\d@$%#]{8,}/,
      "Please enter a password like that | aaAA889@"
    )
    .required("Please enter password"),
  rePassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.authSlice);
  const [terms, setTerms] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    async onSubmit(data, { resetForm }) {
      try {
        resetForm();
        await dispatch(signUp(data)).unwrap();
        setTerms(false);
        navigate("/");
        toast.success(`Signup Successfully, welcome ${data.name}`);
      } catch (err) {
        toast.error(err);
      }
    },
  });

  const CheckboxChangeHandler = () => setTerms((terms) => !terms);

  return (
    <Form onSubmit={formik.handleSubmit}>
      {/* Name */}
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          name="name"
          placeholder="Enter your name"
          autoComplete="off"
        />
        {formik.touched.name && formik.errors.name && (
          <Form.Text className="text-muted">{formik.errors.name}</Form.Text>
        )}
      </Form.Group>

      {/* Email */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="email"
          name="email"
          placeholder="Enter your email"
          autoComplete="off"
        />
        {formik.touched.email && formik.errors.email && (
          <Form.Text className="text-muted">{formik.errors.email}</Form.Text>
        )}
      </Form.Group>

      {/* Password */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="off"
        />
        {formik.touched.password && formik.errors.password && (
          <Form.Text className="text-muted">{formik.errors.password}</Form.Text>
        )}
      </Form.Group>

      {/* Confirm Password */}
      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          value={formik.values.rePassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="password"
          name="rePassword"
          placeholder="Confirm Password"
          autoComplete="off"
        />
        {formik.touched.rePassword && formik.errors.rePassword && (
          <Form.Text className="text-muted">
            {formik.errors.rePassword}
          </Form.Text>
        )}
      </Form.Group>

      {/* Go to login */}
      <p className="text-end">
        You have an account ?
        <Link
          to="/auth"
          className="ms-1 link-underline link-underline-opacity-0"
        >
          login
        </Link>
      </p>

      {/* Agree for terms and conditions */}
      <Form.Check
        className="mb-4"
        type="checkbox"
        checked={terms}
        id="checkbox"
        onChange={CheckboxChangeHandler}
        label="Agree terms and conditions"
      />

      <SubmitBtn
        loading={loading}
        title="Sign up"
        disabled={!terms || loading}
      />
    </Form>
  );
}

export default SignUp;
