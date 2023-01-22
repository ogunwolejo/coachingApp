import {FC, useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {isNotEmpty, toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {initialUser, User} from '../core/_models'
import clsx from 'clsx'
import {useListView} from '../core/ListViewProvider'
import {UsersListLoading} from '../components/loading/UsersListLoading'
import {createUser, updateUser} from '../core/_requests'
import {useQueryResponse} from '../core/QueryResponseProvider'
import Select from 'react-select'

type Props = {
  isUserLoading: boolean
  user: User
}

const options = [
  {value: 'chocolate', label: 'Chocolate'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'vanilla', label: 'Vanilla'},
]

const editUserSchema = Yup.object().shape({
  
  coach: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Name is required'),
  seniorCoach: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Name is required'),
  projectNo: Yup.string().required(),
  clientName: Yup.string().required(),
})

const UserEditModalForm: FC<Props> = ({user, isUserLoading}) => {
  const {setItemIdForUpdate} = useListView()
  const {refetch} = useQueryResponse()

  const [userForEdit] = useState<User>({
    ...user,
    clientName: user.clientName || initialUser.clientName,
    coach: user.coach || initialUser.coach,
    seniorCoach: user.seniorCoach || initialUser.seniorCoach,
    
  })

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch()
    }
    setItemIdForUpdate(undefined)
  }

  const formik = useFormik({
    initialValues: userForEdit,
    validationSchema: editUserSchema,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      try {
        if (isNotEmpty(values.id)) {
          await updateUser(values)
        } else {
          await createUser(values)
        }
      } catch (ex) {
        console.error(ex)
      } finally {
        setSubmitting(true)
        cancel(true)
      }
    },
  })

  return (
    <>
      <form id='kt_modal_add_user_form' className='form' onSubmit={formik.handleSubmit} noValidate>
        {/* begin::Scroll */}
        <div
          className='d-flex flex-column scroll-y me-n7 pe-7'
          id='kt_modal_add_user_scroll'
          data-kt-scroll='true'
          data-kt-scroll-activate='{default: false, lg: true}'
          data-kt-scroll-max-height='auto'
          data-kt-scroll-dependencies='#kt_modal_add_user_header'
          data-kt-scroll-wrappers='#kt_modal_add_user_scroll'
          data-kt-scroll-offset='300px'
        >
          {/* begin::Input group for client Name */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Client</label>
            {/* end::Label */}

            {/* begin::Input */}
            <Select
              placeholder='Client Name'
              {...formik.getFieldProps('clientName')}
              //type='text'
              name='clientName'
              classNames={{
                control: () =>
                  `${clsx(
                    'form-control form-control-solid mb-3 mb-lg-0',
                    {'is-invalid': formik.touched.clientName && formik.errors.clientName},
                    {
                      'is-valid': formik.touched.clientName && !formik.errors.clientName,
                    }
                  )}`,
              }}
              options={options}
            />
            {formik.touched.clientName && formik.errors.clientName && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span className='alert'>{formik.errors.clientName}</span>
                </div>
              </div>
            )}
            {/* end::Input */}
          </div>
          {/* end::Input group */}

          {/* begin::Input group for coach */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Coach</label>
            {/* end::Label */}

            {/* begin::Input */}
            <Select
              placeholder='coach'
              {...formik.getFieldProps('coach')}
              name='coach'
              classNames={{
                control: () =>
                  `${clsx(
                    'form-control form-control-solid mb-3 mb-lg-0',
                    {'is-invalid': formik.touched.coach && formik.errors.coach},
                    {
                      'is-valid': formik.touched.coach && !formik.errors.coach,
                    }
                  )}`,
              }}
            />
            {formik.touched.coach && formik.errors.coach && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span className='alert'>{formik.errors.coach}</span>
                </div>
              </div>
            )}
            {/* end::Input */}
          </div>
          {/* end::Input group */}

          {/* begin::Input group for senior coach */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Senior Coach</label>
            {/* end::Label */}

            {/* begin::Input */}
            <Select
              placeholder='Senior Coach'
              {...formik.getFieldProps('seniorCoach')}
              name='seniorCoach'
              classNames={{
                control: () => clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.seniorCoach && formik.errors.seniorCoach},
                {
                  'is-valid': formik.touched.seniorCoach && !formik.errors.seniorCoach,
                }
              )}}            />
            {formik.touched.seniorCoach && formik.errors.seniorCoach && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span className='alert'>{formik.errors.seniorCoach}</span>
                </div>
              </div>
            )}
            {/* end::Input */}
          </div>
          {/* end::Input group */}
        </div>
        {/* end::Scroll */}

        {/* begin::Actions */}
        <div className='text-center pt-15'>
          <button
            type='reset'
            onClick={() => cancel()}
            className='btn btn-light me-3'
            data-kt-users-modal-action='cancel'
            disabled={formik.isSubmitting || isUserLoading}
          >
            Discard
          </button>

          <button
            type='submit'
            className='btn btn-primary'
            data-kt-users-modal-action='submit'
            disabled={isUserLoading || formik.isSubmitting || !formik.isValid || !formik.touched}
          >
            <span className='indicator-label'>Submit</span>
            {(formik.isSubmitting || isUserLoading) && (
              <span className='indicator-progress'>
                Please wait...{' '}
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
        </div>
        {/* end::Actions */}
      </form>
      {(formik.isSubmitting || isUserLoading) && <UsersListLoading />}
    </>
  )
}

export {UserEditModalForm}
