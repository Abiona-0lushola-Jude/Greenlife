import Footer from './sub-body/Footer'
import aboutImage from '../assest/OIP (1).jpg'
import daniel from '../assest/image-daniel.jpg'
import kira from '../assest/image-kira.jpg'
import jonathan from '../assest/image-jonathan.jpg'
import jeanette from '../assest/image-jeanette.jpg'
import patrick from '../assest/image-patrick.jpg'


const About = () => {
  
    const teams = [
      {
        name: "Daniel",
        role:"CEO/ Managing Director",
        about:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe ut vero odit laudantium! Temporibus fuga necessitatibus harum sequi, pariatur reiciendis.",
        image:daniel
      },
      {
        name: "Jeanette",
        role:"Supervisor Director",
        about:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe ut vero odit laudantium! Temporibus fuga necessitatibus harum sequi, pariatur reiciendis.",
        image:jeanette
      },
      {
        name: "Jonathan",
        role:"HR Manager",
        about:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe ut vero odit laudantium! Temporibus fuga necessitatibus harum sequi, pariatur reiciendis.",
        image:jonathan
      },
      {
        name: "Kira",
        role:"Developer",
        about:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe ut vero odit laudantium! Temporibus fuga necessitatibus harum sequi, pariatur reiciendis.",
        image:kira
      },
      {
        name: "Patrick",
        role:"Designer",
        about:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe ut vero odit laudantium! Temporibus fuga necessitatibus harum sequi, pariatur reiciendis.",
        image:patrick
      }
    ]

  

  

  return (
    <div className='my-20'>
      <h1 className="text-3xl">About</h1>
      <div className="w-full flex items-center">
            <div className="w-1/2 my-5">
                <p className="text-gray-500 text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Fugit deleniti harum praesentium repudiandae inventore officia a earum quod veritatis enim deserunt vero, corporis culpa adipisci, perspiciatis ab qui eum, numquam aliquid? 
                Voluptas magnam minima ut quaerat suscipit tenetur? Magnam accusamus, incidunt qui architecto perferendis minus ipsum eum beatae alias provident?</p>
            </div>
            <div className="w-full h-1/4 flex justify-center mb-5">
                <img src={aboutImage} alt="" className="w-1/3 h-1/3" />
            </div>
      </div>
      <div className="w-full bg-emerald-800 p-10">
        <h1 className="text-3xl text-white text-center">Meet the Team</h1>
        <div className="flex w-full justify-evenly py-10">
          <div className="flex w-1/5 flex-col gap-6 items-center">
            <div  className='w-1/2 gap-6 items-center'>
              <img src={teams[0].image} alt='image of ' className="w-full h-full rounded" /> 
            </div>
            <div className='flex flex-col items-center'>
              <h1 className="text-center text-2xl text-white">{teams[0].name}</h1>
              <p className="text-gray-300 text-1xl text-start">{teams[0].about}</p> 
              <button className='px-5 py-2 my-5 bg-white rounded'>{teams[0].role}</button>
            </div>
          </div>
          
          <div className="flex w-1/5 flex-col gap-6 items-center">
            <div  className='w-1/2 gap-6 items-center'>
              <img src={teams[1].image} alt='image of ' className="w-full h-full rounded" /> 
            </div>
            <div className='flex flex-col items-center'>
              <h1 className="text-center text-2xl text-white">{teams[1].name}</h1>
              <p className="text-gray-300 text-1xl text-start">{teams[1].about}</p> 
              <button className='px-5 py-2 my-5 bg-white rounded'>{teams[1].role}</button>
            </div>
          </div>

          <div className="flex w-1/5 flex-col gap-6 items-center">
            <div  className='w-1/2 gap-6 items-center'>
              <img src={teams[2].image} alt='image of ' className="w-full h-full rounded" /> 
            </div>
            <div className='flex flex-col items-center'>
              <h1 className="text-center text-2xl text-white">{teams[2].name}</h1>
              <p className="text-gray-300 text-1xl text-start">{teams[2].about}</p> 
              <button className='px-5 py-2 my-5 bg-white rounded'>{teams[2].role}</button>
            </div>
          </div>

          <div className="flex w-1/5 flex-col gap-6 items-center">
            <div  className='w-1/2 gap-6 items-center'>
              <img src={teams[3].image} alt='image of ' className="w-full h-full rounded" /> 
            </div>
            <div className='flex flex-col items-center'>
              <h1 className="text-center text-2xl text-white">{teams[3].name}</h1>
              <p className="text-gray-300 text-1xl text-start">{teams[3].about}</p> 
              <button className='px-5 py-2 my-5 bg-white rounded'>{teams[3].role}</button>
            </div>
          </div>

          <div className="flex w-1/5 flex-col gap-6 items-center">
            <div  className='w-1/2 gap-6 items-center'>
              <img src={teams[4].image} alt='image of ' className="w-full h-full rounded" /> 
            </div>
            <div className='flex flex-col items-center'>
              <h1 className="text-center text-2xl text-white">{teams[4].name}</h1>
              <p className="text-gray-300 text-1xl text-start">{teams[4].about}</p> 
              <button className='px-5 py-2 my-5 bg-white rounded'>{teams[4].role}</button>
            </div>
          </div>
      </div>
      </div>

      <div>
        <Footer />
      </div>

    </div>
  )
}

export default About
