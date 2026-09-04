const buttons = document.querySelectorAll('.buttons');
const grid = document.querySelector('#cards');

let dashboardData = null;

// first page load
let initialLoad = true;

async function loadData() {
    try {
        const response = await fetch('./data.json');

        if (!response.ok) {
            throw new Error(`HTTP Error! status: ${response.status}`);
        }

        // json is a string needs to be an array of objects to be understood by the computer
        dashboardData = await response.json();

        // default display
        renderCards('weekly');
        initialLoad = false;

    } catch (error) {
        console.error("could not fetch JSON file:", error);
    }
}

loadData();

const subLabel = {
    daily: 'Yesterday',
    weekly: 'Last Week',
    monthly: 'Last Month'
}

const cardStyles = {
    'Work': {
        bg: 'bg-fem-orange-300',
        icon: './images/icon-work.svg'
    },
    'Play': {
        bg: 'bg-fem-blue-300',
        icon: './images/icon-play.svg'
    },
    'Study': {
        bg: 'bg-fem-pink-400',
        icon: './images/icon-study.svg'
    },
    'Exercise': {
        bg: 'bg-fem-green-400',
        icon: './images/icon-exercise.svg'
    },
    'Social': {
        bg: 'bg-fem-purple-700',
        icon: './images/icon-social.svg'
    },
    'Self Care': {
        bg: 'bg-fem-yellow-300',
        icon: './images/icon-self-care.svg'
    }
}

function renderCards(timeframe) {

    if (!dashboardData) return;

    grid.replaceChildren();

    dashboardData.forEach((item, i) => {

        const background = cardStyles[item.title] || {bg: 'bg-gray-400', icon: ''};

        const wrapper = document.createElement('div');
        if (initialLoad) {
            wrapper.className = `${background.bg} w-full lg:h-full rounded-xl overflow-hidden flex flex-col justify-end bg-no-repeat bg-[left_90%_top_-2%] bg-[30%_auto] min-h-[160px]`;
        } else {
            wrapper.className = `${background.bg} w-full lg:h-full rounded-xl overflow-hidden flex flex-col justify-end bg-no-repeat bg-[left_90%_top_-2%] bg-[30%_auto] min-h-[160px] opacity-0 translate-y-4 transition-opacity duration-500 ease-in-out`;
        }

        if (background.icon) {
            wrapper.style.backgroundImage = `url('${background.icon}')`;
        }

        const card  = document.createElement('div');
        card.className = 'w-full h-[80%] p-6 bg-fem-navy-900 flex flex-col gap-4 rounded-xl justify-center hover:bg-card-hover-color transition duration-200 ease';

        const title = document.createElement('h2');
        title.textContent = item.title;
        title.className = 'text-sm font-normal tracking-wide';

        const moreBtn = document.createElement('button');
        moreBtn.className = 'sm:w-[5%] md:w-[10%] hover:brightness-0 hover:invert';

        const btnIcon = Object.assign(document.createElement('img'), {src: './images/icon-ellipsis.svg', alt: 'more'});
        moreBtn.append(btnIcon);

        const cardLabel = document.createElement('div');
        cardLabel.className = 'flex justify-between items-center text-sm';
        cardLabel.append(title, moreBtn);

        const timeData = document.createElement('div');
        timeData.className = 'flex lg:flex-col lg:gap-4 md:flex-col md:gap-4 justify-between items-center md:items-start'

        const current = document.createElement('div');
        current.textContent = `${item.timeframes[timeframe].current}hrs`;
        current.className = 'text-2xl md:text-[2.8rem] font-thin sm:mt-0 md:mt-2';

        const previous = document.createElement('div');
        previous.textContent = `${subLabel[timeframe]} - ${item.timeframes[timeframe].previous}hrs`;
        previous.className = 'text-xs text-fem-navy-200';

        timeData.append(current, previous);
        card.append(cardLabel, timeData);
        wrapper.append(card);
        grid.append(wrapper);

        if (!initialLoad) {
            // tells the browswer to run the animation code
            requestAnimationFrame(() => {
                // runs code once after a delay
                setTimeout(() => {
                    wrapper.classList.remove('opacity-0', 'translate-y-4');
                }, i * 75);
            });
        }
    }); 
}

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const clickedTimeframe = e.target.getAttribute('category');
        renderCards(clickedTimeframe);

        // active state
        // ?. Optional Chaining. if this doesnt exist stop & dont crash
        document.querySelector('.active')?.classList.remove('active');
        button.classList.add('active');
    });
});