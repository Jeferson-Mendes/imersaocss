
const arrow = document.querySelector('.arrow');
const menuLeft = document.querySelector('.containerMenuLeft');
const mainContainer = document.querySelector('.mainContainer');

const scrollContainer = document.querySelector('.personalContainer')

arrow.addEventListener('click', ()=> {

	if ( arrow.classList.contains('arrowHidden')) {
		menuLeft.style.left = '0px'
		arrow.classList.remove('arrowHidden')
		scrollContainer.style.paddingLeft = '180px';
	}
	else {
		menuLeft.style.position = 'absolute'
		menuLeft.style.left = '-280px'
		arrow.classList.add('arrowHidden')	
		scrollContainer.style.paddingLeft = '0';
	}
	
})

// Field at the Right

const circle01 = document.getElementsByClassName('circle')[0]
const circle02 = document.getElementsByClassName('circle')[1]
const circle03 = document.getElementsByClassName('circle')[2]
const circle04 = document.getElementsByClassName('circle')[3]
const circle05 = document.getElementsByClassName('circle')[4]

/* HANDLE LIST MENU*/

const beginning = document.querySelector('.beginning');
const skills = document.querySelector('.skills');
const jobs = document.querySelector('.jobs');
const about = document.querySelector('.about');
const blog = document.querySelector('.blog');
const contact = document.querySelector('.contacts');

/* ----- */

let scrollTopValue = 0

handleEventListener(circle01, 	'presentation'  , [circle02, circle03, circle04, circle05] , [circle01], [skills, jobs, blog, contact] , [beginning] ) // circle01
handleEventListener(circle02, 'skills' , [circle01, circle03, circle04, circle05] , [circle02], [beginning , jobs, blog, contact] , [skills] ) // circle02
handleEventListener(circle03, 'projects' , [circle01, circle02, circle04, circle05] , [circle03], [beginning , skills, blog, contact] , [jobs] ) // circle03
handleEventListener(circle04, 'blog' , [circle01, circle02, circle03, circle05] , [circle04], [beginning , skills, jobs, contact] , [blog] ) // circle04
handleEventListener(circle05, 'contacts' , [circle01, circle02, circle03, circle04] , [circle05], [beginning , skills, jobs, blog] , [contact] ) // circle05

handleEventListener(beginning, 'presentation'  ,  [circle02, circle03, circle04, circle05] , [circle01], [skills, jobs, blog, contact] , [beginning] ) // circle01
handleEventListener(skills,  'skills' ,  [circle01, circle03, circle04, circle05] , [circle02], [beginning , jobs, blog, contact] , [skills] ) // circle02
handleEventListener(jobs, 	 'projects' ,  [circle01, circle02, circle04, circle05] , [circle03], [beginning , skills, blog, contact] , [jobs] ) // circle03
handleEventListener(blog, 	 'blog' ,  [circle01, circle02, circle03, circle05] , [circle04], [beginning , skills, jobs, contact] , [blog] ) // circle05
handleEventListener(contact, 'contacts' ,  [circle01, circle02, circle03, circle04] , [circle05], [beginning , skills, jobs, blog] , [contact] ) // circle06



/* SCROLL ACTIONS */
var loading = false

window.addEventListener('wheel', (event)=> {
	const delta = Math.sign(event.deltaY)
	if (delta > 0) {
		if(!loading) {
			loading = true;

			// scrollContainer.style.top = conditionToScrollTopToBottom()	
			window.location.href = `#${conditionToScrollTopToBottom()}`
			setTimeout(()=>{
        		loading = false;
          	},1000);		
		}
	} else if (delta < 0) {

		if(!loading) {
			loading = true;

			// scrollContainer.style.top = conditionToScrollBottomToTop()	
			window.location.href = `#${conditionToScrollTopToBottom()}`
			setTimeout(()=>{
        		loading = false;
          	},1000);		
		}
	}

})


function handleEventListener( element , sessionId , circlesToRemoveClass , circleToAddClass, itemsToRemoveClass, itemsToAddClass ) {
	element.addEventListener('click', ()=> {
		// scrollContainer.style.top = `${scrollContainerValue}%`
		window.location.href = `#${sessionId}`
		removeCircleClass(circlesToRemoveClass, itemsToRemoveClass)
		addCircleClass(circleToAddClass, itemsToAddClass)

		scrollTopValue = scrollContainerValue;
	})
}

function removeCircleClass(circles, menuItems) {
	for (i in circles) {
		circles[i].classList.remove('activeCircle')
		menuItems[i].classList.remove('selected')
	}
}

function addCircleClass(circles, menuItems) {
	for (i in circles) {
		circles[i].classList.add('activeCircle')
		menuItems[i].classList.add('selected')
	}
}

function conditionToScrollTopToBottom() {
	switch (scrollTopValue) {
		case 0 :			
			scrollTopValue = -100;
			removeCircleClass([circle01, circle03, circle04, circle05], [beginning , jobs, blog, contact])
			addCircleClass([circle02], [skills])
			return 'skills'
			break;
		case -100:			
			scrollTopValue = -200;
			removeCircleClass([circle01, circle02, circle04, circle05], [beginning , skills, blog, contact])
			addCircleClass([circle03], [jobs])
			return 'projects'
			break;
		case -200:
			scrollTopValue = -300;
			removeCircleClass([circle01, circle02, circle03, circle05], [beginning ,skills, jobs, contact])
			addCircleClass([circle04], [blog])
			return 'blog'
			break;
		case -300:
			scrollTopValue = -400;
			removeCircleClass([circle01, circle02, circle03, circle04], [beginning ,skills, jobs, blog])
			addCircleClass([circle05], [contact])
			return 'contacts'
			break;
		case -400:
			scrollTopValue = 0;
			removeCircleClass([circle02, circle03, circle04, circle05], [skills, jobs, blog, contact])
			addCircleClass([circle01], [beginning ])
			return 'presentation'
			break;
	}
}

function conditionToScrollBottomToTop() {
	switch (scrollTopValue) {
		
		case 0:			
			scrollTopValue = 400;
			removeCircleClass([circle01, circle02, circle03, circle04], [beginning ,skills, jobs, blog])
			addCircleClass([circle05], [contact])
			return 'contacts'
			break;

		case 400:
			scrollTopValue = 300;
			removeCircleClass([circle01, circle02, circle03, circle05], [beginning ,skills, jobs, contact])
			addCircleClass([circle04], [blog])
			return 'blog'
			break;

		case 300:
			scrollTopValue = 200;
			removeCircleClass([circle01, circle02, circle04, circle05], [beginning , skills, blog, contact])
			addCircleClass([circle03], [jobs])
			return 'projects'
			break;

		case 200:
			scrollTopValue = 100;
			removeCircleClass([circle01, circle03, circle04, circle05], [beginning , jobs, blog, contact])
			addCircleClass([circle02], [skills])
			return 'skills'
			break;

		case 100:
			scrollTopValue = 0;
			removeCircleClass([circle02, circle03, circle04, circle05], [skills, jobs, blog, contact])
			addCircleClass([circle01], [beginning ])
			return 'presentation'
			break;
	}	
}