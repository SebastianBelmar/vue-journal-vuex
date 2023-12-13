import { createStore } from 'vuex'

// import jorunalModule from '../modules/daybook/store/journal/index.js'
import jorunal from '../modules/daybook/store/journal'

const store = createStore({
    modules: {
        // journal: jorunalModule
        jorunal,
    }

})

  export default store