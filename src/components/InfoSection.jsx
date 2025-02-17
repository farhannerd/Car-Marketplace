import React from 'react'

const InfoSection = () => {
  return (
    <div>
      <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
      <div className="md:col-span-3">
        <img
          src="https://www.motortrend.com/uploads/sites/5/2020/11/2021-MotorTrend-Car-of-the-Year-group-shot-1.jpg?w=768&width=768&q=75&format=webp"
          className="rounded"
          alt=""
        />
      </div>

      <div className="md:col-span-1">
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          Find Your Perfect Ride – New or Used, We Have It All!
          </h2>

          <p className="mt-4 text-gray-700">
          Buying a car should be as exciting as driving one. That’s why we offer a carefully curated selection of both new and used cars, ensuring reliability, affordability, and satisfaction.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default InfoSection
