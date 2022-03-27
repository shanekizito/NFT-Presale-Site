import React from 'react'



import looney   from '../images/looney.png';
import fabulous  from '../images/fabulous.png';
import kitekat  from '../images/kitekat.png';
import amani  from '../images/amani.png';
import meditation from '../images/meditation.png';
import burgundy from '../images/burgundy.png';
import arabica from '../images/arabica.png';


const Launchpad = () => {
    return (
        <div>
            <div className="upcoming-container">
                <div className="upcoming-header">
                <h1 >Brand new</h1>
                <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2YxYzQwZiI+PHBhdGggZD0iTTQ4LjE2LDE3LjJjLTcuMzkwNjIsMCAtMTMuOTM0NjksMy45MjM3NSAtMTcuNTIyNSw5Ljc4MjVjMy43ODkzOCwtMS4zNDM3NSA4LjMwNDM4LC0yLjI1NzUgMTMuNzYsLTIuMjU3NWMxMS4wOTkzOCwwIDE4LjgyNTk0LDUuNDE1MzEgMjQuMjk1LDEwLjc1Yy0xLjE1NTYyLC0xMC40MDA2MiAtOS43NjkwNiwtMTguMjc1IC0yMC41MzI1LC0xOC4yNzV6TTEyMy44NCwxNy4yYy0xMC45NjUsMCAtMTkuNjU5MDYsOC4yMTAzMSAtMjAuNTMyNSwxOC45MmM1LjU0OTY5LC01LjU0OTY5IDEzLjUxODEzLC0xMS4zOTUgMjUuMDQ3NSwtMTEuMzk1YzUuMDUyNSwwIDkuMTc3ODEsMC44MzMxMyAxMi43OTI1LDIuMDQyNWMtMy42MTQ2OSwtNS43MjQzNyAtMTAuMDEwOTQsLTkuNTY3NSAtMTcuMzA3NSwtOS41Njc1ek00NC4zOTc1LDMxLjYwNWMtMjAuNzYwOTQsMCAtMjQuNjE3NSwxMy4zMDMxMyAtMjYuNjYsMjAuMzE3NWMtMi41OTM0NCw3Ljk2ODQ0IC02LjgyNjI1LDIzLjkwNTMxIC0xMC4yMTI1LDM3LjE5NWM3LjIyOTM4LC02LjIwODEyIDE2LjYyMjE5LC05Ljk5NzUgMjYuODc1LC05Ljk5NzVjMjIuNzYzMTMsMCA0MS4yOCwxOC41MTY4OCA0MS4yOCw0MS4yOGMwLDEuNzIgLTAuMTIwOTQsMy4zODYyNSAtMC4zMjI1LDUuMDUyNWMwLjA2NzE5LDAuMDI2ODggMC4xMzQzOCwwLjA4MDYzIDAuMjE1LDAuMTA3NWMwLjM0OTM4LDAuMTIwOTQgMC43MTIxOSwwLjIwMTU2IDEuMDc1LDAuMzIyNWMwLjM4OTY5LDAuMTIwOTQgMC43NzkzOCwwLjIxNSAxLjE4MjUsMC4zMjI1YzAuNDQzNDQsMC4xMDc1IDAuOTI3MTksMC4yMjg0NCAxLjM5NzUsMC4zMjI1YzAuMzc2MjUsMC4wODA2MyAwLjY4NTMxLDAuMjU1MzEgMS4wNzUsMC4zMjI1YzAuNTY0MzgsMC4wOTQwNiAxLjEyODc1LDAuMTQ3ODEgMS43MiwwLjIxNWMwLjMzNTk0LDAuMDQwMzEgMC43MzkwNiwwLjA4MDYzIDEuMDc1LDAuMTA3NWMwLjk1NDA2LDAuMDgwNjMgMS44ODEyNSwwLjEwNzUgMi45MDI1LDAuMTA3NWMxLjAyMTI1LDAgMS45NjE4OCwtMC4wMjY4NyAyLjkwMjUsLTAuMTA3NWMwLjMzNTk0LC0wLjAyNjg3IDAuNjQ1LC0wLjA2NzE5IDAuOTY3NSwtMC4xMDc1YzAuNjA0NjksLTAuMDY3MTkgMS4yNjMxMywtMC4xMjA5NCAxLjgyNzUsLTAuMjE1YzAuMzc2MjUsLTAuMDY3MTkgMC43MTIxOSwtMC4yNDE4NyAxLjA3NSwtMC4zMjI1YzAuNDcwMzEsLTAuMDk0MDYgMC45NTQwNiwtMC4yMTUgMS4zOTc1LC0wLjMyMjVjMC40MDMxMywtMC4xMDc1IDAuODA2MjUsLTAuMjAxNTYgMS4xODI1LC0wLjMyMjVjMC4zNzYyNSwtMC4xMDc1IDAuNzI1NjMsLTAuMTg4MTIgMS4wNzUsLTAuMzIyNWMwLjA2NzE5LC0wLjAyNjg3IDAuMTM0MzgsLTAuMDk0MDYgMC4yMTUsLTAuMTA3NWMtMC4yMDE1NiwtMS42NjYyNSAtMC4zMjI1LC0zLjMzMjUgLTAuMzIyNSwtNS4wNTI1YzAsLTIyLjc2MzEyIDE4LjUxNjg4LC00MS4yOCA0MS4yOCwtNDEuMjhjMTAuNjE1NjMsMCAyMC4zMDQwNiw0LjAzMTI1IDI3LjYyNzUsMTAuNjQyNWMtMy40NjY4NywtMTMuNDEwNjIgLTcuNzUzNDQsLTI5LjcxMDMxIC0xMC4yMTI1LC0zNy44NGMtMi41MTI4MSwtNy41NjUzMSAtNi43NDU2MiwtMjAuMzE3NSAtMjYuNjYsLTIwLjMxNzVjLTEyLjQ1NjU2LDAgLTE5Ljk5NSw4Ljc0NzgxIC0yNC45NCwxNC41MTI1Yy0xLjA2MTU2LDEuMjM2MjUgLTIuMzM4MTIsMi44ODkwNiAtMy4yMjUsMy42NTVjLTQuMDMxMjUsLTIuOTY5NjkgLTkuMDgzNzUsLTQuNzMgLTEzLjg2NzUsLTQuNzNjLTUuMDM5MDYsMCAtMTAuMjkzMTIsMS44NTQzOCAtMTMuODY3NSw0LjczYy0wLjkwMDMxLC0wLjc1MjUgLTIuMzM4MTIsLTIuNDU5MDYgLTMuNDQsLTMuNzYyNWMtNC44Nzc4MSwtNS43MjQzNyAtMTIuMjQxNTYsLTE0LjQwNSAtMjQuNjE3NSwtMTQuNDA1ek0zNC40LDg2Yy0xMy42NTI1LDAgLTI1LjQxMDMxLDguMDIyMTkgLTMwLjk2LDE5LjU2NWMtMS4wNDgxMiwyLjE5MDMxIC0xLjg5NDY5LDQuNDg4MTMgLTIuNDcyNSw2Ljg4Yy0wLjAyNjg3LDAuMTA3NSAtMC4wODA2MiwwLjIxNSAtMC4xMDc1LDAuMzIyNWMtMC4yNDE4NywxLjA0ODEzIC0wLjQwMzEyLDIuMTM2NTYgLTAuNTM3NSwzLjIyNWMtMC4wMjY4OCwwLjIxNSAtMC4wODA2MiwwLjQzIC0wLjEwNzUsMC42NDVjLTAuMTQ3ODEsMS4yMzYyNSAtMC4yMTUsMi40NzI1IC0wLjIxNSwzLjc2MjVjMCwxOC45NzM3NSAxNS40MjYyNSwzNC40IDM0LjQsMzQuNGMxLjE2OTA2LDAgMi4yOTc4MSwtMC4xMDc1IDMuNDQsLTAuMjE1YzAuNTc3ODEsLTAuMDY3MTkgMS4xNTU2MywtMC4xMzQzNyAxLjcyLC0wLjIxNWMwLjU1MDk0LC0wLjA4MDYyIDEuMDc1LC0wLjEwNzUgMS42MTI1LC0wLjIxNWMwLjc2NTk0LC0wLjE2MTI1IDEuNTA1LC0wLjQ0MzQ0IDIuMjU3NSwtMC42NDVjMC4zMDkwNiwtMC4wODA2MiAwLjY1ODQ0LC0wLjEyMDk0IDAuOTY3NSwtMC4yMTVjMC44ODY4OCwtMC4yNjg3NSAxLjczMzQ0LC0wLjUyNDA2IDIuNTgsLTAuODZjMC4xNDc4MSwtMC4wNjcxOSAwLjM3NjI1LC0wLjE0NzgxIDAuNTM3NSwtMC4yMTVjMC45NTQwNiwtMC4zODk2OSAxLjg4MTI1LC0wLjgwNjI1IDIuNzk1LC0xLjI5YzAuMDQwMzEsLTAuMDI2ODcgMC4wNjcxOSwtMC4wODA2MiAwLjEwNzUsLTAuMTA3NWMxMC40ODEyNSwtNS41MzYyNSAxNy43MTA2MywtMTYuMjcyODEgMTguMjc1LC0yOC44MWMwLjAyNjg4LC0wLjUyNDA2IDAuMTA3NSwtMS4wODg0NCAwLjEwNzUsLTEuNjEyNWMwLC0xOS4wMDA2MiAtMTUuMzk5MzcsLTM0LjQgLTM0LjQsLTM0LjR6TTEzNy42LDg2Yy0xOC45NzM3NSwwIC0zNC40LDE1LjQyNjI1IC0zNC40LDM0LjRjMCwwLjUyNDA2IDAuMDk0MDYsMS4wODg0NCAwLjEwNzUsMS42MTI1YzAuMjU1MzEsNS42ODQwNiAxLjgxNDA2LDEwLjkzODEzIDQuNTE1LDE1LjU4NzVjMC4wMjY4OCwwLjA0MDMxIDAuMDgwNjMsMC4wODA2MyAwLjEwNzUsMC4xMDc1YzAuNTEwNjMsMC44ODY4OCAxLjAyMTI1LDEuNzQ2ODggMS42MTI1LDIuNThjMC4wNTM3NSwwLjA2NzE5IDAuMTYxMjUsMC4xNDc4MSAwLjIxNSwwLjIxNWMwLjU2NDM4LDAuNzkyODEgMS4xOTU5NCwxLjUxODQ0IDEuODI3NSwyLjI1NzVjMC4xMDc1LDAuMTIwOTQgMC4yMDE1NiwwLjMwOTA2IDAuMzIyNSwwLjQzYzAuNTkxMjUsMC42NTg0NCAxLjE5NTk0LDEuMzE2ODggMS44Mjc1LDEuOTM1YzAuMTM0MzgsMC4xMzQzOCAwLjI5NTYzLDAuMzA5MDYgMC40MywwLjQzYzAuNjMxNTYsMC42MDQ2OSAxLjI0OTY5LDEuMTY5MDYgMS45MzUsMS43MmMwLjIyODQ0LDAuMTg4MTMgMC41MTA2MywwLjM0OTM4IDAuNzUyNSwwLjUzNzVjMC42MTgxMywwLjQ3MDMxIDEuMTgyNSwwLjg3MzQ0IDEuODI3NSwxLjI5YzAuMzIyNSwwLjIxNSAwLjY0NSwwLjQ0MzQ0IDAuOTY3NSwwLjY0NWMwLjU5MTI1LDAuMzYyODEgMS4yMDkzOCwwLjczOTA2IDEuODI3NSwxLjA3NWMwLjQxNjU2LDAuMjE1IDAuODQ2NTYsMC4zMjI1IDEuMjksMC41Mzc1YzAuNTUwOTQsMC4yNjg3NSAxLjE1NTYzLDAuNjMxNTYgMS43MiwwLjg2YzAuNTM3NSwwLjIxNSAxLjA2MTU2LDAuMzM1OTQgMS42MTI1LDAuNTM3NWMwLjQ5NzE5LDAuMTc0NjkgMC45MDAzMSwwLjM4OTY5IDEuMzk3NSwwLjUzNzVjMC41NTA5NCwwLjE3NDY5IDEuMTU1NjMsMC4yOTU2MyAxLjcyLDAuNDNjMC40OTcxOSwwLjEyMDk0IDEuMTAxODgsMC4zMjI1IDEuNjEyNSwwLjQzYzAuMzc2MjUsMC4wODA2MyAwLjY4NTMxLDAuMDUzNzUgMS4wNzUsMC4xMDc1YzAuMzg5NjksMC4wNjcxOSAwLjc5MjgxLDAuMTYxMjUgMS4xODI1LDAuMjE1YzAuMzM1OTQsMC4wNTM3NSAwLjcyNTYzLDAuMDY3MTkgMS4wNzUsMC4xMDc1YzEuMTQyMTksMC4wOTQwNiAyLjI3MDk0LDAuMjE1IDMuNDQsMC4yMTVjMTguOTczNzUsMCAzNC40LC0xNS40MjYyNSAzNC40LC0zNC40YzAsLTEuMDc1IC0wLjEyMDk0LC0yLjA2OTM3IC0wLjIxNSwtMy4xMTc1Yy0wLjA0MDMxLC0wLjM4OTY5IC0wLjA1Mzc1LC0wLjc5MjgxIC0wLjEwNzUsLTEuMTgyNWMtMC4wNjcxOSwtMC42MTgxMiAtMC4xMDc1LC0xLjIyMjgxIC0wLjIxNSwtMS44Mjc1Yy0wLjA4MDYyLC0wLjQ4Mzc1IC0wLjIxNSwtMC45MjcxOSAtMC4zMjI1LC0xLjM5NzVjLTAuMTA3NSwtMC41MTA2MiAtMC4yOTU2MiwtMS4xMTUzMSAtMC40MywtMS42MTI1Yy0wLjEzNDM3LC0wLjQ5NzE5IC0wLjI2ODc1LC0wLjkxMzc1IC0wLjQzLC0xLjM5NzVjLTQuNDc0NjksLTEzLjgxMzc1IC0xNy40MTUsLTIzLjg2NSAtMzIuNjgsLTIzLjg2NXpNODYsOTIuODhjMy44MDI4MSwwIDYuODgsMy4wNzcxOSA2Ljg4LDYuODhjMCwzLjgwMjgxIC0zLjA3NzE5LDYuODggLTYuODgsNi44OGMtMy43ODkzNywwIC02Ljg4LC0zLjA3NzE5IC02Ljg4LC02Ljg4YzAsLTMuODAyODEgMy4wOTA2MywtNi44OCA2Ljg4LC02Ljg4ek0xNy4yLDExNi45NmMxLjg5NDY5LDAgMy40NCwxLjUzMTg4IDMuNDQsMy40NGMwLDcuNzEzMTMgNi4wNDY4OCwxMy43NiAxMy43NiwxMy43NmMxLjg5NDY5LDAgMy40NCwxLjUzMTg4IDMuNDQsMy40NGMwLDEuOTA4MTMgLTEuNTQ1MzEsMy40NCAtMy40NCwzLjQ0Yy0xMS41Njk2OSwwIC0yMC42NCwtOS4wNzAzMSAtMjAuNjQsLTIwLjY0YzAsLTEuOTA4MTIgMS41NDUzMSwtMy40NCAzLjQ0LC0zLjQ0ek0xMjMuODQsMTE2Ljk2YzEuOTA4MTMsMCAzLjQ0LDEuNTMxODggMy40NCwzLjQ0YzAsNy43MTMxMyA2LjA0Njg4LDEzLjc2IDEzLjc2LDEzLjc2YzEuOTA4MTMsMCAzLjQ0LDEuNTMxODggMy40NCwzLjQ0YzAsMS45MDgxMyAtMS41MzE4NywzLjQ0IC0zLjQ0LDMuNDRjLTExLjU2OTY5LDAgLTIwLjY0LC05LjA3MDMxIC0yMC42NCwtMjAuNjRjMCwtMS45MDgxMiAxLjUzMTg4LC0zLjQ0IDMuNDQsLTMuNDR6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="/>
                </div>
                <div className="upcoming-header-art">
                <h1 >Art</h1>
                </div>
                <div className="upcoming-cards">
                
                <div className="upcoming-cards-main">
                <span className="upcoming-cards-name">Space Ninjas</span><br/>
                  <span className="upcoming-cards-date"></span> 
                 <img src={looney}/>
                </div>
                <div className="upcoming-cards-container">
               
                <div className="upcoming-cards-secondary">
                <span className="upcoming-cards-secondary-name">Flying thoughts</span><br/>
                  <span className="upcoming-cards-secondary-date"></span> 
                <img src={fabulous}></img>
                </div>
                
                <div className="upcoming-cards-secondary">
                <span className="upcoming-cards-secondary-name">Funky 96</span><br/>
                  <span className="upcoming-cards-secondary-date"></span> 
                <img src={kitekat}></img>
                </div>
                <div className="upcoming-cards-secondary">
                <span className="upcoming-cards-secondary-name">Maasai</span><br/>
                  <span className="upcoming-cards-secondary-date"></span> 
                <img src={meditation}></img>
                </div>
                <div className="upcoming-cards-secondary">
                <span className="upcoming-cards-secondary-name">Night Jedi</span><br/>
                  <span className="upcoming-cards-secondary-date"></span> 
                <img src={burgundy}></img>
                </div>
                <div className="upcoming-cards-secondary">
                <span className="upcoming-cards-secondary-name">Osbourne</span><br/>
                  <span className="upcoming-cards-secondary-date"></span> 
                <img src={fabulous}></img>
                </div>
                <div className="upcoming-cards-secondary">
                <span className="upcoming-cards-secondary-name">Faceless motions</span><br/>
                  <span className="upcoming-cards-secondary-date"></span> 
                <img src={arabica}></img>
                </div>
                </div>
                </div>

                <div className="upcoming-cards-gamefi">
                <div className="upcoming-header-gamefi">
                <h1 >Gamefi</h1>
                </div>

                <div className="upcoming-cards-gamefi-main">
                <span className="upcoming-cards-gamefi-name"></span><br/>
                    <span className="upcoming-cards-gamefi-date"></span>
                    <img src={looney}/>
                    <div class="wrap">
               
                <div class="timer">
                    <div class="days">
                        <span id="days_left"> 0</span>
                        days
                    </div>
                    <div class="hours">
                        <span id="hours_left"> 0 </span>
                        hours
                    </div>
                    <div class="mins">
                        <span id="mins_left"> 0 </span>
                        mins
                    </div>
                    <div class="secs">
                        <span id="secs_left"> 0 </span>
                        secs
                    </div>                 
                </div>
            </div>
            
            <p className="text-description-gamefi">
                <span className="offer">Space Ninjas</span> <br/><br/>
                
                Unique, fully 3D and built to unite the ape multiverse.
            Designed and styled by Digimental.</p>
                </div>

              
           
                <div className="upcoming-cards-gamefi-secondary-container">
                <div className="upcoming-cards-gamefi-secondary">
                <span className="upcoming-cards-gamefi-secondary-name">Flying thoughts</span><br/>
                    <span className="upcoming-cards-gamefi-secondary-date"></span>
                <img src={fabulous}></img>
                </div>

                <div className="upcoming-cards-gamefi-secondary">
                <span className="upcoming-cards-gamefi-secondary-name">Funky 96</span><br/>
                    <span className="upcoming-cards-gamefi-secondary-date"></span>
                <img src={kitekat}></img>
                </div>

                <div className="upcoming-cards-gamefi-secondary">
                <span className="upcoming-cards-gamefi-secondary-name">Maasai</span><br/>
                    <span className="upcoming-cards-gamefi-secondary-date"></span>
                <img src={meditation}></img>
                </div>

                <div className="upcoming-cards-gamefi-secondary">
                <span className="upcoming-cards-gamefi-secondary-name">Night Jedi</span><br/>
                    <span className="upcoming-cards-gamefi-secondary-date"></span>
                <img src={burgundy}></img>
                </div>
                </div>
                </div>

                <div className="communities-header"><h1>Trending Communities </h1></div>
                <div className="communities">
                <div className="communities-cards"><img src={looney}/> <p>Bored Ape</p></div>
                <div className="communities-cards"><img src={looney}/> <p>Punks</p></div>
                <div className="communities-cards"><img src={looney}/> <p>Doodles</p></div>
                <div className="communities-cards"><img src={looney}/> <p>Hq</p></div>
                <div className="communities-cards"><img src={looney}/> <p>Phayc</p></div>
                <div className="communities-cards"><img src={looney}/> <p>Hq</p></div>
                </div>
                <div className="communities">
                <div className="communities-cards"><img src={looney}/> <p>Bored Ape</p></div>
                <div className="communities-cards"><img src={looney}/> <p>Punks</p></div>
                <div className="communities-cards"><img src={looney}/> <p>Doodles</p></div>
                <div className="communities-cards"><img src={looney}/> <p>Hq</p></div>
                <div className="communities-cards"><img src={looney}/> <p>Phayc</p></div>
                <div className="communities-cards"><img src={looney}/> <p>Hq</p></div>
                </div>

            </div>
        </div>
    )
}

export default Launchpad
