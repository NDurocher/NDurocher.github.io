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
            link: 'https://github.com/NDurocher/LUDO_QLearning',
            title: 'QPlayer',
            demo: false,
            technologies: ['Q-Learning', 'Python'],
            description: "A Q-learning AI player for the board game LUDO.",
            categories: ['featured', 'RL']
        },
        {
            image: 'assets/images/VIBE.png',
            link: 'https://github.com/NDurocher/VIBE',
            title: 'VIBE',
            demo: 'https://youtu.be/hCbHA0Wp3V4',
            technologies: ['Pytorch', 'PyBullet', 'CNN'],
            description: "A visual motor behaviour cloning policy, capable of reproducing complex movement tasks given feedback from a stationary visual input.",
            categories: ['featured', 'DNN', 'Robotics']
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
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
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