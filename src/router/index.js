import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import DescriptiveIndex from '../views/DescriptiveIndexView.vue'
import ProbabilityIndex from '../views/ProbabilityIndexView.vue'

import GroupData from '../views/GroupDataView.vue'
import UngroupData from '../views/UngroupDataView.vue'

import SetVariable from '../components/SetVariableModal.vue'
import UploadData from '../components/UploadDataModal.vue'

import BinomialDistribution from '../components/BinomialDistribution.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/descriptive',
      children: [
        {
          name: 'Descriptive',
          path: '',
          component: DescriptiveIndex
        },
        {
          path: 'groupData',
          children: [
            {
              path: '',
              name: 'GroupData',
              component: UploadData
            },
            {
              path: 'setVariable',
              name: 'SetVariable',
              component: SetVariable
            }
          ],
          component: GroupData
        },
        {
          path: 'ungroupData',
          name: 'UngroupData',
          component: UngroupData
        }
      ],
      component: () => import('../views/DescriptiveView.vue')
    },
    {
      path: '/results',
      name: 'Results',
      component: () => import('../views/ResultsView.vue')
    },
    {
      path: '/probability',
      children: [
        {
          path: '',
          name: 'Probability',
          component: ProbabilityIndex
        },
        {
          path: 'binomialDistribution',
          name: 'BinomialDistribution',
          component: BinomialDistribution
        }
      ],
      component: () => import('../views/ProbabilityView.vue')
    }
  ]
})

export default router
