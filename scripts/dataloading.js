window.addEventListener('DOMContentLoaded', async () => {
    document.getElementById("remote").addEventListener('click', async () => {
        console.log("DOM Content loaded");
        const url = "https://api.jsonbin.io/v3/b/67d62d578960c979a57262f8";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            document.getElementById("parent").innerHTML = "";

            const jsonData = await response.json();
            console.log(jsonData);
            jsonData.record.projects.forEach(project => {
                console.log(project);
            
                window.projectItem = document.createElement("project-card");

                window.projectItem.setAttribute("data-image-default", project.image_default);
                window.projectItem.setAttribute("data-image-alt", project.image_alt);  
                window.projectItem.setAttribute("data-header", project.title);
                window.projectItem.setAttribute("data-hyperlink", project.link);

                window.dsc = document.createElement("p");
                window.dsc.setAttribute("class", "description");
                window.dsc.textContent = project.description;   
                window.projectItem.appendChild(window.dsc);

                console.log(window.projectItem);
                document.getElementById("parent").appendChild(window.projectItem);
            });

        } catch (error) {
            console.error(error.message);
        }
    })

    // Data to be stored in localStorage
    const data = {
        "projects": [
          {
            "title": "Triton UAS - Local Version",
            "description": "Competion aircraft; OBC (Onboard Computer) programmed in C++ and handles autonomous state management.",
            "link": "https://github.com/tritonuas/obcpp",
            "image_default": "https://www.dropbox.com/scl/fi/1kfao5wzgrs35ze6lqx8u/toothless.jpg?rlkey=47xz9x625a6cpzvabngji5gr1&st=k6luylrp&dl=1",
            "image_alt": "https://www.dropbox.com/scl/fi/67z9q4ru3o3da4jazb8n0/toothless_small.png?rlkey=62e5kdcuk92cwghkqe01pgew2&st=ersefhk6&dl=1"
          },
          {
            "title": "Istari UAV",
            "description": "A lightweight, PLA printed aircraft optimized for low-cost iterations of client aircraft models.",
            "link": "https://github.com/tritonuas/gcs",
            "image_default": "https://www.dropbox.com/scl/fi/xgqa20zdurp9858uwe7iy/istari.jpg?rlkey=ini98i401blkr4pxg0ms2ca0i&st=vp005ktn&dl=1",
            "image_alt": "https://www.dropbox.com/scl/fi/xgqa20zdurp9858uwe7iy/istari.jpg?rlkey=ini98i401blkr4pxg0ms2ca0i&st=vp005ktn&dl=1"
          }
        ]
      };
      
    localStorage.setItem('projectsData', JSON.stringify(data));
    
    document.getElementById("local").addEventListener('click', async () => {
        document.getElementById("parent").innerHTML = "";
        
        const storedData = JSON.parse(localStorage.getItem('projectsData'));
        storedData.projects.forEach(project => {
            console.log(project);
        
            window.projectItem = document.createElement("project-card");

            window.projectItem.setAttribute("data-image-default", project.image_default);
            window.projectItem.setAttribute("data-image-alt", project.image_alt);  
            window.projectItem.setAttribute("data-header", project.title);
            window.projectItem.setAttribute("data-hyperlink", project.link);

            window.dsc = document.createElement("p");
            window.dsc.setAttribute("class", "description");
            window.dsc.textContent = project.description;
            window.projectItem.appendChild(window.dsc);

            console.log(window.projectItem);
            document.getElementById("parent").appendChild(window.projectItem);
        });
    });


});

