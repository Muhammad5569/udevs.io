import Image from "next/image"

const Command = () => {
  
  return (
    <div id='Command' className="bg-blue-50">
      <div className='container'>
        <div className="py-20">
          <h1 className='title'>Team</h1>
          <div className="flex justify-between mt-20">
            <div className="max-w-fit">
              <p className="max-w-96 text-xl text-gray-700 leading-10">
                For each project, we form a team that includes ap project manager,
                business analyst, UI / UX designer, DevOps,
                QA engineer, backend and front-end developers.</p>
              <div>
                <span>
                  100
                  <span>+</span>
                </span>
                <p className="text-4xl text-gray-700 font-extrabold my-8">
                  Dedicated team
                </p>
              </div>
            </div>
            <div className="">
              <Image src='https://udevs.io/static/teamIcon-7e3107c853b8ec1d129a87af0e68945a.svg'
                     alt='pic'
                     width={500} 
                     height={500} />
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Command