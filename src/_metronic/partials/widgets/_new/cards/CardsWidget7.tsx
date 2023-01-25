/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'


const CardsWidget7: FC<{ className: string; subject: string; value: number | string;  color?:string}> = ({
  className,
  subject,
  value,
  color='text-black'
}) => {

  return (
    <div className={`card card-flush ${className}`}>
      <div className='card-header pt-5'>
        <div className='card-title d-flex flex-column'>
          <div className='d-flex align-items-center'>
            <span className={`fs-2hx fw-bold me-2 lh-1 ls-n2 ${color}`}>{value}</span>
          </div>
          <span className='text-gray-700 pt-1 fw-semibold fs-6'>{subject}</span>
        </div>
      </div>
    </div>
  )
}


export {CardsWidget7}
