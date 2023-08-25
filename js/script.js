async function readRepo() {
    let req = await fetch('https://api.github.com/users/andrefhz/repos')
    let projects = await req.json()
    const elementContent = document.getElementById('project-content')


        projects.forEach(project => {
            
            // Criando Elementos
            const elementProject = document.createElement('a')
            const elementDiv = document.createElement('div')
            const elementStrong = document.createElement('strong')
            const elementData = document.createElement('span')
            const elementDiv2 = document.createElement('div')
            const elementStrong2 = document.createElement('span')

            elementContent.appendChild(elementProject)
            elementProject.appendChild(elementDiv)

            // Adicionando Atributos
            elementProject.setAttribute('href', project.html_url)
            elementProject.setAttribute('target', '_blank')

            // Adicionando Classes
            elementProject.classList.add('project')
            elementData.classList.add('data')
            elementStrong2.classList.add('language')
            elementDiv.classList.add('header-content')

            // Adicionando elementos dentro da DIV
            elementDiv.appendChild(elementStrong)
            elementDiv.appendChild(elementData)
            elementDiv2.appendChild(elementStrong2)
            elementProject.appendChild(elementDiv2)

            // Adicionando Conteúdo
            elementStrong.innerText = project.name
            elementData.innerText = 'Criado em: ' + Intl.DateTimeFormat('pt-BR').format(new Date(project.created_at))
            elementStrong2.innerText = project.language
    
        });
    }

    


readRepo();

