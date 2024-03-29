## DevBeatz

### A Group Project created by [Tabitha Sin](https://github.com/tkxx), [Jack Lenihan](https://github.com/Jack-B-Lenihan) and [Nolan J Harris](https://github.com/NolanJHarris)

DevBeatz is a Marketplace that brings Producers together with Vocal Artists. Producers can upload 'beats' that they have created and set two prices: one price to purchase rights to use the beat, and another to purchase the exclusive rights to use the beat and removing the track from the list of available beats for future artists to purcase.

![Homepage](/src/images/devbeatzHomepage.jpg)

### Technologies Used

React w/ Hooks, Redux, Node.js, Express, PostgreSQL, Massive, AWS, BCryptJS, Sass, Stripe, Axios, Bootstrap, ChartJS, Cypress

![Dashboard](/src/images/devbeatzBrowse.jpg)

### Completed By Tabitha Sin

Tabitha took care of all of the styling for DevBeatz, including the statistics page using Charts.JS, the animations, Sass styling, choosing color schemes and each image used on the site. She designed the genre selection cards by hand in an external application and imported them into the project. She faced some struggles styling the Stripe payment form but overcame them by trying out different ways of styling the element. The site turned out beautifully thanks to Tabitha.

### Completed By Nolan J Harris

Nolan was responsible for most of the front end development using React and focusing on functional Components using Hooks. This was his first real exposure to using Hooks such as useState and useEffect for an entire project and was a great learning experience. He also set up Redux using react-redux and redux-promise-middleware. He and Jack worked together to get Amazon Web Services S3 set up to be able to upload audio files to the cloud and retrieve them upon request. Nolan describes this as his biggest struggle throughout the project. AWS is complicated but ultimately the group overcame the challenges and succeeded in thier goal to store all audio on S3.

### Completed By Jack Lenihan

Jack handled the majority of the backend and database using node.js and SQL. Given that the application displays alot of categorized and or filtered data, this build greatly increased Jack's ability to write targeted SQL queries. He also worked with Nolan on uploading and retrieving audio files from the s3 bucket. Jack was also responsible for faciliating the purchase of beats. This required the implementation of stripe which was something Jack had not worked with before. The Stripe modal was not used; instead, Stripe elements were directly integrated and formatted on the site which was a much more hands on process and was a great learning experience.x

![Dashboard](/src/images/devBeatzDashboard.jpg)
