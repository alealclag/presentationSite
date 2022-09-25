<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="./client/public/images/prestentationPic.jpg" alt="Project logo" style="border-radius: 50%"></a>
</p>

<h3 align="center">Presentation Site</h3>

---

<p align="center"> This project works as a little résumé where I introduce myself so people can get a brief idea about me 😉. It was also developed to play with the main technologies I use, which are the MERN stack, Git and Docker.
    <br> 
</p>

## 📝 Table of Contents

- [The front](#front)
- [The back](#back)
- [The Database](#database)
- [Management & Deployment](#management_deployment)

## ⚛ The front <a name = "front"></a>

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

Let's talk first about the front-end of the website. It was built using ReactJS and its hooks, which made the website and reusable, as well as controlled through declarative statements instead of imperative.

To ReactJS we added Bootstrap to style things up without having to depend on plain old CSS. You might not realize it at first glance, but this website is also responsive! So don't fear opening it on your desktop, tablet or phone 😜

## 🖥 The back <a name = "back"></a>

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

The website's back-end was cooked with NodeJS and the help of ExpressJS. Despite not having too many tasks to process, the ones that are implemented do the job they are asked 🤓. The main tasks are:

- Retrieving and processing the website's data from the DB
- Processing and posting the contact form's data to the DB
- Taking that contact form's processed data and send it to my mail, so that I get instantly notify if someone tries to contact me

## 💿 The Database <a name = "database"></a>

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

You might think that having a DB for this website is completely unnecessary 🤔. And it is. BUT I wanted to do a full MERN implementation, so I could not leave behind MongoDB, a simple but versatile DB that allows every small project to have a DB without having to think too much about it's scheme.

So obviously it's design is very simple: The data stored inside the table is my main info, work experience, education, tech known, languages, and people who have contacted me. Each of these groups have their own table with the same data that is shown.

You might notice that there's a file called "cards_noDB.js"; this is due to the fact that MongoDB cannot run on ARM architectures, and my personal server is a Raspberry Pi 4, so I needed to make another implementetion without DB.

## 🔧🚀 Management & Deployment <a name = "management_deployment"></a>

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

Finally, Git was used to control the project's changes and versions (this is obvious since you are reading this on GitHub 😅). Nothing too complex since it was a one-man project.

And, since I like to have things done correctly, I created a little Dockerfile and Docker compose to deploy my website on a container with Docker. This allows an easier and better managed deployment of the website. As said previously, this website is hosted on a Raspberry Pi, so the docker container might not run on other architectures
