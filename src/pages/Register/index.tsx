import { FormInput, FormLabel } from '@/components/Base/Form';
import users from '@/fakers/users';
import Button from '@/components/Base/Button';
import clsx from 'clsx';
import _ from 'lodash';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
function Main() {
  const schema = yup
    .object({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().min(8).required(),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className='container grid lg:h-screen grid-cols-12 lg:max-w-[1550px] 2xl:max-w-[1750px] py-10 px-5 sm:py-14 sm:px-10 md:px-36 lg:py-0 lg:pl-14 lg:pr-12 xl:px-24'>
        <div
          className={clsx([
            'relative z-50 h-full col-span-12 p-7 sm:p-14 bg-white rounded-2xl lg:bg-transparent lg:pr-10 lg:col-span-5 xl:pr-24 2xl:col-span-4 lg:p-0',
            "before:content-[''] before:absolute before:inset-0 before:-mb-3.5 before:bg-white/40 before:rounded-2xl before:mx-5",
          ])}
        >
          <div className='relative z-10 flex flex-col justify-center w-full h-full py-2 lg:py-32'>
            <div className='rounded-[0.8rem] w-[55px] h-[55px] border border-primary/30 flex items-center justify-center'>
              <div className='relative flex items-center justify-center w-[50px] rounded-[0.6rem] h-[50px] bg-gradient-to-b from-theme-1/90 to-theme-2/90 bg-white'>
                <div className='w-[26px] h-[26px] relative -rotate-45 [&_div]:bg-white'>
                  <div className='absolute w-[20%] left-0 inset-y-0 my-auto rounded-full opacity-50 h-[75%]'></div>
                  <div className='absolute w-[20%] inset-0 m-auto h-[120%] rounded-full'></div>
                  <div className='absolute w-[20%] right-0 inset-y-0 my-auto rounded-full opacity-50 h-[75%]'></div>
                </div>
              </div>
            </div>
            <div className='mt-10'>
              <div className='text-2xl font-medium'>Sign Up</div>
              <div className='mt-2.5 text-slate-600'>
                Already have an account?{' '}
                <Link className='font-medium text-primary' to={'/login'}>
                  Sign In
                </Link>
              </div>
              <form className='mt-6' onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <FormLabel>First Name*</FormLabel>
                  <FormInput
                    {...register('firstName')}
                    type='text'
                    className={`block px-4 py-3.5 rounded-[0.6rem] ${clsx({
                      'border-danger': errors.firstName,
                    })}`}
                    // className='block px-4 py-3.5 rounded-[0.6rem] border-slate-300/80'
                    placeholder={users.fakeUsers()[0].name.split(' ')[0]}
                  />
                  {errors.firstName && (
                    <div className='mt-2 text-danger'>
                      {typeof errors.firstName.message === 'string' &&
                        errors.firstName.message}
                    </div>
                  )}
                </div>
                <div>
                  <FormLabel className='mt-5'>Last Name*</FormLabel>
                  <FormInput
                    {...register('lastName')}
                    type='text'
                    className={`block px-4 py-3.5 rounded-[0.6rem] ${clsx({
                      'border-danger': errors.lastName,
                    })}`}
                    // className=' border-slate-300/80'
                    placeholder={users.fakeUsers()[0].name.split(' ')[1]}
                  />
                  {errors.lastName && (
                    <div className='mt-2 text-danger'>
                      {typeof errors.lastName.message === 'string' &&
                        errors.lastName.message}
                    </div>
                  )}
                </div>
                <div>
                  <FormLabel className='mt-5'>Email*</FormLabel>
                  <FormInput
                    {...register('email')}
                    type='text'
                    className={`block px-4 py-3.5 rounded-[0.6rem] ${clsx({
                      'border-danger': errors.email,
                    })}`}
                    // className='block px-4 py-3.5 rounded-[0.6rem] border-slate-300/80'
                    placeholder={users.fakeUsers()[0].email}
                  />
                  {errors.email && (
                    <div className='mt-2 text-danger'>
                      {typeof errors.email.message === 'string' &&
                        errors.email.message}
                    </div>
                  )}
                </div>
                <div>
                  <FormLabel className='mt-5'>Password*</FormLabel>
                  <FormInput
                    {...register('password')}
                    type='password'
                    className={`block px-4 py-3.5 rounded-[0.6rem] ${clsx({
                      'border-danger': errors.password,
                    })}`}
                    // className='block px-4 py-3.5 rounded-[0.6rem] border-slate-300/80'
                    placeholder='************'
                  />
                  {errors.password && (
                    <div className='mt-2 text-danger'>
                      {typeof errors.password.message === 'string' &&
                        errors.password.message}
                    </div>
                  )}
                </div>

                <div className='mt-5 text-center xl:mt-8 xl:text-left'>
                  <Button
                    variant='primary'
                    rounded
                    className='bg-gradient-to-r from-theme-1/70 to-theme-2/70 w-full py-3.5 xl:mr-3'
                  >
                    Sign Up
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='fixed container grid w-screen inset-0 h-screen grid-cols-12 lg:max-w-[1550px] 2xl:max-w-[1750px] pl-14 pr-12 xl:px-24'>
        <div
          className={clsx([
            'relative h-screen col-span-12 lg:col-span-5 2xl:col-span-4 z-20',
            "after:bg-white after:hidden after:lg:block after:content-[''] after:absolute after:right-0 after:inset-y-0 after:bg-gradient-to-b after:from-white after:to-slate-100/80 after:w-[800%] after:rounded-[0_1.2rem_1.2rem_0/0_1.7rem_1.7rem_0]",
            "before:content-[''] before:hidden before:lg:block before:absolute before:right-0 before:inset-y-0 before:my-6 before:bg-gradient-to-b before:from-white/10 before:to-slate-50/10 before:bg-white/50 before:w-[800%] before:-mr-4 before:rounded-[0_1.2rem_1.2rem_0/0_1.7rem_1.7rem_0]",
          ])}
        ></div>
        <div
          className={clsx([
            'h-full col-span-7 2xl:col-span-8 lg:relative',
            "before:content-[''] before:absolute before:lg:-ml-10 before:left-0 before:inset-y-0 before:bg-gradient-to-b before:from-theme-1 before:to-theme-2 before:w-screen before:lg:w-[800%]",
            "after:content-[''] after:absolute after:inset-y-0 after:left-0 after:w-screen after:lg:w-[800%] after:bg-texture-white after:bg-fixed after:bg-center after:lg:bg-[25rem_-25rem] after:bg-no-repeat",
          ])}
        ></div>
      </div>
      <ThemeSwitcher />
    </>
  );
}

export default Main;
