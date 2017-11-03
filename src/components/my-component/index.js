

import Header from './header'
import Content from './content'

const MyUI ={
	install:(Vue)=>{
		Vue.component('my-header',Header);
		Vue.component('my-content',Content)
	}
}

export default MyUI
