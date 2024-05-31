import heroImage from '../../assest/OIP.jpg'
import aboutImage from '../../assest/OIP (1).jpg'
import footer from '../../assest/OIF.jpg'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div className=''>
        {/* Hero */}
      <div className="w-full my-20 flex justify-between">
        <div className='w-1/2'>
          <h1 className="text-5xl text-emerald-900 mb-4">A Life of a GreenLiver</h1>
          <p className="text-gray-800 py-2 text-lg text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odio rerum necessitatibus numquam dolor incidunt adipisci, eligendi id assumenda doloribus!</p>
          <div className="flex gap-1 my-5">
              <button className="bg-emerald-900 text-white text-1xl py-3 px-5 rounded border border-emerald-900">Submit</button>
              <input type="text" name="" id="" className="rounded p-3 w-1/2" placeholder='Enter Email Address'/>
          </div>
        </div>
        <div className="w-1/2 h-1/4 flex  justify-center">
          <img src={heroImage} alt="" className="w-1/3 h-1/3" />
        </div>
      </div>

      {/* About */}
      <div className="w-full flex flex-row-reverse items-center">
        <div className="bg-emerald-900 w-1/2 py-20 px-8">
            <h1 className="text-2xl text-white mb-4 text-center">About</h1>
            <p className="text-gray-300 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur impedit iste dignissimos facilis minima corrupti, 
            repellendus, exercitationem delectus ullam maxime cum esse accusamus ipsam distinctio cupiditate harum provident facere! Nostrum, illo!
             Expedita minus tenetur a quidem asperiores nesciunt eum saepe, perspiciatis illo quo dolore voluptates est illum consequatur praesentium itaque!</p>
            <button className="text-1xl text-emerald-900 py-3 px-5 bg-white mt-10 rounded">Sign Up</button>
        </div>
        <div className="w-1/2 h-1/4 flex  justify-center">
          <img src={aboutImage} alt="" className="w-1/3 h-1/3" />
        </div>
      </div>

      {/* signup */}
      <div className="bg-emerald-900 py-10 my-20 flex flex-col items-center">
        <h1 className="text-2xl text-white text-center mb-2">Sign Up</h1>
        <p className="text-gray-200 text-1xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, fuga at. Soluta quidem inventore corporis molestiae sint pariatur cupiditate! Ut!</p>
        <div className="flex gap-1 my-5">
            <button className="bg-white text-emerald-900 text-1xl py-3 px-5 rounded border border-emerald-900">Submit</button>
            <input type="text" name="" id="" className="rounded p-3 w-full" placeholder='Enter Email Address'/>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  )
}

export default HomePage
