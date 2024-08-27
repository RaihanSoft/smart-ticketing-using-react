function Offer() {
  return (
    <div>
      <section className="w-11/12 mx-auto mt-24">
        <h1 className="text-5xl text-center py-10 font-extrabold">Best Offers For You</h1>

        <div className="sm:flex justify-center items-center gap-20 ">
          <div className="border-4 bg-warning p-10 flex gap-24 rounded-2xl">
            <div>
              <h1 className="font-extrabold text-3xl">50% OFF</h1>
              <h2>on your next purchase</h2>
              <p>use by January 2024</p>
            </div>
            <div>
              <h1 className="text-2xl font-extrabold">NEWS</h1>
              <h2>Coupon Code</h2>
            </div>
          </div>

          <div className="border-4 bg-warning p-10 flex gap-24 rounded-2xl">
            <div>
              <h1 className="font-extrabold text-3xl">50% OFF</h1>
              <h2>on your next purchase</h2>
              <p>use by January 2024</p>
            </div>
            <div>
              <h1 className="text-2xl font-extrabold">NEWS</h1>
              <h2>Coupon Code</h2>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center my-10">
          <button className="px-10 py-5 rounded-xl hover:bg-green-400 hover:text-white btn-ghost border-4 border-green-500 text-xl font-bold t text-green-400">See All Offers</button>
        </div>
      </section>
    </div>
  );
}

export default Offer;
