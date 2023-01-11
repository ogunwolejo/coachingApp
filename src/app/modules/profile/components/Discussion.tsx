import React from 'react'
import {
  FeedsWidget2,
  FeedsWidget3,
  FeedsWidget4,
  ListsWidget5
} from '../../../../_metronic/partials/widgets'

export function Discussion() {
  return (
    <div className='row g-5 g-xxl-8'>
      <div className='col-xl-6'>
            <FeedsWidget2 className='mb-5 mb-xxl-8' />
         </div>
        <div className='col-xl-6'>
            <FeedsWidget3 className='mb-5 mb-xxl-8' />
         </div>

       <div className='col-xl-6'>
            <FeedsWidget4 className='mb-5 mb-xxl-8' />
         </div>

         <div className='col-xl-6'>
            <FeedsWidget3 className='mb-5 mb-xxl-8' />
         </div>

        <div className=''>
        <ListsWidget5 className='mb-5 mb-xxl-8' />
      </div>
    </div>
  )
}
