import footer from '../../assest/OIF.jpg'

const Footer = () => {
  return (
    <div className="full py-12 flex items-center justify-between">
        <div className="w-1/2 flex flex-col items-center">
        <div className="w-full h-1/4 flex  justify-center mb-5">
          <img src={footer} alt="" className="w-1/3 h-1/3" />
        </div>
        <div>
          <h1 className="text-3xl">Green<sup className="text-emerald-900 text-sm">Life</sup></h1>
        </div>
        </div>
        <div className="w-1/2 flex items-start justify-evenly">
          <ul className='flex flex-col gap-4 items-center'>
            <li className='text-2xl'>Home</li>
            <li>Subscription</li>
            <li>Data</li>
            <li>Call Option</li>
            <li>Renewal</li>
          </ul>
          <ul className='flex flex-col gap-4 items-center'>
            <li className='text-2xl'>About</li>
            <li>Contact</li>
            <li>Meetings</li>
            <li>Careers</li>
          </ul>
          <ul className='flex flex-col gap-4 items-center'>
            <li className='text-2xl'>Service</li>
            <li>Announcement</li>
            <li>Locations</li>
            <li>Volunteers</li>
          </ul>
        </div>
      </div>
  )
}

export default Footer
