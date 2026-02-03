import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  async function onSubmit(data) {
    // Api call ko simulate krne k liye
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input className={errors.firstName ? 'input-error' : ""} {...register('firstName', { required: true,
          minLength:{ value:2, message:"Min length will be 2"}, 
          maxLength:{ value:20, message:"Max length will be 20"} })} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>

      <div>
        <label>Last Name</label>
        <input className={errors.lastName ? 'input-error' : ""} {...register('lastName', { required: true,
          minLength: {value:2, message:"Min length will be 2"}, 
          maxLength: {value:20, message:"Max length will be 20"}})} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>

      <div>
        <label>Age</label>
        <input
          type="number"
          {...register('age', { required: true, min: 1, max: 120 })}
        />
        {errors.age && <p>Age must be between 1 and 120</p>}
      </div>

      <input type="submit"  disabled={isSubmitting} value={isSubmitting ? "Submitting..." : "Submit"}/>
    </form>
  )
}

export default App
