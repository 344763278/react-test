import Main from '../main'
import ToduList1 from '../toduList'
import ToduList2 from '../toduList-redux' 

export default [ 
  {
    path: '/home',
    component: Main
  },
  {
    path: '/home1/sub1',
    component: ToduList1,
    isExact: true
  },
  {
    path: '/home1/sub2',
    component: ToduList2
  }
] 