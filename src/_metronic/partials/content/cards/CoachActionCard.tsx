/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {IconUserModel} from '../../../../app/modules/view/ProfileModels'
import {UsersList} from '../../../../app/modules/view/components/UsersList'
import {Menu, MenuItem, MenuButton} from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

type Props = {
  badgeColor: string
  status: string
  statusColor: string
  title: string
  description: string
  date: string
  progress: number
  users?: Array<IconUserModel>
}

const CoachActionCard: FC<Props> = ({
  badgeColor,
  status,
  statusColor,
  title,
  description,
  date,
  progress,
  users = undefined,
}) => {
  return (
    <div className='card border border-2 border-gray-300 border-hover'>
      <div className='card-header border-0 pt-9'>
        <div className='card-title m-0'>
          <div className='fs-3 fw-bolder text-dark'>{title}</div>
        </div>

        <div className='card-toolbar'>
          <Menu
            menuButton={<MenuButton className={`badge border border-none badge-light-${badgeColor} fw-bolder me-auto px-4 py-3`}>{status}</MenuButton>}
            transition
          >
            <MenuItem className="fw-semibold text-info">Pending</MenuItem>
            <MenuItem className="fw-semibold text-primary">In Progress</MenuItem>
            <MenuItem className="fw-semibold text-success">Completed</MenuItem>
          </Menu>
        </div>
      </div>

      <div className='card-body p-9'>
        <p className='text-gray-400 fw-bold fs-5 mt-1 mb-7'>{description}</p>

        <div className='d-flex flex-wrap mb-5'>
          <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3'>
            <div className='fs-6 text-gray-800 fw-bolder'>{date}</div>
            <div className='fw-bold text-gray-400'>Due Date</div>
          </div>
        </div>

        <div
          className='h-4px w-100 bg-light mb-5'
          data-bs-toggle='tooltip'
          title='This project completed'
        >
          <div
            className={`bg-${statusColor} rounded h-4px`}
            role='progressbar'
            style={{width: `${progress}%`}}
          ></div>
        </div>

        <UsersList users={users} />
      </div>
    </div>
  )
}

export {CoachActionCard}
