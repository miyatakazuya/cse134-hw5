class ProjectCardComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        // Header <h2>
        this.projectHeader = document.createElement('h2');
        this.projectHeader.textContent = 'Project name';
        this.appendChild(this.projectHeader);

        // Picture <picture>
        this.projectPicture = document.createElement('picture');

        this.source = document.createElement('source');
        this.source.setAttribute('srcset','../images/toothless.jpg');
        this.source.setAttribute('media','(min-width: 800px)');
        this.source.setAttribute('type','image/jpg');

        this.image = document.createElement('img');
        this.image.setAttribute('src', '../images/toothless_small.png');
        this.image.setAttribute('width', '1000');
        this.image.setAttribute('alt', 'Toothless AUV');
        
        this.projectPicture.appendChild(this.source);
        this.projectPicture.appendChild(this.image);
        this.appendChild(this.projectPicture);
        
        // Description <p>
        this.description = document.createElement('p');
        this.description.textContent = 'Short Project Description';
        this.appendChild(this.description);

        // More Info <a>
        this.hyperlink = document.createElement('a');
        this.hyperlink.textContent = 'more info';
        this.appendChild(this.hyperlink);
    }
}

customElements.define('project-card', ProjectCardComponent);