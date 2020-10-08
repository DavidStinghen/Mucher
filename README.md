# Mucher :taco:

A api Mucher :taco: foi desenvolvida como solução para o Delivery Much Tech Challenge ([veja o desafio aqui!](https://github.com/delivery-much/challenge)). A aplicação conta com uma rota onde é possivel buscar por receitas a partir de ingredientes. A api foi construida em Node.js com a ajuda do framework Express.
Além da construção da funcionalidade já citada foram implementadas medidas de segurança utilizado as bibliotecas express-rate-limit para limitar o número de acessos de um determinado ip durante um período de tempo, como também, a biblioteca helmet para incluir diversos headers nas requisições feitas para a api.

## Instalação

Para a instalação da api será necessário que você tenha instalado em sua maquina o ([Docker](https://docs.docker.com/get-docker/)), o ([Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)), o ([Git](https://git-scm.com/downloads)) e por fim será necessário criar uma conta no ([Giphy](https://developers.giphy.com/)) para gerar uma chave de acesso a api de gifs ([crie a chave aqui!](https://developers.giphy.com/dashboard/)). Após a instalação das dependências siga os passos como demonstrado abaixo:

- Clone o diretório do projeto:
```
$ git clone https://github.com/DavidStinghen/Mucher.git
```

- Acesse o diretório clonado no passo anterior:
```
$ cd mucher
```

- Agora crie na raiz do projeto um arquivo '.env' igual ao arquivo '.env.example, ele vai ficar parecido com isso:
```
#APP
APP_PORT='ESCOLHA UMA PORTA'

#SERVICES
RECIPES_URL='http://www.recipepuppy.com/api'
GIPHY_URL='https://api.giphy.com/v1/gifs/search'
GIPHY_KEY='AQUI VAI A CHAVE GERADA PELO GIPHY'
```

- E para finalizar, esteja na raiz do projeto, inicialize o Docker e execute os comandos abaixo para construir e executar a api:
```
$ docker-compose build
$ docker-compose up
```

## Execução

Após iniciar a api será possível realizar requisições para a seguinte rota:
```
http://{HOST}/recipes/?i={ingredient_1},{ingredient_2}
```

A resposta a rota citada acima deve se parecer com o conteudo abaixo:
```
{
	"keywords": ["onion", "tomato"],
	"recipes": [{
		"title": "Greek Omelet with Feta",
		"ingredients": ["eggs", "feta cheese", "garlic", "red onions", "spinach", "tomato", "water"],
		"link": "http://www.kraftfoods.com/kf/recipes/greek-omelet-feta-104508.aspx",
		"gif": "https://media.giphy.com/media/xBRhcST67lI2c/giphy.gif"
	   },{
		"title": "Guacamole Dip Recipe",
		"ingredients": ["avocado", "onions", "tomato"],
		"link":"http://cookeatshare.com/recipes/guacamole-dip-2783",
		"gif":"https://media.giphy.com/media/I3eVhMpz8hns4/giphy.gif"
	   }
	]
}
```
