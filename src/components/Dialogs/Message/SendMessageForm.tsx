import { Field, Form } from "react-final-form";
import { Textarea } from "../../FormComponents/FormComponents";
import { composeValidators, maxLengthCreator } from "../../utils/validators/validators";

type SendMessageFormType = {
  sendMessage: (newMessage: string) => void
}

const sendMessageForm = ({ sendMessage }: SendMessageFormType): JSX.Element => {

  const onSubmit = (formData: { messageBody: string }, form: any) => {
    sendMessage(formData.messageBody);
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
