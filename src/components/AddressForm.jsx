import { Form, Button } from 'react-bootstrap';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

const AddressForm = () => {
    return (
        <Formik
            initialValues={{
                name: '',
                address: '',
                city: '',
                postalCode: '',
            }}
            validationSchema={Yup.object().shape({
                name: Yup.string().required('Name is required'),
                address: Yup.string().required('Address is required'),
                city: Yup.string().required('City is required'),
                postalCode: Yup.string().required('Postal Code is required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
               
                setSubmitting(false);
            }}
        >
            {({ handleSubmit, isSubmitting }) => (
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Field type="text" name="name" className="form-control" />
                        <p className="text-danger"><small><Field name="name" /></small></p>
                    </Form.Group>

                    <Form.Group controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Field type="text" name="address" className="form-control" />
                        <p className="text-danger"><small><Field name="address" /></small></p>
                    </Form.Group>

                    <Form.Group controlId="formBasicCity">
                        <Form.Label>City</Form.Label>
                        <Field type="text" name="city" className="form-control" />
                        <p className="text-danger"><small><Field name="city" /></small></p>
                    </Form.Group>

                    <Form.Group controlId="formBasicPostalCode">
                        <Form.Label>Postal Code</Form.Label>
                        <Field type="text" name="postalCode" className="form-control" />
                        <p className="text-danger"><small><Field name="postalCode" /></small></p>
                    </Form.Group>

                    <Button variant="primary" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default AddressForm;
