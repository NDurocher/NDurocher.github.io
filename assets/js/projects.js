$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/LUDO.png',
            link: 'https://github.com/NDurocher/YARAL',
            title: 'YARAL: Yet Another Reinforcement Learning Approach to Ludo',
            demo: false,
            technologies: ['Q-Learning', 'Python'],
            description: "A Q-learning AI player for the board game LUDO.",
            categories: ['ML']
        },
        {
            image: 'assets/images/VIBE.png',
            link: 'https://github.com/NDurocher/VIBE',
            title: 'VIBE',
            demo: 'https://youtu.be/hCbHA0Wp3V4',
            technologies: ['Pytorch', 'PyBullet', 'CNN'],
            description: "A visual motor behaviour cloning policy, capable of reproducing complex movement tasks given feedback from a stationary visual input.",
            categories: ['ML', 'CV' ]
        },
        {
            image: 'assets/images/Sokobot.jpeg',
            link: 'https://github.com/NDurocher/Sokoban',
            title: 'Sokoban Robot and Solver',
            demo: 'https://youtu.be/Tbv2cbrF87Y',
            technologies: ['Informed Search', 'Python', 'PID'],
            description: "A Sokoban puzzle robot and solver, using behaviour based design and informed search techniques.",
            categories: ['featured', 'Ctrl']
        },
        {
            image: 'assets/images/Auto_MPC.png',
            link: 'https://github.com/NDurocher/MPC-Autonomous-Car',
            title: 'MPC Controller for an Autonomous Car',
            demo: 'https://youtu.be/Tbv2cbrF87Y',
            technologies: ['MPC', 'MATLAB'],
            description: "A time-horizon MPC controller for an autonomous car in MATLAB.",
            categories: ['featured', 'Ctrl']
        },
        {
            image: 'assets/images/Parrot Mini Drone.png',
            link: 'https://github.com/NDurocher/ParrotMinidroneCompetition',
            title: 'Parrot MiniDrone Competition Nordics Baltics 2021',
            demo: 'https://www.youtube.com/watch?v=elezoPG-3co&feature=youtu.be',
            technologies: ['FF Control', 'Computer Vision', 'MATLAB'],
            description: "A real-time image-based feedforward controller on a quadcopter.",
            categories: ['featured','CV', 'Ctrl']
        },
        {
            image: 'assets/images/Which_podcaster.png',
            link: 'https://github.com/NDurocher/Which-Podcaster',
            title: 'Which Podcaster?',
            demo: false,
            technologies: ['ResNet', 'LSTM', 'Pytorch'],
            description: "A neural network model to determine which host of a Danish Podcast is speaking.",
            categories: ['ML']
        },
        {
            image: 'assets/images/VO_example.png',
            link: 'https://github.com/NDurocher/CppRobotics',
            title: 'Cpprobotics',
            demo: false,
            technologies: ['C++', 'OpenCV', 'EKF', 'SLAM'],
            description: "A collection of common robotics algorithms implemented in C++.",
            categories: ['featured', 'CV']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}", style="color: blue">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}
