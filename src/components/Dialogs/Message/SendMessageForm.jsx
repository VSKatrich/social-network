import { Field, Form } from "react-final-form";
import { Textarea } from "../../FormComponents/FormComponents";
import { composeValidators, maxLengthCreator } from "../../utils/validators/validators";

const sendMessageForm = (props) => {

  const onSubmit = (formData, form) => {
    props.sendMessage(formData.messageBody);
    form.reset();
  };

  return (
    <Form
      onSubmit={onSubmit}>
      {
        ({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field name='messageBody'
                component={Textarea}
                validate={composeValidators(maxLengthCreator(40))} />
            </div>
            <div>
              <button type='submit' disabled={submitting} > Send </button>
            </div>
          </form>
        )
      }
    </Form>
  )
}
export default sendMessageForm;
