import {lazy, FC, Suspense, useEffect} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {ClientDashboardWrapper} from '../pages/dashboard/ClientDashboardWrapper'
import {HeadCoachDashboardWrapper} from '../pages/dashboard/HeadCoachDashboardWrapper'
//import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
//import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'
import { useSelector, useDispatch } from 'react-redux'
import { getUserProfile } from '../../store/redux/profile/profile.thunk'
import { ROLES } from '../../interface/enum'


const PrivateRoutes = () => {
  const ViewPage = lazy(() => import('../modules/view/ViewPage'))
  const PaymentPage = lazy(() => import('../modules/payment/PaymentPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))
  const CoachingProjects = lazy(() => import('../modules/coaching/Projects'))
  const ProjectPage = lazy(() => import('../modules/coaching/CoachPage'))
  const ReportPage = lazy(() => import('../modules/coaching/ReportPage'))

  let role: number = 0; // 0 - client 1 - coach
  const isClient: boolean = role === 0 ? true : false
  const dispatch = useDispatch();
  
  const { loading, error, profile } = useSelector((store: any) => ({
    loading: store?.profile.loading,
    error: store?.profile.error,
    profile:store?.profile.profile
  }));
    const {currentUser} = useSelector((store: any) => ({
    currentUser: store.authReducer.currentUser,
  }))

  let _currentUser = JSON.parse(currentUser);

  console.log('prfoile reducer', loading, error, profile);

  useEffect(() => {
    //@ts-ignore
    dispatch(getUserProfile(_currentUser.uid))
  }, [])

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        
        {profile?.role === ROLES.CLIENT && (
        <>
          <Route path='dashboard' element={<ClientDashboardWrapper />}/>
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
          <Route path='*' element={<Navigate to='/error/404' />} />
        </>
        )}

        {profile?.role === ROLES.HEADCOACH && (
        <>
          <Route path='dashboard' element={<HeadCoachDashboardWrapper />}/>
          <Route
            path='project-management/*'
            element={
              <SuspensedView>
                <UsersPage />
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
          <Route path='*' element={<Navigate to='/error/404' />} />
        </>
        )}



        {(profile?.role === ROLES.COACH || profile?.role === ROLES.SENIORCOACH) && (
          <>
            <Route path='dashboard' element={<DashboardWrapper />}/>
            
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
              path='report'
              element={
                <SuspensedView>
                  <ReportPage />
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
            <Route path='*' element={<Navigate to='/error/404' />} />
        </>
        )}
        

        <Route path='dashboard' element={<DashboardWrapper />} />
        {/* Lazy Modules */}
        

        

        

      
        
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


/***
 * 
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
 */