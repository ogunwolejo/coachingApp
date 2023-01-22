import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {ClientDashboardWrapper} from '../pages/dashboard/ClientDashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'

const PrivateRoutes = () => {
  const ViewPage = lazy(() => import('../modules/view/ViewPage'))
  const PaymentPage = lazy(() => import('../modules/payment/PaymentPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))
  const CoachingProjects = lazy(() => import('../modules/coaching/Projects'))
  const ProjectPage = lazy(() => import('../modules/coaching/CoachPage'))

  let role: number = 0 // 0 - client 1 - coach
  const isClient: boolean = role === 0 ? true : false

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        {isClient && <Route path='/dashboard' element={<ClientDashboardWrapper />} />}

        <Route path='/dashboard' element={<DashboardWrapper />} />
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules */}
        <Route path='coaching'>
          <Route
            path='projects'
            element={
              <SuspensedView>
                <CoachingProjects />
              </SuspensedView>
            }
          />
          <Route
            path='project/*'
            element={
              <SuspensedView>
                <ProjectPage />
              </SuspensedView>
            }
          />
        </Route>

        <Route
          path='payment/*'
          element={
            <SuspensedView>
              <PaymentPage />
            </SuspensedView>
          }
        />

        <Route
          path='view/*'
          element={
            <SuspensedView>
              <ViewPage />
            </SuspensedView>
          }
        />

        <Route
          path='admin/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='project-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--kt-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
