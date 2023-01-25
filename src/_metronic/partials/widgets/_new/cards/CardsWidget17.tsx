/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'


const CardsWidget17: FC<{ className: string; color?: string}> = ({
  className,
  color='text-dark'
}) => {

  return (
    <div className={`card card-flush ${className}`}>
      <div className='card-header pt-5'>
        <div className='card-title d-flex flex-column'>
          <div className='d-flex align-items-center'>
            <span className={`fs-4 fw-semibold ${color} me-1 align-self-start`}>&#8358;</span>
            <span className={`fs-2hx fw-bold me-2 lh-1 ls-n2 ${color}`}>9,700</span>
          </div>
          <span className='text-gray-700 pt-4 fw-semibold fs-6'>My Salary</span>
        </div>
      </div>
    </div>
  )
}


export {CardsWidget17}
