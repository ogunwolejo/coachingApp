import React, {FC} from 'react'
import { Card7 } from '../../../_metronic/partials/content/cards/Card7'

const MyProjects: FC = () => {
  return (
    <>
      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        <div className='col-xl-4'>
          <Card7
            avatar='/media/avatars/300-6.jpg'
            clientName='Emma Smith'
            projectNo='Proj004'
            coach='Peters Thomas '
            seniorCoach='gabriel olawole'
          />
        </div>
        <div className='col-xl-4'>
          <Card7
            avatar='/media/avatars/300-6.jpg'
            clientName='Emma Smith'
            projectNo='Proj001'
            coach='Joshua Ogunwole'
            seniorCoach='gabriel olawole'
          />
        </div>
        <div className='col-xl-4'>
          <Card7
            avatar='/media/avatars/300-6.jpg'
            clientName='Emma Smith'
            projectNo='Art Director'
            coach='Joshua Ogunwole'
            seniorCoach='gabriel olawole'
          />
        </div>
        <div className='col-xl-4'>
          <Card7
            avatar='/media/avatars/300-6.jpg'
            clientName='Emma Smith'
            projectNo='Art Director'
            coach='Joshua Ogunwole'
            seniorCoach='gabriel olawole'
          />
        </div>
        <div className='col-xl-4'>
          <Card7
            avatar='/media/avatars/300-6.jpg'
            clientName='Emma Smith'
            projectNo='Art Director'
            coach='Joshua Ogunwole'
            seniorCoach='gabriel olawole'
          />
        </div>
      </div>
      {/* end::Row */}
    </>
  )
}

export default MyProjects;
