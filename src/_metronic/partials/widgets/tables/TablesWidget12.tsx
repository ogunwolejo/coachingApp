/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Search} from '../../layout/search/Search'
import clsx from 'clsx'
import {CustomizeModal} from '../../../../app/util/cmodal'
import {useFormik} from 'formik'
import {UsersListLoading} from '../../../../app/modules/apps/user-management/users-list/components/loading/UsersListLoading'
import * as Yup from 'yup'

type Props = {
  className: string
  count?: number
}

const itemClass = 'ms-1 ms-lg-3'

const TablesWidget12: React.FC<Props> = ({className, count}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <div className={`card ${className}`}>
        {/* begin::Header */}
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>Employees</span>
            <span className='text-muted mt-1 fw-semibold fs-7'>Over {count} workers</span>
          </h3>

          <div className='card-toolbar'>
            <div className={clsx('app-navbar-item align-items-stretch', itemClass)}>
              <Search />
            </div>

            {/** adding a new employee */}
            <div>
              <button
                type='button'
                className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
                onClick={openModal}
              >
                <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-3 ' />
              </button>
            </div>
            {/** end adding new employee */}
            {/* begin::Menu */}
            <button
              type='button'
              className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
              data-kt-menu-trigger='click'
              data-kt-menu-placement='bottom-end'
              data-kt-menu-flip='top-end'
            >
              <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
            </button>
            {/* begin::Menu 2 */}
            <div
              className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-200px'
              data-kt-menu='true'
            >
              <div className='menu-item px-3'>
                <div className='menu-content px-3 py-3'>
                  <a className='btn btn-primary btn-sm px-4' href='#'>
                    Generate Reports
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end::Header */}

        {/* begin::Body */}
        <div className='card-body py-3'>
          {/* begin::Table container */}
          <div className='table-responsive'>
            {/* begin::Table */}
            <table className='table align-middle gs-0 gy-4'>
              {/* begin::Table head */}
              <thead>
                <tr className='fw-bold text-muted bg-light'>
                  <th className='ps-4 min-w-300px rounded-start'>Employee</th>
                  <th className='min-w-125px'>Age</th>
                  <th className='min-w-125px'>Earnings</th>
                  <th className='min-w-125px'>State Of Origin</th>
                  <th className='min-w-200px text-end rounded-end'></th>
                </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-50px me-5'>
                        <span className='symbol-label bg-light'>
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />
                        </span>
                      </div>
                      <div className='d-flex justify-content-start flex-column'>
                        <div className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                          Brad Simmons
                        </div>
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          Senior Coach
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>34 </p>
                  </td>
                  <td>
                    <p className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>$5,400</p>
                  </td>
                  <td>
                    <p className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>Oyo</p>
                  </td>

                  <td className='text-end'>
                    <button className='btn btn-bg-danger btn-color-muted  btn-active-color-white btn-sm px-4 me-2'>
                      Delete
                    </button>
                    <button className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4'>
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
              {/* end::Table body */}
            </table>
            {/* end::Table */}
          </div>
          {/* end::Table container */}
        </div>
        {/* begin::Body */}
      </div>
      <AddNewEmployeeModalComponent closeModal={() => closeModal()} isModal={isModalOpen} />
    </>
  )
}

export {TablesWidget12}

const editUserSchema = Yup.object().shape({
  stateOfOrigin: Yup.string().min(3, 'Minimum 3 symbols').max(50, 'Maximum 50 symbols').required(),
  dob: Yup.string().required(),
  name: Yup.string().required(),
  earnings: Yup.string(),
  role: Yup.string().required(),
})

interface User {
  name: string
  dob: string
  stateOfOrigin: string
  earnings: string
  role: string
}

const AddNewEmployeeModalComponent: React.FC<{user?: User; isModal: boolean; closeModal: any}> = ({
  user,
  isModal,
  closeModal,
}) => {
  const [userForEdit, setUserForEdit] = useState<User>({
    name: user?.name || '',
    dob: user?.dob || '',
    stateOfOrigin: user?.stateOfOrigin || '',
    earnings: user?.earnings || '',
    role: user?.role || '',
  })

  const cancel = (): void => {
    setUserForEdit({
      name: '',
      dob: '',
      stateOfOrigin:'',
      earnings:'',
      role:''
    })
  }

  const [isUserLoading, setIsUserLoading] = useState<boolean>(false)

  const formik = useFormik({
    initialValues: userForEdit,
    validationSchema: editUserSchema,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      /*try {
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
      }*/
    },
  })

  return (
    <CustomizeModal closeFxn={closeModal} isOpen={isModal}>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h2 className='fw-bolder col-sm-10 col-md-8 col-xl-6'>Add Employee</h2>
            <div
              className='btn btn-icon btn-sm btn-active-icon-primary col-sm-1 offset-sm-1 col-md-2 offset-md-2 col-xl-1 offset-xl-5'
              data-kt-users-modal-action='close'
              onClick={() => closeModal()}
              style={{cursor: 'pointer'}}
            >
              <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
            </div>
          </div>

          {/** modal body */}
          <div className='modal-body scroll-y mx-5 mx-xl-5 my-7'>
            <form className='form' onSubmit={formik.handleSubmit} noValidate>
              <div
                className='d-flex flex-column me-n7 pe-7'
                id='kt_modal_add_user_scroll'
                data-kt-scroll='true'
                data-kt-scroll-activate='{default: false, lg: true}'
                data-kt-scroll-max-height='auto'
                data-kt-scroll-dependencies='#kt_modal_add_user_header'
                data-kt-scroll-wrappers='#kt_modal_add_user_scroll'
                //data-kt-scroll-offset='300px'
              >
                <input
                  placeholder='Name'
                  {...formik.getFieldProps('name')}
                  type='text'
                  name='name'
                  className={'form-control form-control-solid mb-3 mb-lg-1'}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className='fv-plugins-message-container my-1'>
                    <div className='fv-help-block'>
                      <span className='alert'>{formik.errors.name}</span>
                    </div>
                  </div>
                )}

                <input
                  placeholder='Date of Birth'
                  {...formik.getFieldProps('dob')}
                  type='date'
                  name='dob'
                  className={'form-control form-control-solid mb-3 mb-lg-1'}
                />
                {formik.touched.dob && formik.errors.dob && (
                  <div className='fv-plugins-message-container my-1'>
                    <div className='fv-help-block'>
                      <span className='alert'>{formik.errors.dob}</span>
                    </div>
                  </div>
                )}

                <input
                  placeholder='state Of Origin'
                  {...formik.getFieldProps('stateOfOrigin')}
                  type='text'
                  name='stateOfOrigin'
                  className={'form-control form-control-solid mb-3 mb-lg-1'}
                />
                {formik.touched.stateOfOrigin && formik.errors.stateOfOrigin && (
                  <div className='fv-plugins-message-container my-1'>
                    <div className='fv-help-block'>
                      <span className='alert'>{formik.errors.stateOfOrigin}</span>
                    </div>
                  </div>
                )}

                <input
                  placeholder='Earning'
                  {...formik.getFieldProps('earnings')}
                  type='text'
                  name='earnings'
                  className={'form-control form-control-solid mb-3 mb-lg-1'}
                />
                {formik.touched.earnings && formik.errors.earnings && (
                  <div className='fv-plugins-message-container my-1'>
                    <div className='fv-help-block'>
                      <span className='alert'>{formik.errors.earnings}</span>
                    </div>
                  </div>
                )}

                <input
                  placeholder='Role'
                  {...formik.getFieldProps('role')}
                  type='text'
                  name='earnings'
                  className={'form-control form-control-solid mb-3 mb-lg-1'}
                />
                {formik.touched.role && formik.errors.role && (
                  <div className='fv-plugins-message-container my-1'>
                    <div className='fv-help-block'>
                      <span className='alert'>{formik.errors.role}</span>
                    </div>
                  </div>
                )}
              </div>

              {/*end of scroll ::: begin::Actions */}
              <div className='text-center pt-15 pb-4'>
                <button
                  type='reset'
                  onClick={cancel}
                  className='btn btn-light me-3 btn-sm'
                  data-kt-users-modal-action='cancel'
                  disabled={formik.isSubmitting || isUserLoading}
                >
                  Discard
                </button>

                <button
                  type='submit'
                  className='btn btn-primary btn-sm'
                  data-kt-users-modal-action='submit'
                  disabled={
                    isUserLoading || formik.isSubmitting || !formik.isValid || !formik.touched
                  }
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
          </div>
        </div>
      </div>
    </CustomizeModal>
  )
}

/*{'is-invalid': formik.touched.name && formik.errors.name},
                      {
                        'is-valid': formik.touched.name && !formik.errors.name,
                      }*/
