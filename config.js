var config = {
    style: "mapbox://styles/ajjerusalem/clty7j93i01ft01nrbnxl0frh",
    // style: 'mapbox://styles/ajjerusalem/cl5p75i0y001b14ru8e4goiff',
    accessToken:
        "pk.eyJ1IjoiYWpqZXJ1c2FsZW0iLCJhIjoiY2l4b2t3N2lyMDAxMzJxcHMwZ3IzOWN1OSJ9.cxZW0ZgGPFDZpc_-JtRBxg",
    showMarkers: false,
    markerColor: "#3FB1CE",
    projection: "globe",
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: "dark",
    use3dTerrain: false, //set true for enabling 3D maps.
    ajlogo: "aj-logo.png",
    title: "Pakistan Polio",
    subtitle: "Summary goes here.",
    byline: "",
    footer: `

    Produced by <a href="https://twitter.com/ajlabs" target="_blank">@AJLabs/Alia Chughtai
    <br>Written by <a href="https://x.com/farasg?lang=en" target="_blank">Faras Ghani<br>
    <br>Illustrations by Muhammet Okur<br>
    <br>Published: July 30, 2024
    <p><a href="https://www.aljazeera.com/aboutus/2011/01/20111168582648190.html" target="_blank">Terms and
    Conditions</a> | <a href="https://network.aljazeera.net/privacy/en" target="_blank">Privacy
    Policy</a> | <a href="https://network.aljazeera.net/cookies/en" target="_blank">Cookie
    Policy</a> | <a href="#cookiesPreferences" onClick="window.OneTrust.ToggleInfoDisplay();">Cookie
    Preferences</a></p>
`,
    chapters: [
        {
            id: "identifier-0x",
            alignment: "center",
            hidden: false,
            title: "",
            description: `



          <span class="text-left">

Ayesha Raza is a 35-year-old polio survivor working on the polio eradication campaign in Lahore.
<br><br>
With age, she says, her condition is deteriorating. Her arms and legs feel numb at random and she cannot recall how many times she’s fallen down on the road. She’s a mother of a six-month-old girl and her husband is currently unemployed.
<br><br>
Despite the health issues and her daughter’s needs, Ayesha defiantly works in the field, going door to door and administering vaccines to children across up to 80 houses in her area every month.
<br><br>
She’s been shouted at, had gates slammed shut in her face and been ridiculed. Work is tiring and her employers have refused to provide any assistance given her condition. But Ayesha knows that in addition to providing for her family financially, she has a moral responsibility.
<br><br>
“Initially, I used to curse myself for taking up this job,” she told Al Jazeera. “People would just slam the door shut in my face without even talking to me. I used to get angry then. But later I realised that for me, it’s more than a job. I tell parents they will never realise how I’m feeling everyday [because of polio]. And the two drops I give to their kids will help them in the end.
<br><br>
“I have polio. I feel weak. I have to walk for kilometres on end every day during the campaign. That’s my job. But I need to make sure these kids do not go through what I have gone through.”
<br><br>
Just over 350km (218 miles) away in Multan, Razia Bibi is fighting a different type of deterrence.
<br><br>
She’s been working on the campaign since 1996. But when she recently learnt how to ride a motorcycle, locals went to her brother to complain.
<br><br>
“It’d take a long time to reach the areas which I was covering, almost hour and a half. So I bought a motorcycle and asked my son to teach me how to ride it,” Razia said.
<br><br>
“It’s not only for the polio campaign but also allows me to take pregnant women for checkups. It was then that people would just stare at me. Some even went to my brother to complain.”
<br><br>
But that did not deter her because, she says, she has become thick-skinned in the face of challenges and obstacles since she started administering polio vaccines in 1996.
<br><br>
Ayesha and Razia are just three of more than 350,000 officials who have been part of the polio eradication campaign. In addition to these three, a number of others have been harassed, ridiculed, taunted and threatened.
<br><br>
Amir, a 33-year-old polio survivor based in the southern city of Karachi, is one of them. 
<br><br>
Unable to finish his higher education due to the financial situation at home, Amir first took up a job as a computer operator before signing up with the polio eradication campaign.
<br><br>
He was shoved and slapped during one campaign. In another, a father who refused vaccination to his children threatened to kill Amir if he saw him in the area again.
<br><br>
“It’s testing conditions, especially in the heat,” Amir told Al Jazeera. “But this is something I need to do. If I had taken those two drops as a kid, I wouldn’t have been like this. Now, it’s very important that we save someone else’s kid. And that’s what I tell people I visit to try and convince them.”
<br><br>
The issues do not stop at threats. At least 102 polio field workers and security officials accompanying the teams have been killed during the campaigns.
<br><br>
Some spend long hours on the streets because of the financial situation at home. For others, it’s a mission to help eradicate polio in Pakistan.
<br><br>
Here are some of their stories:

          </span>
           `,
            //   <img class="isit" src="./gfx/pakistanbm_min.jpg" width="100%" height="auto" alt="mobile"/>

            location: {
                center: [69.796262, 29.215181],
                zoom: 6,
                pitch: 0,
                bearing: 0,
                speed: 0.5,
                curve: 1,
            },
            callback: "",
            onChapterEnter: [{}],
            onChapterExit: [],
        },

        {
            id: "identifier-3x",
            alignment: "right",
            hidden: false,
            title: "",
            description: `
            <span class="text-left">
            <img src="./gfx/Sidra.png" width="100%" height="auto" alt="photo caption"/>

      <audio alt="Sidra audio" controls>
                <source src="./audio/SidraPeshawarMap.ogg" type="audio/ogg">
                <source src="./audio/SidraPeshawarMap.mp3"  type="audio/mpeg">
            </audio>

            <h2> Sidra - Peshawar </h2>
            Sidra started work on the polio eradication campaign in 2018 after her divorce. She says it’s “very difficult” to manage this work with household routine but wants to not only save other children from the disease but also earn enough to provide decent education for her young daughter.
Due to her lack of education, Sidra says she was unable to find a job and, given the situation in Pakistan, she took up this role despite the money being “not enough”.
            </span>
            `,
            location: {
                center: [72.4830704, 33.9774079],
                zoom: 7.5,
                pitch: 0,
                bearing: 0,
                speed: 0.3,
                curve: 1,
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: "identifier-4x",
            alignment: "right",
            hidden: false,
            title: "",
            description: `
            <span class="text-left">
            <img src="./gfx/ayeshalahore.png" width="100%" height="auto" alt="photo caption"/>

<audio alt="Ayesha audio" controls>
                <source src="./audio/AyeshaLahoreMap.ogg" type="audio/ogg">
                <source src="./audio/AyeshaLahoreMap.mp3"  type="audio/mpeg">
            </audio>

            <h2> Ayesha - Lahore </h2>
            The 35-year-old mother of one is a polio survivor based in the eastern city of Lahore.Because of polio, she does not have the energy levels needed to administer vaccine on foot during campaigns. Her husband is unemployed and financial needs mean Ayesha defiantly works in the field, going door to door and vaccinating children across up to 80 houses in her area every month.
            </span>
            `,
            location: {
                center: [74.1695845, 31.4831276],
                zoom: 7.5,
                pitch: 0,
                bearing: 0,
                speed: 0.3,
                curve: 1,
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: "identifier-5x",
            alignment: "right",
            hidden: false,
            title: "",
            description: `
            <span class="text-left">
            <img src="./gfx/Razia.png" width="100%" height="auto" alt="photo caption"/>

<audio alt="Razia audio" controls>
                <source src="./audio/RaziaMultanMap.ogg" type="audio/ogg">
                <source src="./audio/RaziaMultanMap.mp3"  type="audio/mpeg">
            </audio>

            <h2> Razia - Multan </h2>
            Razia has been working on the polio eradication campaign since 1996. She has faced plenty of refusals as well as the subject of harassment, taunting and mocking. She says things have changed considerably now and not only have the refusal rates dropped significantly, parents would often bring their children to her in case they missed a campaign.
            Due to a large area she needs to cover during the polio campaigns, as well as assisting pregnant women with travels, Razia learnt how to ride a motorcycle a couple of years ago.
            </span>
            `,
            location: {
                center: [71.3922584, 30.1813788],
                zoom: 7.5,
                pitch: 0,
                bearing: 0,
                speed: 0.3,
                curve: 1,
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: "identifier-6x",
            alignment: "right",
            hidden: false,
            title: "",
            description: `
            <span class="text-left">
            <img src="./gfx/amirkarachi.png" width="100%" height="auto" alt="photo caption"/>

            <h2> Amir - Karachi </h2>
            Thirty-three-year-old Amir is a polio survivor based in Karachi. Unable to finish his higher education due to the financial situation at home, Amir first took up a job as a computer operator before signing up with the polio eradication campaign. He was shoved and slapped during one campaign. In another, a father who refused vaccination to his children threatened to kill Amir if he saw him in the area again. However, Amir said he persisted with the campaign because “it’s very important that we save someone else’s kid even if I was not able to take those drops as a kid”.
            </span>
            `,
            location: {
                center: [67.3317119, 24.525162],
                zoom: 7.5,
                pitch: 0,
                bearing: 0,
                speed: 0.3,
                curve: 1,
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: "identifier-7x",
            alignment: "right",
            hidden: false,
            title: "",
            description: `
            <span class="text-left">
            <img src="./gfx/gulnazkarachi.png" width="100%" height="auto" alt="photo caption"/>
           
            <h2> Gulnaz - Karachi </h2>
            Gulnaz’s sister-in-law and niece were shot dead during a polio campaign in 2012.
            She was close to giving up but then told herself that “there will always be obstacles in life when you’re trying to do something good”.
            That thought spurred her on and despite taunts and hooting, Gulnaz stuck to her aim of ensuring she reaches the maximum number of children and that no “innocent flower [child]” ever has to deal with the polio virus.
            
            </span>
            `,
            location: {
                center: [67.3317119, 25.525162],
                zoom: 7.5,
                pitch: 0,
                bearing: 0,
                speed: 0.3,
                curve: 1,
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: "identifier-1x",
            alignment: "right",
            hidden: false,
            description: `
            <span class="text-left">
            <img src="./gfx/hiratorkham.png" width="100%" height="auto" alt="photo caption"/>

            <h2> Saba - Torkham border </h2>
            Saba works at one of the main border crossings between Pakistan and Afghanistan. She says the border area is very active with a large influx of people. The refusal rates are almost zero at the border given that it’s a necessity for anyone to cross over to either side.
Saba says her team administers around 250 vaccinations daily and members get paid 600 to 900 Pakistani rupees (approximately $2-$3) daily.
        
            </span>
            `,
            location: {
                center: [71.4350415, 34.3189943],
                zoom: 7.5,
                pitch: 0,
                bearing: 0,
                speed: 0.3,
                curve: 1,
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [],
            onChapterExit: [],
        },

        {
            id: "identifier-endx",
            alignment: "center",
            hidden: false,
            description: `
            <span class="text-left">
            <h2>CHAPTER 2</h2>
Pakistan is one of only two countries in the world where poliovirus is still endemic – the other being neighbours Afghanistan.
<br><br>
The two countries share a 2,611km (1,622 miles) long border.
<br><br>
Since 2015, Pakistan has reported 358 polio cases, including eight this year. The figure has come down from the 20,000 that has been reported by officials who add that the numbers are falling due to increased surveillance and sampling and there remains just one local cluster of the poliovirus in Pakistan – the YB3C - cases for which were last discovered in November 2023.
<br><br>
<img src="./gfx/pakistanpoliocases_2.png" width="120%" height="auto" alt="photo caption"/>
<br><br>
In addition to human cases, wild poliovirus type 1 (WPV1) has frequently been detected in environmental samples taken across the country. This year, WPV1 has been found in 49 of Pakistan’s 166 districts.
<br><br>
“Unfortunately, we can’t stop the virus from coming in,” Shahzad Baig, former national coordinator of Pakistan’s polio-eradication programme, who was replaced at the end of May, told Al Jazeera.
<br><br>
“The strain we are detecting in environmental samples and children this year is the YB3A which is found in Afghanistan. Because of that, we’ve tightened our vaccination at the border, made entry and exit points vaccination centres in all major districts at the border and are also focusing on travel routes from those districts to Quetta, Peshawar and Karachi, the three major destinations.”
<br><br>
The focus has shifted to what they call a very mobile population.In addition, authorities are also up against two major obstacles in their fight against polio – security issues and vaccine refusals.
<br><br>
At least 102 polio field workers and security officials accompanying the teams have been killed during campaigns across Pakistan. Many more have been wounded. Some have given up but others stayed back to fight those fighting the efforts to eradicate polio in Pakistan.
<br><br>
Apart from the physical attacks, polio workers have also been targets of verbal attacks, threats, harassment and a misinformation campaign which is a contributing factor to vaccine refusals.
<br><br>
In 2011, it was reported that a CIA-organised fake vaccination campaign, separate to the polio campaign, in northern Pakistan ultimately led to the killing of Osama bin Laden.
<br><br>
“Over the last decade, the polio eradication effort has gone through multiple ups and downs,” Dr Hamid Jafari, WHO’s Director of Polio Eradication, told Al Jazeera
<br><br>
“If you don’t eradicate it, you will see sporadic outbreaks. That’s why Pakistan and Afghanistan haven’t succeeded in stopping its transmission. They go through periods of very little cases and detections and then there’s a resurgence and you get an outbreak.
<br><br>
Health authorities in Pakistan have listed seven districts classified as “endemic” in the country. All seven lie in the northwestern Khyber-Pakhtunkhwa province where officials say, the security situation has been the biggest obstacle in reaching the target audience.
<br><br>
<img src="./gfx/Interactive_Polio_endemic.png" width="100%" height="auto" alt="photo caption"/>
<br><br>
“There are often events that are political or security related or a decline in programme quality that leads to an increase in the number of under-vaccinated children and then you get an outbreak,” Jafari added.
<br><br>
Marginalised communities have also resorted to boycotting the campaigns, demanding better civil services and infrastructure, including roads, schools and hospitals, from the government before allowing the health workers to carry out the work in their areas.
<br><br>
Aidan O’Leary, a WHO regional director for polio eradication, told Al Jazeera that these communities are “essentially using whatever means they can to leverage for other services”. 
<br><br>
“Communities are using every means that they can to try and kind of leverage services from government at district, divisional and provincial level,” he added.
<br><br>
When it comes to workers, in addition to external factors, demanding conditions and hostility, they say low pay, salary delays, lack of assistance and compassion are some of the factors that they face.
<br><br>
Some health workers told Al Jazeera they get paid as little as 1,360 rupees per day (about $5) for at least eight hours of work. Catch-up days when they go out in the field after the end of the campaign to vaccinate children who were missed are not paid, they said.
<br><br>
Some polio survivors now working on the campaign do not receive help with transport or health benefits despite their conditions, leaving them to walk in poor weather and tough terrain to carry out their work.
<br><br>
“The amount I get paid is nowhere near enough given how high the cost of living is now and the number of hours I put in,” a lady health worker in the southern city of Karachi told Al Jazeera. She did not want her identity to be revealed for fear of losing her job.
<br><br>
“We have to run the house on credit, taking loans from friends and family. We’re always in the red. I just think that, given the work we do, the government needs to look after us better, just like we’re doing for the children of the nation. I have a duty towards these children but I also need to think about my own kids.”
<br><br>
Just over 1,600km (994 miles) to the north at the Torkham border, one of the main crossing points between Pakistan and Afghanistan, the issues facing these workers remain the same.
<br><br>
The Torkham border point is the main point of transit for travellers and goods between Pakistan and landlocked Afghanistan. A permanent vaccination point has been set up at the border while health workers are also present at security checkpoints leading to the border.
<br><br>
A female worker administering vaccination at the border point lamented the lack of facilities for women at the location, including toilets and prayer rooms, “further exacerbating the challenges we already face while working in a male-dominated space.
<br><br>
“Due to the continuous rush at the border, leave is not permitted. Salary delays and high inflation make it increasingly difficult to manage household expenses, particularly with school-going children and no additional sources of income,” the health worker, who did not wish to be named, told Al Jazeera.
<br><br>
From 2013 to 2023, authorities administered more than 300 million doses of oral vaccine annually with the help of over 350,000 vaccinators. More than $9.3 billion were spent on the efforts in that time period. 
<br><br>
However, despite these efforts and the amount, Pakistan has been unable to eradicate polio.
<br><br>
After a meeting last month with American billionaire philanthropist Bill Gates in Islamabad last week, Pakistan’s PM Shehbaz Sharif said the government “remains steadfast” in its aim to eradicate polio.
<br><br>
Baig, who was the NEOC chief until May, told Al Jazeera that the aim was to make Pakistan polio-free by 2026.
<br><br>
WHO’s Jafari says “it’s not a widespread problem across Pakistan”. 
<br><br>
“It is now a matter of getting to these final, hard-to-reach populations. When you start reaching these populations, progress happens very fast,” he said.
            </span>


<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="./img/img1.jpeg" alt="1st slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./img/img2.jpeg" alt="2nd slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./img/img3.jpeg" alt="3rd slide">
    </div>
    <div class="carousel-item">
    <img class="d-block w-100" src="./img/img4.jpeg" alt="4th slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./img/img5.jpeg" alt="5th slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./img/img6.jpeg" alt="6th slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./img/img7.jpeg" alt="7th slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./img/img8.jpeg" alt="8th slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./img/img9.jpeg" alt="9th slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./img/img10.jpeg" alt="10th slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        
            `,
            location: {
                center: [69.796262, 29.215181],
                zoom: 6,
                pitch: 0,
                bearing: 0,
                speed: 0.3,
                curve: 1,
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [],
            onChapterExit: [],
        },
    ],
};
