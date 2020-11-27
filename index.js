
const arrow = document.querySelector('.arrow');
const menuLeft = document.querySelector('.containerMenuLeft');
const mainContainer = document.querySelector('.mainContainer');

const scrollContainer = document.querySelector('.personalContainer')

arrow.addEventListener('click', ()=> {

	if ( arrow.classList.contains('arrowHidden')) {
		menuLeft.style.left = '0px'
		arrow.classList.remove('arrowHidden')
		scrollContainer.style.left = '150px';
	}
	else {
		menuLeft.style.position = 'absolute'
		menuLeft.style.left = '-280px'
		arrow.classList.add('arrowHidden')	
		scrollContainer.style.left = '0';
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

handleEventListener(circle01, 	0  , [circle02, circle03, circle04, circle05] , [circle01], [skills, jobs, blog, contact] , [beginning] ) // circle01
handleEventListener(circle02, -100 , [circle01, circle03, circle04, circle05] , [circle02], [beginning , jobs, blog, contact] , [skills] ) // circle02
handleEventListener(circle03, -200 , [circle01, circle02, circle04, circle05] , [circle03], [beginning , skills, blog, contact] , [jobs] ) // circle03
handleEventListener(circle04, -300 , [circle01, circle02, circle03, circle05] , [circle04], [beginning , skills, jobs, contact] , [blog] ) // circle04
handleEventListener(circle05, -400 , [circle01, circle02, circle03, circle04] , [circle05], [beginning , skills, jobs, blog] , [contact] ) // circle05

handleEventListener(beginning, 0  ,  [circle02, circle03, circle04, circle05] , [circle01], [skills, jobs, blog, contact] , [beginning] ) // circle01
handleEventListener(skills,  -100 ,  [circle01, circle03, circle04, circle05] , [circle02], [beginning , jobs, blog, contact] , [skills] ) // circle02
handleEventListener(jobs, 	 -200 ,  [circle01, circle02, circle04, circle05] , [circle03], [beginning , skills, blog, contact] , [jobs] ) // circle03
handleEventListener(blog, 	 -300 ,  [circle01, circle02, circle03, circle05] , [circle04], [beginning , skills, jobs, contact] , [blog] ) // circle05
handleEventListener(contact, -400 ,  [circle01, circle02, circle03, circle04] , [circle05], [beginning , skills, jobs, blog] , [contact] ) // circle06



/* SCROLL ACTIONS */
var loading = false

window.addEventListener('wheel', (event)=> {
	const delta = Math.sign(event.deltaY)
	if (delta > 0) {
		if(!loading) {
			loading = true;

			scrollContainer.style.top = conditionToScrollTopToBottom()	

			setTimeout(()=>{
        		loading = false;
          	},1000);		
		}
	} else if (delta < 0) {

		if(!loading) {
			loading = true;

			scrollContainer.style.top = conditionToScrollBottomToTop()	

			setTimeout(()=>{
        		loading = false;
          	},2000);		
		}
	}

})


function handleEventListener( element , scrollContainerValue , circlesToRemoveClass , circleToAddClass, itemsToRemoveClass, itemsToAddClass ) {
	element.addEventListener('click', ()=> {
		scrollContainer.style.top = `${scrollContainerValue}%`

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
			return '-100%'
			break;
		case -100:			
			scrollTopValue = -200;
			removeCircleClass([circle01, circle02, circle04, circle05], [beginning , skills, blog, contact])
			addCircleClass([circle03], [jobs])
			return '-200%'
			break;
		case -200:
			scrollTopValue = -300;
			removeCircleClass([circle01, circle02, circle03, circle05], [beginning ,skills, jobs, contact])
			addCircleClass([circle04], [blog])
			return '-300%'
			break;
		case -300:
			scrollTopValue = -400;
			removeCircleClass([circle01, circle02, circle03, circle04], [beginning ,skills, jobs, blog])
			addCircleClass([circle05], [contact])
			return '-400%'
			break;
		case -400:
			scrollTopValue = 0;
			removeCircleClass([circle02, circle03, circle04, circle05], [skills, jobs, blog, contact])
			addCircleClass([circle01], [beginning ])
			return '0%'
			break;
	}
}

function conditionToScrollBottomToTop() {
	switch (scrollTopValue) {
		
		case 0:			
			scrollTopValue = -400;
			removeCircleClass([circle01, circle02, circle03, circle04], [beginning ,skills, jobs, blog])
			addCircleClass([circle05], [contact])
			return '-400%'
			break;

		case -400:
			scrollTopValue = -300;
			removeCircleClass([circle01, circle02, circle03, circle05], [beginning ,skills, jobs, contact])
			addCircleClass([circle04], [blog])
			return '-300%'
			break;

		case -300:
			scrollTopValue = -200;
			removeCircleClass([circle01, circle02, circle04, circle05], [beginning , skills, blog, contact])
			addCircleClass([circle03], [jobs])
			return '-200%'
			break;

		case -200:
			scrollTopValue = -100;
			removeCircleClass([circle01, circle03, circle04, circle05], [beginning , jobs, blog, contact])
			addCircleClass([circle02], [skills])
			return '-100%'
			break;

		case -100:
			scrollTopValue = 0;
			removeCircleClass([circle02, circle03, circle04, circle05], [skills, jobs, blog, contact])
			addCircleClass([circle01], [beginning ])
			return '0'
			break;
	}	
}