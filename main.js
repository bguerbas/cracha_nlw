// para declarar variaveis usar let (quando pode mudar) e const (qdo não quer mudar o valor da variável)
//Nomear variaveis: camelCase, PascalCase e snake_case

const LinksSocialMedia = {
  github: 'jakeliny',
  youtube: 'jakelinygracielly',
  facebook: 'maykbrito',
  instagram: 'jakeliny.gracielly',
  twitter: 'jakelinytec'
}

function changeSocialMediaLinks() {
  // com o id é possível usar diretamente propriedades como textContent
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => {
      response.json()
    })
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.userBio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
