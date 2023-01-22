/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {toAbsoluteUrl, KTSVG} from '../../../helpers'

type Props = {
  color?: string
  avatar?: string
  clientName: string
  projectNo: string
  coach: string
  seniorCoach: string
}

const Card6: FC<Props> = ({
  color = '',
  avatar = '',
  clientName,
  projectNo,
  coach,
  seniorCoach,
}) => {
  return (
    <div className='card'>
      <div className='card-body d-flex flex-center flex-column p-9'>
        <div className='mb-5'>
          <div className='symbol symbol-75px symbol-circle'>
            {color ? (
              <span className={`symbol-label bg-light-${color} text-${color} fs-5 fw-bolder`}>
                {clientName.charAt(0)}
              </span>
            ) : (
              <img alt='Pic' src={toAbsoluteUrl(avatar)} />
            )}
          </div>
        </div>

        <a href='#' className='fs-4 text-gray-800 text-hover-primary fw-bolder mb-0'>
          {clientName}
        </a>

        <div className='fw-bold text-gray-400 mb-6 text-uppercase'>{projectNo}</div>

        <div className='d-flex flex-center flex-wrap mb-5'>
          <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3'>
            <div className='fs-6 fw-bolder text-gray-700 text-capitalize'>{coach}</div>
            <div className='fw-bold text-gray-400'>Coach</div>
          </div>

          <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 mx-3 px-4 mb-3'>
            <div className='fs-6 fw-bolder text-gray-700 text-capitalize'>{seniorCoach}</div>
            <div className='fw-bold text-gray-400'>Senior Coach</div>
          </div>
        </div>

        <button className='btn btn-sm btn-light' id='kt_activities_toggle'>
          <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
          View
        </button>
      </div>
    </div>
  )
}

export {Card6}
