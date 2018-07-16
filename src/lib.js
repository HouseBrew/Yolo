import ViApp from './components/vi-app'
import {ViAvatar, ViAvatarChip} from './components/vi-avatar'
import ViChip from './components/vi-chip'
import {ViCheckbox} from './components/vi-checkbox'
import ViIcon from './components/vi-icon'
import {ViInput, ViInputError, ViInputLabel} from './components/vi-input'
import {ViButton, ViButtonRow, ViCloseButton} from './components/vi-button'
import {ViItem, ViItemAction, ViItemAvatar, ViItemContent, ViItemTitle, ViItemSubTitle} from './components/vi-item'
import {ViSectionHeader, ViPageTitle} from './components/vi-section-header'
import ViMenu from './components/vi-menu'
import ViSelect from './components/vi-select'
import ViDrawer from './components/vi-drawer'
import {ViExpansionPanel} from './components/vi-expansion-panel'
import {ViExpandTransition} from './components/transitions'
import ViTooltip from './components/vi-tooltip'
import {ViSpacer, ViContainer, ViCol, ViRow, ViDivider} from './components/vi-grid'
import ViYearMonthDaySelect from './components/vi-year-month-day-select'
import {ViDataTable, ViTableCol} from './components/vi-data-table'
import ViMessage from './components/vi-message/vi-message.vue'
// import ViMessageBox from './components/vi-message-box'
// import ViDeletePrompt from './components/vi-delete-prompt'
import ViSwitch from './components/vi-switch'
import ViSidebar from './components/vi-sidebar'
import ViSpinner from './components/vi-spinner'
import ViNoData from './components/vi-no-data'
import {ViTabs, ViTab} from './components/vi-tabs'
import {ViCard, ViCardContent} from './components/vi-card'
import {ViDialog, ViDialogTitle} from './components/vi-dialog'
import ViTimepicker from './components/vi-timepicker'
import ViDatePicker from './components/vi-date-picker'
import Timepicker from './components/timepicker'
import Sticky from './directives/sticky'
import Scroll from './directives/scroll'
import LoadingDots from './directives/loading-dots'

import './stylus/app.styl'
import './components/vi-icon/collection'

const Yolo = {
  install (Vue) {
    Vue.component('vi-app', ViApp)
    Vue.component('vi-expand-transition', ViExpandTransition)
    Vue.component('vi-avatar', ViAvatar)
    Vue.component('vi-avatar-chip', ViAvatarChip)
    Vue.component('vi-chip', ViChip)
    Vue.component('vi-card', ViCard)
    Vue.component('vi-card-content', ViCardContent)
    Vue.component('vi-container', ViContainer)
    Vue.component('vi-checkbox', ViCheckbox)
    Vue.component('vi-data-table', ViDataTable)
    Vue.component('vi-date-picker', ViDatePicker)
    Vue.component('vi-table-col', ViTableCol)
    Vue.component('vi-icon', ViIcon)
    Vue.component('vi-input', ViInput)
    Vue.component('vi-input-error', ViInputError)
    Vue.component('vi-input-label', ViInputLabel)
    Vue.component('vi-button', ViButton)
    Vue.component('vi-button-row', ViButtonRow)
    Vue.component('vi-close-button', ViCloseButton)
    Vue.component('vi-section-header', ViSectionHeader)
    Vue.component('vi-menu', ViMenu)
    Vue.component('vi-message', ViMessage)
    Vue.component('vi-item', ViItem)
    Vue.component('vi-item-action', ViItemAction)
    Vue.component('vi-item-avatar', ViItemAvatar)
    Vue.component('vi-item-content', ViItemContent)
    Vue.component('vi-item-title', ViItemTitle)
    Vue.component('vi-item-subtitle', ViItemSubTitle)
    Vue.component('vi-select', ViSelect)
    Vue.component('vi-sidebar', ViSidebar)
    Vue.component('vi-drawer', ViDrawer)
    Vue.component('vi-expansion-panel', ViExpansionPanel)
    Vue.component('vi-tooltip', ViTooltip)
    Vue.component('vi-spacer', ViSpacer)
    Vue.component('vi-switch', ViSwitch)
    Vue.component('vi-spinner', ViSpinner)
    Vue.component('vi-year-month-day-select', ViYearMonthDaySelect)
    Vue.component('vi-page-title', ViPageTitle)
    Vue.component('vi-tabs', ViTabs)
    Vue.component('vi-tab', ViTab)
    Vue.component('vi-dialog', ViDialog)
    Vue.component('vi-dialog-title', ViDialogTitle)
    Vue.component('vi-col', ViCol)
    Vue.component('vi-row', ViRow)
    Vue.component('vi-divider', ViDivider)
    Vue.component('vi-no-data', ViNoData)
    Vue.component('vi-timepicker', ViTimepicker)
    Vue.directive('sticky', Sticky)
    Vue.directive('scroll', Scroll)
    Vue.directive('loading-dots', LoadingDots)
    // Vue.prototype.$message = ViMessage;
  }
}

export default Yolo