import { useForm } from "react-hook-form"

export default function SignUp() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = (data: any) => console.log(data)

  return (<>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register('name', { required: true })} />
      {errors.name && <span>This field is required</span>}
      <input type="text" placeholder="Email" {...register('email', { required: true })} />
      {errors.email && <span>This field is required</span>}
      <input type="password" placeholder="Password" {...register('password', { required: true })} />
      {errors.password && <span>This field is required</span>}
      <div>
        <input type="radio" value="Intercambista" {...register('type', {required: true})}></input>
        <label>Intercambista</label>
        <input type="radio" value="Host" {...register('type', {required: true})}></input>
        <label>Host</label>
      </div>
      <input type="submit" />
    </form>
  </>)
}