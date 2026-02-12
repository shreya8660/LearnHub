import React from 'react'
import { Link } from "react-router-dom";


function Courses() {
  return (
    <section className="py-20 bg-white px-6">

      
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Popular <span className='text-[#39FF14]'>Courses</span>
        </h2>
        <p className="mt-4 text-gray-600">
          Explore our top-rated learning programs
        </p>
      </div>

      {/* Course Cards */}
     <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

  {/* Card 1 */}
  <div className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
    <h3 className="text-xl font-bold text-gray-800">Web Development</h3>
    <p className="mt-3 text-gray-600">
      Learn HTML, CSS, JavaScript and build real projects.
    </p>

    <Link
      to="/enroll/1"
      className="inline-block mt-5 bg-[#39FF14] text-[#0B0B0B] px-4 py-2 rounded-lg hover:bg-[#0B0B0B] hover:text-white transition"
    >
      Enroll Now
    </Link>
      </div>

  {/* Card 2 */}
  <div className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
    <h3 className="text-xl font-bold text-gray-800">UI/UX Design</h3>
    <p className="mt-3 text-gray-600">
      Master modern design principles and tools.
    </p>

    <Link
      to="/enroll/2"
      className="inline-block mt-5 bg-[#39FF14] text-[#0B0B0B] px-4 py-2 rounded-lg hover:bg-[#0B0B0B] hover:text-white transition"
    >
      Enroll Now
    </Link>
  </div>

  {/* Card 3 */}
  <div className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
    <h3 className="text-xl font-bold text-gray-800">Data Structures</h3>
    <p className="mt-3 text-gray-600">
      Strengthen your coding fundamentals step-by-step.
    </p>

    <Link
      to="/enroll/3"
      className="inline-block mt-5 bg-[#39FF14] text-[#0B0B0B] px-4 py-2 rounded-lg hover:bg-[#0B0B0B] hover:text-white transition"
    >
      Enroll Now
    </Link>
  </div>

</div>


    </section>
  )
}

export default Courses