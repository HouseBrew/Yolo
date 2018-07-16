import Vue from "vue";
import Router from "vue-router";
import AvatarDoc from '../../_doc/examples/avatar-doc'
import CheckboxDoc from '../../_doc/examples/checkbox-doc'
import ButtonDoc from '../../_doc/examples/button-doc'
import IconDoc from '../../_doc/examples/icon-doc'
import InputDoc from '../../_doc/examples/input-doc'
import ItemDoc from '../../_doc/examples/item-doc'
import MenuDoc from '../../_doc/examples/menu-doc'
import SectionHeaderDoc from '../../_doc/examples/section-header-doc'
import SelectDoc from '../../_doc/examples/select-doc'
import DrawerDoc from '../../_doc/examples/drawer-doc'
import ExpansionPanelDoc from '../../_doc/examples/expansion-panel-doc'
import TooltipDoc from '../../_doc/examples/tooltip-doc'
import StickyDoc from '../../_doc/examples/sticky-doc'
import DataTableDoc from '../../_doc/examples/data-table-doc'
import MessageDoc from '../../_doc/examples/message-doc'
import MessageBoxDoc from '../../_doc/examples/message-box-doc'
import SwitchDoc from '../../_doc/examples/switch-doc'
import SidebarDoc from '../../_doc/examples/sidebar-doc'
import TabDoc from '../../_doc/examples/tabs-doc'
import ChipDoc from '../../_doc/examples/chip-doc'
import SpinnerDoc from '../../_doc/examples/spinner-doc'
import DialogDoc from '../../_doc/examples/dialog-doc'
import GridDoc from '../../_doc/examples/grid-doc'
import NoDataDoc from '../../_doc/examples/no-data-doc'
import TimepickerDoc from '../../_doc/examples/timepicker-doc'
import DatePickerDoc from '../../_doc/examples/date-picker-doc'
import LoadingDotsDoc from '../../_doc/examples/loading-dots-doc'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/avatar',
      name: 'avatar-doc',
      component: AvatarDoc
    },
    {
      path: '/button',
      name: 'button-doc',
      component: ButtonDoc
    },
    {
      path: '/checkbox',
      name: 'checkbox-doc',
      component: CheckboxDoc
    },
    {
      path: '/icon',
      name: 'icon-doc',
      component: IconDoc
    },
    {
      path: '/input',
      name: 'input-doc',
      component: InputDoc
    },
    {
      path: '/item',
      name: 'item-doc',
      component: ItemDoc
    },
    {
      path: '/menu',
      name: 'menu-doc',
      component: MenuDoc
    },
    {
      path: '/section-header',
      name: 'section-header-doc',
      component: SectionHeaderDoc
    },
    {
      path: '/select',
      name: 'select-doc',
      component: SelectDoc
    },
    {
      path: '/drawer',
      name: 'drawer-doc',
      component: DrawerDoc
    },
    {
      path: '/expansion-panel',
      name: 'expansion-panel-doc',
      component: ExpansionPanelDoc
    },
    {
      path: '/tooltip',
      name: 'tooltip',
      component: TooltipDoc
    },
    {
      path: '/sticky',
      name: 'sticky',
      component: StickyDoc
    },
    {
      path: '/data-table',
      name: 'data-table',
      component: DataTableDoc
    },
    {
      path: '/message',
      name: 'message',
      component: MessageDoc
    },
    {
      path: '/message-box',
      name: 'message-box',
      component: MessageBoxDoc
    },
    {
      path: '/switch',
      name: 'switch',
      component: SwitchDoc
    },
    {
      path: '/sidebar',
      name: 'sidebar',
      component: SidebarDoc
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: TabDoc
    },
    {
      path: '/chip',
      name: 'chip',
      component: ChipDoc
    },
    {
      path: '/spinner',
      name: 'spinner',
      component: SpinnerDoc
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: DialogDoc
    },
    {
      path: '/grid',
      name: 'grid',
      component: GridDoc
    },
    {
      path: '/no-data',
      name: 'no-data',
      component: NoDataDoc
    },
    {
      path: '/timepicker',
      name: 'timepicker',
      component: TimepickerDoc
    },
    {
      path: '/loading-dots',
      name: 'loading-dots',
      component: LoadingDotsDoc
    },
    {
      path: '/date-picker',
      name: 'date-picker',
      component: DatePickerDoc
    }
  ]
});

