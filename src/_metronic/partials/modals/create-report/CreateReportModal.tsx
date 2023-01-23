/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react'
import {createPortal} from 'react-dom'
import {Modal} from 'react-bootstrap'
import {defaultCreateAppData, ICreateAppData} from './IAppModels'
import {KTSVG} from '../../../helpers'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import Select from 'react-select'

type Props = {
  show: boolean
  handleClose: () => void
  report?: Report
}

const modalsRoot = document.getElementById('root-modals') || document.body

const ReportSchema = Yup.object().shape({
  Title: Yup.string().required(),
  report: Yup.string().required(),
  projectNo: Yup.string().required(),
})

interface Report {
  title: string
  report: string
  projectNo: string
}

const CreateReportModal = ({show, handleClose, report}: Props) => {
  const [data, setData] = useState<ICreateAppData>(defaultCreateAppData)
  const [hasError, setHasError] = useState(false)

  const [reportFormValues, setReportFormValues] = useState<Report>({
    title: report?.title || '',
    report: report?.report || '',
    projectNo: report?.projectNo || '',
  })

  const updateData = () => {}

  const submit = () => {
    window.location.reload()
  }

  const formik = useFormik({
    initialValues: reportFormValues,
    validationSchema: ReportSchema,
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

  return createPortal(
    <Modal
      id='kt_modal_create_app'
      aria-hidden='true'
      dialogClassName='modal-dialog modal-dialog-centered mw-900px'
      show={show}
      onHide={handleClose}
      backdrop={true}
    >
      <div className='modal-header'>
        <h2>Create Report</h2>
        {/* begin::Close */}
        <div className='btn btn-sm btn-icon btn-active-color-primary' onClick={handleClose}>
          <KTSVG className='svg-icon-1' path='/media/icons/duotune/arrows/arr061.svg' />
        </div>
        {/* end::Close */}
      </div>

      <div className='modal-body py-lg-10 px-lg-10'>
        <div id='kt_modal_create_app_stepper'>
          {/*begin::Content */}
          <div className='flex-row-fluid py-lg-5 px-lg-15'>
            {/*begin::Form */}
            <form noValidate id='kt_modal_create_app_form'>
              <div className='fv-row mb-10'>
                <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                  <span className='required text-capitalize'>Report Title</span>
                  <i
                    className='fas fa-exclamation-circle ms-2 fs-7'
                    data-bs-toggle='tooltip'
                    title='Input Report Title'
                  ></i>
                </label>
                <input
                  type='text'
                  {...formik.getFieldProps('title')}
                  className='form-control form-control-lg form-control-solid'
                  name='title'
                  placeholder='Report Title'
                />
                {formik.touched.title && formik.errors.title && (
                  <div className='fv-plugins-message-container my-1'>
                    <div className='fv-help-block'>
                      <span className='alert'>{formik.errors.title}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className='fv-row mb-10'>
                <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                  <span className='required text-capitalize'>Report writeup</span>
                  <i
                    className='fas fa-exclamation-circle ms-2 fs-7'
                    data-bs-toggle='tooltip'
                    title='Input Report Title'
                  ></i>
                </label>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  name='title'
                  placeholder='Report Title'
                />
                {
                  <div className='fv-plugins-message-container'>
                    <div data-field='title' data-validator='notEmpty' className='fv-help-block'>
                      App name is required
                    </div>
                  </div>
                }
              </div>

              <div className='fv-row mb-10'>
                <Select
                  placeholder='Project Number'
                  {...formik.getFieldProps('projectNo')}
                  //type='text'
                  name='projectNo'
                  classNames={{
                    control: () => 'form-control form-control-lg form-control-solid',
                  }}
                  //options={options}
                />
                {formik.touched.projectNo && formik.errors.projectNo && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span className='alert'>{formik.errors.projectNo}</span>
                    </div>
                  </div>
                )}
              </div>
              {/*begin::Actions */}
              <div className='d-flex flex-stack pt-10'>
                <div>
                  <button
                    type='button'
                    className='btn btn-lg btn-primary'
                    data-kt-stepper-action='submit'
                    onClick={submit}
                  >
                    Submit{' '}
                    <KTSVG
                      path='/media/icons/duotune/arrows/arr064.svg'
                      className='svg-icon-3 ms-2 me-0'
                    />
                  </button>
                </div>
              </div>
              {/*end::Actions */}
            </form>
            {/*end::Form */}
          </div>
          {/*end::Content */}
        </div>
        {/* end::Stepper */}
      </div>
    </Modal>,
    modalsRoot
  )
}

export {CreateReportModal}
