// import { Field, reduxForm } from "redux-final-form";
import { FormApi } from "final-form";
import { Field, Form } from "react-final-form";
import { Textarea } from "../../../FormComponents/FormComponents";
import { composeValidators, maxLengthCreator, required } from "../../../utils/validators/validators";
import st from './../../../Login/Login.module.css'
import postStyle from './Post.module.css'

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
            <div className={postStyle.addPost} >
              <Field
                name='postBody'
                component={Textarea}
                validate={composeValidators(maxLengthCreator(100), required)} />
            </div>

            <button className={postStyle.button} type="submit"> Add post</button>

          </form>
        )
      }
    </Form>
  )
}

export default AddPostForm;
