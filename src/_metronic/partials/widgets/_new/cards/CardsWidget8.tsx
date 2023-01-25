/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
//import { UsersList } from '../../../../../app/modules/view/components/UsersList';
import { toAbsoluteUrl } from '../../../../helpers/AssetHelpers';

type Props = {
  className: string
  icon: boolean
  labelColor: string
  textColor: string
  items:Array<{name:string; initials:string; state:string}>
}


const CardsWidget8 = ({className,  icon, items,  labelColor, textColor}: Props) => {
    return(
  <div className={`card card-flush ${className}`}>
    <div className='card-header pt-3'>
      <div className='card-title d-flex flex-column'>
        <span className='fs-6 fw-bolder text-gray-800 d-block mb-0'>My Handlers</span>
      </div>
    </div>
    <div className='card-body d-flex flex-column justify-content-end pe-0'>
      
      <div className='symbol-group symbol-hover flex-nowrap'>
        {items &&
        items.map((user, i) => {
          return (
            <OverlayTrigger
              key={`${i}-${user.name}`}
              placement='top'
              overlay={<Tooltip id='tooltip-user-name'>{user.name}</Tooltip>}
            >
              <div className='symbol symbol-35px symbol-circle'>
                {user.initials && (
                  <span className='symbol-label bg-primary text-inverse-primary fw-bolder'>
                    {user.initials}
                  </span>
                )}
              </div>
            </OverlayTrigger>
          )
        })}
      </div>
    </div>
  </div>
)}
export {CardsWidget8}
