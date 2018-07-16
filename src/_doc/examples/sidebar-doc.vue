<template>
  <div class="sidebar-doc">
    <h1>Sidebar</h1>
    <vi-sidebar :menu="menu"/>
  </div>
</template>

<script>
  export default {
    name: 'sidebar-doc',
    data () {
      return {
        menu: [
          {
            name: 'Relationship Panel',
            routeRoot: 'sidebar',
            icons: {
              default: 'org-relationship-outline',
              active: 'org-relationship'
            },
            children: [
              {
                name: 'Members',
                route: '/sidebar'
              },
              {
                name: 'Organization',
                route: '/sidebar'
              },
              {
                name: 'Team',
                route: '/'
              },
              {
                name: 'Content Group',
                route: '/'
              },
              {
                name: 'Content',
                route: '/'
              }
            ]
          },
          {
            name: 'Notification',
            routeRoot: 'notification',
            icons: {
              default: 'bell-outline',
              active: 'bell'
            },
            children: [
              {
                name: 'Create',
                route: '/'
              },
              {
                name: 'Draft',
                route: '/'
              },
              {
                name: 'Schedule',
                route: '/'
              },
              {
                name: 'Sent',
                route: '/'
              }
            ]
          },
          {
            name: 'GrowthOp',
            routeRoot: 'growthop',
            icons: {
              default: 'growthop-outline',
              active: 'growthop'
            },
            children: [
              {
                name: 'Team List',
                route: '/'
              },
              {
                name: 'Content Editor',
                route: '/'
              },
              {
                name: 'Development/ Competency',
                route: '/'
              },
              {
                name: 'Journey Mapping',
                route: '/'
              }
            ]
          }
        ]
      }
    }
  }
</script>
