import {useIntl} from 'react-intl'
import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'
import {MegaMenu} from './MegaMenu'

export function MenuInner() {
  const intl = useIntl()
  return (
    <>
      <MenuItem title={intl.formatMessage({id: 'MENU.DASHBOARD'})} to='/dashboard' />
      <MenuItem
        icon='/media/icons/duotune/general/gen051.svg'
        to='/apps/user-management/users'
        title='User management'
      />
      <MenuInnerWithSub title='Chat' to='/apps' menuPlacement='bottom-start' menuTrigger='click'>
        {/* PAGES */}
        <MenuInnerWithSub
          title='Chat'
          to='/apps/chat'
          icon='/media/icons/duotune/communication/com012.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={false} />
          <MenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={false} />
        </MenuInnerWithSub>
      </MenuInnerWithSub>
    </>
  )
}
