import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

$('.toggle').click(function () {
	$('.nav-list').slideToggle();
	$(this).hide();
	$(this).siblings().fadeToggle();
	$('main').toggleClass('shade');
});

const scrollTracker = document.querySelector('.scroll-tracker');

const trackingTimeline = new ScrollTimeline({
	ScrollOffset: [CSS.percent(0), CSS.percent(100)],
});

scrollTracker.animate(
	{
		transform: ['scaleX(0)', 'scaleX(1)'],
	},
	{
		timeline: trackingTimeline,
	}
);

let date = new Date();

$('.copy-right .year').text(date.getFullYear());
