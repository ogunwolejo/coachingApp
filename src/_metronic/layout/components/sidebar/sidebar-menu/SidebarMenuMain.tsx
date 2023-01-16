/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../../helpers'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  let user:string = "coach"; // client head_coach coach

  return (
    <>
    {/***** the dashboard paths for client mode */}
      {user === "client" && (
        <>
        <SidebarMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
    
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Views</span>
        </div>
      </div>
      <SidebarMenuItemWithSub
        to='/crafted/pages'
        title='Page'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      >
        <SidebarMenuItemWithSub to='/view' title='My View' hasBullet={false}>
          <SidebarMenuItem to='/view/discussion' title='History Of Discussions' hasBullet={true} />
          <SidebarMenuItem to='/view/action-points' title='Action Points' hasBullet={true} />
          <SidebarMenuItem
            to='/view/documents'
            title='Documents'
            hasBullet={true}
          />
          <SidebarMenuItem
            to='/view/connections'
            title='Connections'
            hasBullet={true}
          />
        </SidebarMenuItemWithSub>
      </SidebarMenuItemWithSub>

      <SidebarMenuItem to='/crafted/pages/wizards/vertical' title='Payment' fontIcon="bi-payment" icon='/media/icons/duotune/communication/com006.svg'/>

      <SidebarMenuItemWithSub
        to='/crafted/accounts'
        title='Accounts'
        icon='/media/icons/duotune/communication/com006.svg'
        fontIcon='bi-person'
      >
        <SidebarMenuItem to='/crafted/account/overview' title='Overview' hasBullet={true} />
        <SidebarMenuItem to='/crafted/account/settings' title='Settings' hasBullet={true} />
      </SidebarMenuItemWithSub>
      
        </>
      )}

      {/*** the dashboard paths for head coach  */}
      {(user === 'head_coach' || user === 'admin') && (
        <>
        <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-muted text-uppercase fs-8 ls-1'>HEAD COACH</span>
          </div>
        </div>
        <SidebarMenuItem
          to='/apps/user-management/users'
          icon='/media/icons/duotune/general/gen051.svg'
          title='User management'
          fontIcon='bi-layers'
        />
        <SidebarMenuItem
          to='/admin/lists'
          icon='/media/icons/duotune/general/gen025.svg'
          title='Projects'
          fontIcon='bi-layers'
        />
         <SidebarMenuItem
          to='/admin/tables'
          icon='/media/icons/duotune/general/gen010.svg'
          title='Employees'
          fontIcon='bi-layers'
        />
         <SidebarMenuItem
          to='/admin/charts'
          icon='/media/icons/duotune/graphs/gra005.svg'
          title='Statistics'
          fontIcon='bi-layers'
        />
        <SidebarMenuItem
          to='/admin/statistics'
          icon='/media/icons/duotune/graphs/gra007.svg'
          title='Revenue'
          fontIcon='bi-layers'
        />   
        </>
      )}


      {/*** the dashboard paths for coach both junior and senior  */}
      {
        (user === 'coach' || user === 'senior_coach') && (
          <>
            <div className='menu-item'>
              <div className='menu-content pt-8 pb-2'>
                <span className='menu-section text-muted text-uppercase fs-8 ls-1'>COACH</span>
              </div>
            </div>
             <SidebarMenuItem
              to='/apps/user-management/users'
              icon='/media/icons/duotune/general/gen051.svg'
              title='Project Supervising'
              fontIcon='bi-layers'
            />
             <SidebarMenuItem
              to='/apps/user-management/users'
              icon='/media/icons/duotune/general/gen051.svg'
              title='Report'
              fontIcon='bi-layers'
            />
             <SidebarMenuItem
              to='/apps/chat/drawer-chat'
              icon='/media/icons/duotune/general/gen051.svg'
              title='Discussions'
              fontIcon='bi-layers'
            />
            <SidebarMenuItemWithSub to='/view' title='Tasks' hasBullet={false}>
              <SidebarMenuItem to='/view/discussion' title='Tasks Creation' hasBullet={true} />
              <SidebarMenuItem to='/view/action-points' title='Assessing Tasks' hasBullet={true} />
            </SidebarMenuItemWithSub>
         </>
        )
      }


      {/** general paths for mode */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Chats</span>
        </div>
      </div>
      <SidebarMenuItemWithSub
        to='/apps/chat'
        title='Chat'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <SidebarMenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
      </SidebarMenuItemWithSub>
    </>
  )
}

export {SidebarMenuMain}


/***
 * <SidebarMenuItem
            to='/view/campaigns'
            title='Campaigns'
            hasBullet={true}
          />
 * <SidebarMenuItem
            to='/crafted/pages/wizards/horizontal'
            title='Horizontal'
            hasBullet={true}
          />
 *   <SidebarMenuItem
        to='/builder'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Layout Builder'
        fontIcon='bi-layers'
  />
 * {<SidebarMenuItemWithSub
        to='/error'
        title='Errors'
        fontIcon='bi-sticky'
        icon='/media/icons/duotune/general/gen040.svg'
      >
        <SidebarMenuItem to='/error/404' title='Error 404' hasBullet={true} />
        <SidebarMenuItem to='/error/500' title='Error 500' hasBullet={true} />
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to='/admin'
        title='Widgets'
        icon='/media/icons/duotune/general/gen025.svg'
        fontIcon='bi-layers'
      >
        <SidebarMenuItem to='/admin/lists' title='Lists' hasBullet={true} />
        <SidebarMenuItem to='/admin/statistics' title='Statistics' hasBullet={true} />
        <SidebarMenuItem to='/admin/charts' title='Charts' hasBullet={true} />
        <SidebarMenuItem to='/admin/mixed' title='Mixed' hasBullet={true} />
        <SidebarMenuItem to='/admin/tables' title='Tables' hasBullet={true} />
        <SidebarMenuItem to='/admin/feeds' title='Feeds' hasBullet={true} />
      </SidebarMenuItemWithSub>}
 * 
 */