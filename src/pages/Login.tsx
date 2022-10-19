import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export default function Login() {
  const { register, handleSubmit, watch , formState: {errors} } = useForm()
  const onSubmit = (data: any) => console.log(data)

  console.log(watch('email'))

  return (<>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Email" {...register('email', {required: true})} />
      {errors.email && <span>This field is required</span>}
      <input type="password" placeholder="Password" {...register('password', {required: true})} />
      {errors.password && <span>This field is required</span>}
      <Link to="/">Login</Link>
    </form>  
  </>)
}