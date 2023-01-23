/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'

type Props = {
  reportTitle: string
}

const ReportCard: FC<Props> = ({reportTitle}) => {
  return (
    <div className='card'>
      <div className='card-body d-flex flex-center flex-column p-9'>
        <div className='fs-4 text-gray-800 text-hover-primary fw-bolder mb-0'>{reportTitle}</div>
      </div>
    </div>
  )
}

export {ReportCard}
