
// <project-card>
//     <picture>
//         <source></source>
//         <img></img>
//     </picture>
//     <div class="info">
//      <h2></h2>
//      <p></p>
//      <div class="skills"></div>
//      <a></a>
//     </div>
// </project-card>


class ProjectCardComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        // Picture <picture>
        this.projectPicture = document.createElement('picture');

        this.source = document.createElement('source');
        this.source.setAttribute('srcset','../images/toothless.jpg');
        this.source.setAttribute('media','(min-width: 700px)');
        this.source.setAttribute('type','image/jpg');

        this.image = document.createElement('img');
        this.image.setAttribute('src', '../images/toothless_small.png');
        this.image.setAttribute('width', '1000');
        this.image.setAttribute('alt', 'Toothless AUV');
        
        this.projectPicture.appendChild(this.source);
        this.projectPicture.appendChild(this.image);
        this.appendChild(this.projectPicture);

        // Info <div>
        this.info = document.createElement('div');
        this.info.setAttribute('class', 'info');
        this.appendChild(this.info);

        // Header <h2>
        this.projectHeader = document.createElement('h3');
        this.projectHeader.textContent = 'Project name';
        this.info.appendChild(this.projectHeader);
        
        // Description <p>
        this.description = document.createElement('p');
        this.description.textContent = 'Short Project Description';
        this.info.appendChild(this.description);

        // Used Skills <div>
        this.skills = document.createElement('div');
        this.skills.setAttribute('class', 'skills');
        this.info.appendChild(this.skills);

        // More Info <a>
        this.hyperlink = document.createElement('a');
        this.hyperlink.setAttribute('href', 'https://github.com/miyatakazuya');
        this.hyperlink.textContent = 'more info';
        this.info.appendChild(this.hyperlink);
    }
}

customElements.define('project-card', ProjectCardComponent);