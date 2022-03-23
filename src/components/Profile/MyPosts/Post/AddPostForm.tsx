// import { Field, reduxForm } from "redux-final-form";
import { FormApi } from "final-form";
import { Field, Form } from "react-final-form";
import { Textarea } from "../../../FormComponents/FormComponents";
import { composeValidators, maxLengthCreator, required } from "../../../utils/validators/validators";

type PropsType = {
  addPost: (postBody: string) => void
}
type FormValues = {
  postBody: string
}
const AddPostForm = ({ addPost }: PropsType): JSX.Element => {

  const onSubmit = (formData: FormValues, form: FormApi<FormValues>) => {
    addPost(formData.postBody);
    form.reset()
  }

  return (
    <Form
      onSubmit={onSubmit}>
      {
        ({ handleSubmit }) => (
          <form onSubmit={handleSubmit} >
            <div>
              <Field
                name='postBody'
                component={Textarea}
                validate={composeValidators(maxLengthCreator(10))} />
            </div>
            <div>
              <button type="submit"> Add post</button>
            </div>
          </form>
        )
      }
    </Form>
  )
}

export default AddPostForm;
