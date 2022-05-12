import { Formik } from "formik"
import st from './SearchFormStyles.module.css'

const SearchUsersForm = (props: any): JSX.Element => {

  const onSubmit = (values: any, { setSubmitting }: { setSubmitting: (term: boolean) => void }) => {
    ``
    setSubmitting(false)
  }

  return (
    <div>
      <Formik
        initialValues={{ term: '' }}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="term"
              name="term"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button className={st.button} type="submit" disabled={isSubmitting}>
              Search
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}
export default SearchUsersForm