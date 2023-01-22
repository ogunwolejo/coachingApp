import React, {FC} from 'react'
import {
  TablesWidget12
} from '../../../../_metronic/partials/widgets'

const Employees: FC = () => {
  return (
    <>
      <TablesWidget12 className='mb-5 mb-xl-9' count={10}/>
    </>
  )
}

export {Employees}
