/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {CoachActionCard} from '../../../../_metronic/partials/content/cards/CoachActionCard'
import {IconUserModel} from '../CoachModels'
import {CustomizeModal} from '../../../util/cmodal'
import {KTSVG} from '../../../../_metronic/helpers'
import {useFormik} from 'formik'
import * as Yup from 'yup'

export function ActionPoints() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2 text-uppercase text-gray-700'>Action points</h3>
        <button className='btn btn-sm btn-primary' onClick={openModal}>
          New Action Point
        </button>
      </div>

      <div className='row g-6 g-xl-9'>
        <div className='col-md-6 col-xl-4'>
          <CoachActionCard
            //icon='/media/svg/brand-logos/plurk.svg'
            badgeColor='primary'
            status='In Progress'
            statusColor='primary'
            title='Fitnes App'
            description='CRM App application to HR efficiency'
            date='November 10, 2021'
            //budget='$284,900.00'
            progress={50}
            users={users1}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <CoachActionCard
            //icon='/media/svg/brand-logos/disqus.svg'
            badgeColor='info'
            status='Pending'
            statusColor='info'
            title='Leaf CRM'
            description='CRM App application to HR efficiency'
            date='May 10, 2021'
            //budget='$36,400.00'
            progress={30}
            users={users2}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <CoachActionCard
            //icon='/media/svg/brand-logos/figma-1.svg'
            badgeColor='success'
            status='Completed'
            statusColor='success'
            title='Atica Banking'
            description='CRM App application to HR efficiency'
            date='Mar 14, 2021'
            //budget='$605,100.00'
            progress={100}
            users={users3}
          />
        </div>
      </div>

      <div className='d-flex flex-stack flex-wrap pt-10'>
        <div className='fs-6 fw-bold text-gray-700'>Showing 1 to 10 of 50 entries</div>

        <ul className='pagination'>
          <li className='page-item previous'>
            <a href='#' className='page-link'>
              <i className='previous'></i>
            </a>
          </li>

          <li className='page-item active'>
            <a href='#' className='page-link'>
              1
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              2
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              3
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              4
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              5
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              6
            </a>
          </li>

          <li className='page-item next'>
            <a href='#' className='page-link'>
              <i className='next'></i>
            </a>
          </li>
        </ul>
      </div>
      <CreateActionPoint closeModal={() => closeModal()} isModal={isModalOpen} />
    </>
  )
}

const users1: Array<IconUserModel> = [
  {name: 'Emma Smith', avatar: '/media/avatars/300-6.jpg'},
  {name: 'Rudy Stone', avatar: '/media/avatars/300-1.jpg'},
  {name: 'Susan Redwood', initials: 'S', color: 'primary'},
]

const users2 = [
  {name: 'Alan Warden', initials: 'A', color: 'warning'},
  {name: 'Brian Cox', avatar: '/media/avatars/300-5.jpg'},
]

const users3 = [
  {name: 'Mad Masy', avatar: '/media/avatars/300-6.jpg'},
  {name: 'Cris Willson', avatar: '/media/avatars/300-1.jpg'},
  {name: 'Mike Garcie', initials: 'M', color: 'info'},
]

const users4 = [
  {name: 'Nich Warden', initials: 'N', color: 'warning'},
  {name: 'Rob Otto', initials: 'R', color: 'success'},
]

const users5 = [
  {name: 'Francis Mitcham', avatar: '/media/avatars/300-20.jpg'},
  {name: 'Michelle Swanston', avatar: '/media/avatars/300-7.jpg'},
  {name: 'Susan Redwood', initials: 'S', color: 'primary'},
]

const users6 = [
  {name: 'Emma Smith', avatar: '/media/avatars/300-6.jpg'},
  {name: 'Rudy Stone', avatar: '/media/avatars/300-1.jpg'},
  {name: 'Susan Redwood', initials: 'S', color: 'primary'},
]

const users7 = [
  {name: 'Meloday Macy', avatar: '/media/avatars/300-2.jpg'},
  {name: 'Rabbin Watterman', initials: 'S', color: 'success'},
]

const users8 = [
  {name: 'Emma Smith', avatar: '/media/avatars/300-6.jpg'},
  {name: 'Rudy Stone', avatar: '/media/avatars/300-1.jpg'},
  {name: 'Susan Redwood', initials: 'S', color: 'primary'},
]

const users9 = [
  {name: 'Meloday Macy', avatar: '/media/avatars/300-2.jpg'},
  {name: 'Rabbin Watterman', initials: 'S', color: 'danger'},
]

const editActionPointSchema = Yup.object().shape({
  Title: Yup.string().required(),
  Description: Yup.string().required(),
  DueDate: Yup.string().required(),
  onCompletePercentage: Yup.number().min(0).max(100),
})

interface ActionPoint {
  Title: string
  Description: string
  DueDate: string
  onCompletePercentage?: number
}

const CreateActionPoint: React.FC<{
  actionPoint?: ActionPoint
  isModal: boolean
  closeModal: any
}> = ({actionPoint, isModal, closeModal}) => {
  const [actionPointForEdit, setActionPointForEdit] = useState<ActionPoint>({
    Title: actionPoint?.Title || '',
    Description: actionPoint?.Description || '',
    DueDate: actionPoint?.DueDate || '',
    onCompletePercentage: actionPoint?.onCompletePercentage || 0,
  })

  const cancel = (): void => {
    setActionPointForEdit({
      Title: '',
      Description: '',
      DueDate: '',
      onCompletePercentage: 0,
    })
  }

  const [isUserLoading, setIsUserLoading] = useState<boolean>(false)

  const formik = useFormik({
    initialValues: actionPointForEdit,
    validationSchema: editActionPointSchema,
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
            <h2 className='fw-bolder col-sm-10 col-md-8 col-xl-6'>New Action Point</h2>
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
                  placeholder='Title'
                  {...formik.getFieldProps('Title')}
                  type='text'
                  name='Title'
                  className={'form-control form-control-solid mb-3 mb-lg-2'}
                />
                {formik.touched.Title && formik.errors.Title && (
                  <div className='fv-plugins-message-container my-1'>
                    <div className='fv-help-block'>
                      <span className='alert'>{formik.errors.Title}</span>
                    </div>
                  </div>
                )}

                <textarea
                  placeholder='Description'
                  {...formik.getFieldProps('Description')}
                  name='Description'
                  rows={3}
                  className={'form-control form-control-solid mb-3 mb-lg-2'}
                ></textarea>
                {formik.touched.Description && formik.errors.Description && (
                  <div className='fv-plugins-message-container my-1'>
                    <div className='fv-help-block'>
                      <span className='alert'>{formik.errors.Description}</span>
                    </div>
                  </div>
                )}

                <input
                  placeholder='Due Date'
                  {...formik.getFieldProps('DueDate')}
                  type='date'
                  name='stateOfOrigin'
                  className={'form-control form-control-solid mb-3 mb-lg-2'}
                />
                {formik.touched.DueDate && formik.errors.DueDate && (
                  <div className='fv-plugins-message-container my-1'>
                    <div className='fv-help-block'>
                      <span className='alert'>{formik.errors.DueDate}</span>
                    </div>
                  </div>
                )}

                <input
                  placeholder='onCompletePercentage'
                  {...formik.getFieldProps('onCompletePercentage')}
                  type='number'
                  name='earnings'
                  className={'form-control form-control-solid mb-3 mb-lg-1'}
                />
                {formik.touched.onCompletePercentage && formik.errors.onCompletePercentage && (
                  <div className='fv-plugins-message-container my-1'>
                    <div className='fv-help-block'>
                      <span className='alert'>{formik.errors.onCompletePercentage}</span>
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
                  <span className='indicator-label'>Create</span>
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
