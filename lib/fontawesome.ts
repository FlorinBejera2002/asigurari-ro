import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

// Brand icons
import {
  faFacebookF,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
// Pro Solid icons
import {
  faArrowDown,
  faArrowUp,
  faBalanceScale,
  faBriefcase,
  faBriefcaseMedical,
  faBuilding,
  faBus,
  faCarCrash,
  faChartLine,
  faCity,
  faClipboardList,
  faCoins,
  faComment,
  faCookieBite,
  faExclamationCircle,
  faExclamationTriangle,
  faFileContract,
  faFileSignature,
  faFlag,
  faHeart,
  faHeartbeat,
  faHome,
  faHouseDamage,
  faIdCard,
  faInfoCircle,
  faLandmark,
  faList,
  faMapMarkedAlt,
  faMobileAlt,
  faNewspaper,
  faPhone,
  faPlane,
  faSearch,
  faShieldAlt,
  faTags,
  faTaxi,
  faTools,
  faTriangleExclamation,
  faTruck,
  faUserInjured
} from '@fortawesome/pro-solid-svg-icons'

// Prevent FontAwesome from adding its CSS since we did it manually above
config.autoAddCss = false

// Add all icons to the library
library.add(
  // Solid icons
  faCarCrash,
  faHome,
  faHouseDamage,
  faPlane,
  faShieldAlt,
  faCoins,
  faTools,
  faHeartbeat,
  faBriefcaseMedical,
  faHeart,
  faUserInjured,
  faTaxi,
  faBus,
  faTruck,
  faList,
  faPhone,
  faInfoCircle,
  faFileSignature,
  faComment,
  faNewspaper,
  faFileContract,
  faCookieBite,
  faBriefcase,
  faExclamationTriangle,
  faBalanceScale,
  faBuilding,
  faLandmark,
  faExclamationCircle,
  faSearch,
  faChartLine,
  faIdCard,
  faClipboardList,
  faMapMarkedAlt,
  faCity,
  faMobileAlt,
  faTags,
  faFlag,
  faArrowDown,
  faArrowUp,
  faTriangleExclamation,
  // Brand icons
  faFacebookF,
  faInstagram,
  faTwitter
)
