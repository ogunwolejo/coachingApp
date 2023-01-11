/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'

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
        {items.map((item, index) => (
          <div
            className='symbol symbol-35px symbol-circle'
            data-bs-container="body"
            data-bs-toggle='popover'
            data-bs-placement="bottom"
            data-bs-content={item.name}
            key={`cw7-item-${index}`}
          >
            {item.state && item.initials && (
              <span
                className={clsx(
                  'symbol-label fw-bold',
                  'bg-' + item.state,
                  'text-inverse-' + item.state
                )}
              >
                {item.initials}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
)}
export {CardsWidget8}
