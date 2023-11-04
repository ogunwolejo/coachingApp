import {createRoot} from 'react-dom/client'
// Axios
import axios from 'axios'
import {Chart, registerables} from 'chart.js'
import {QueryClient, QueryClientProvider} from 'react-query'
// Apps
import {MetronicI18nProvider} from './_metronic/i18n/Metronici18n'
/**
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './_metronic/assets/css/style.rtl.css'
 **/
import './_metronic/assets/sass/style.scss'
import './_metronic/assets/sass/plugins.scss'
import './_metronic/assets/sass/style.react.scss'
import { AppRoutes } from './app/routing/AppRoutes'

// redux
import { reduxStore } from './store/redux'
import { Provider } from 'react-redux';

Chart.register(...registerables)

const queryClient = new QueryClient()
const container = document.getElementById('root')
if (container) {
  createRoot(container).render(
    <Provider store={reduxStore}>
      <QueryClientProvider client={queryClient}>
        <MetronicI18nProvider>
            <AppRoutes />
        </MetronicI18nProvider>
      </QueryClientProvider>
    </Provider>
  )
}
//"homepage": "/metronic8/react/demo1",
