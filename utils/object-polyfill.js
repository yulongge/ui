import objectAssign from 'object-assign'
import promise from 'promise-polyfill'

!Object.assign && (Object.assign = objectAssign)
!window.Promise && (window.Promise = promise)
