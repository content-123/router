
import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Button,Card,CardActionArea,CardMedia,CardActions,CardContent,Typography}  from '@mui/material';
import {Allpagesmap} from './Allpagesmap'
import {Routes,Route,useNavigate} from 'react-router-dom';
import { Allpages } from './Allpages';
import { FSD } from './FSD';
import {Fsdmap} from './FSDmap'
import { Data } from './Data';
import {Datamap} from './Datamap'
import { Cybermap } from './Cybermap';
import Stack from '@mui/material/Stack';


export const allimg=[{
  display:"https://www.guvi.in/blog/wp-content/uploads/2023/11/How-Post-Pandemic-Era-Reshaped-Tech-Recruitment-01.webp",
  heading:"How Post-Pandemic Era Reshaped Tech Recruitment",
  content:"In recent years, to be more specific, starting from the year 2020, there have been"
  
 
},
{
  display:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Best-DevOps-Tools-to-Master.webp",
  heading:"10 Best DevOps Tools to Master in 2023",
  content:"A DevOps Engineer must be aware of the latest trends, the tech industry follows. "
  
},
{
  display:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Mechanical-Engineering-Resume-Important-Things-To-Look-Out-For.webp",
  heading:"Mechanical Engineering Resume: 9 Important Things To Look Out For",
  content:"With the development of technology, most of us started forgetting about mechanical engineering which pioneered"
  
},

]
export const full=[{
display:"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
heading:"Top Ways to Assess Soft Skills in Full Stack Developers in 2023",
content:"When you’re hiring a full-stack developer, what are the most important things you look for?",


},
{
display:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
heading:"Top Differences: Full Stack Developer vs Software Engineer 2023",
content:"A Full Stack Developer is a tech all-rounder. They work on both the front and "

},
{
display:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
heading:"Horizontal vs Vertical Scaling for Efficient System Design",
content:"In the world of system design, envision a digital skyscraper – a multifaceted structure built"

},

]
export const datas=[{
display:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-2048x1024.webp",
heading:"Impact of Certification Programs on Hiring Data Scientists",
content:"Data scientists are the creators behind transforming the raw data into edible data insights. These",
},
{display:"https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
heading:"Top Product-Based Companies for Data Science Freshers",
content:"In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",},
{display:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp",
heading:"What is the Difference between Data Science and Data Engineering?",
content:"India has been making some serious waves in the world of data. Just like the",},
{display:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-10-Data-Science-Tools.jpg",
heading:"Top 10 Data Science Tools in 2023",
content:"Data Science is an in-demand profession and will continue growing in the coming years. From",}
]
export const cybe=[{
  display:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
heading:"What Is Hacking? Types of Hacking & More",
content:"Have you ever wondered what hacking is all about? It’s a big deal in today’s",
},
{display:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner.png",
heading:"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
content:"Cybersecurity & Ethical hacking and have been key in making sure that your data online",},
{display:"https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
heading:"What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
content:"Look around today, you will witness that we are more reliant on technology and devices",},
{display:"https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1.png",
heading:"8 Different Types of Cybersecurity and Threats Involved",
content:"Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from",}
]
const career=[{
  display:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Machine-Learning-Engineer-Resume-Guide.webp",
  heading:"Machine Learning Engineer Resume Guide: 11 Important Things To Include!",
  content:"The current technological era is full of competition and those who have profound skillset are"
},
{ display:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Mechanical-Engineering-Resume-Important-Things-To-Look-Out-For.webp",
heading:"Mechanical Engineering Resume: 9 Important Things To Look Out For",
content:"With the development of technology, most of us started forgetting about mechanical engineering which pioneered"},
{ display:"https://www.guvi.in/blog/wp-content/uploads/2023/11/1-2048x1072.webp",
heading:"A Compelling Ethical Hacker Resume: 10 Tips and Tricks to Follow",
content:"With the growing concerns of digital security increasing day by day, organizations turn to ethical"}]
function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <div>
        <img className="Blog" src="https://www.guvi.in/blog/wp-content/uploads/2022/04/Guvi-blog-logo.png"/>
       <Button variant="text" onClick={() =>navigate("/all")}>ALL</Button>
            <Button variant="text" onClick={()=>navigate("/fsd")}>FULL STACK DEVELOPMENT</Button>
            <Button variant="text" onClick={()=>navigate("/data")}>DATA SCIENCE</Button>
            <Button variant="text" onClick={()=>navigate("/cyber")}>CYBER SECURITY</Button>
            <Button variant="text" onClick={()=>navigate("/career")}>CAREER</Button>
           <hr/>
<Routes>
<Route path="/" element={<Allpagesmap items={allimg} />} />
<Route path="/all" element={<Allpagesmap items={allimg} />} />
          <Route path="/fsd" element={<Fsdmap items1={full} />} />
          <Route path="/data" element={<Datamap items2={datas}/>}/>
          <Route path="/cyber" element={<Cybermap items3={cybe}/>}/>
          <Route path="/career" element={<Careermap items3={career}/>}/>
</Routes>
  
   
       </div>     
    </div>
  );
     }  function Career({car}){
      return(
        <Stack direction="row" spacing={6} className="Stack">
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={car.display}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {car.heading}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {car.content}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Read More
          </Button>
        </CardActions>
      </Card>
      </Stack>
      )
     }     function Careermap(){
      return(
        <div className="carrermap">
          {career.map((carr)=>(
      <Career  car={carr}/>)
     )}
        </div>
      )
     } 
     
     export default App;

