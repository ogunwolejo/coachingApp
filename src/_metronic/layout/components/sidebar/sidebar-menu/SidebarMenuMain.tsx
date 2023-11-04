/* eslint-disable react/jsx-no-target-blank */
import React, {useEffect} from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../../helpers'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'
import {useSelector} from 'react-redux'
import {BeatLoader} from 'react-spinners'

const SidebarMenuMain = () => {
  return (
    <>
      {/* <BeatLoader
       color={'#FFF'}
       loading={loading}
       size={10}
      /> */}
      {/***** the dashboard paths for client mode */}
      
        <>
          <SidebarMenuItem
            to='/dashboard'
            icon='/media/icons/duotune/general/gen001.svg'
            title='Dashboard'
            fontIcon='bi-layers'
          />
          <SidebarMenuItem
            to='/account/overview'
            icon='/media/icons/duotune/general/gen003.svg'
            title='Profile'
            fontIcon='bi-layers'
          />
          <SidebarMenuItem
            to='/view'
            icon='/media/icons/duotune/general/gen006.svg'
            title='Buddies'
            fontIcon='bi-layers'
          />
          <SidebarMenuItem
            to='/discover'
            icon='/media/icons/duotune/general/gen004.svg'
            title='Discover'
            fontIcon='bi-layers'
          />
        </>

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
